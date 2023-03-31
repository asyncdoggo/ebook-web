var showdown = require('showdown');
var fs = require('fs');
let filename = process.argv[2] || "README.md"
let pageTitle = ""
let plausibleDomain = ""
var hljs = require('highlight.js');

showdown.extension('highlight', function () {
  function htmlunencode(text) {
    return (
      text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    );
  }
  return [{
    type: "output",
    filter: function (text, converter, options) {
      var left = "<pre><code\\b[^>]*>",
        right = "</code></pre>",
        flags = "g";
      var replacement = function (wholeMatch, match, left, right) {
        match = htmlunencode(match);
        var lang = (left.match(/class=\"([^ \"]+)/) || [])[1];
        left = left.slice(0, 18) + 'hljs ' + left.slice(18);
        if (lang && hljs.getLanguage(lang)) {
          return left + hljs.highlight(match, { language: lang }).value + right;
        } else {
          return left + hljs.highlightAuto(match).value + right;
        }
      };
      return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
    }
  }];
});

fs.readFile(__dirname + '/style.css', function (err, styleData) {
  fs.readFile(__dirname + '/node_modules/highlight.js/styles/atom-one-light.css', function (err, highlightingStyles) {
    fs.readFile(process.cwd() + '/' + filename, function (err, data) {
      if (err) {
        throw err;
      }
      let text = data.toString();

      converter = new showdown.Converter({
        ghCompatibleHeaderId: true,
        simpleLineBreaks: true,
        ghMentions: true,
        extensions: ['highlight'],
        tables: true
      });

      var preContent = `
      <html>
        <head>
          <title>` + pageTitle + `</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta charset="UTF-8">`

      if (plausibleDomain.length > 0) {
        preContent += `
          <script defer data-domain="` + plausibleDomain + `" src="https://plausible.io/js/script.js"></script>
        `
      }
      preContent += `
        </head>
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YL97MTVZHY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YL97MTVZHY');
</script>
        <body>
          <div id='content'>
      `

      let postContent = `

          </div>
          <style type='text/css'>` + styleData + `</style>
          <style type='text/css'>` + highlightingStyles + `</style>
        </body>
      </html>`;

      html = preContent + converter.makeHtml(text) + postContent

      converter.setFlavor('github');
      // console.log(html);

      let markdownFileNameWithoutPath = filename.replace(".md", ".html")
      let filePath = process.cwd() + "/" + markdownFileNameWithoutPath
      fs.writeFile(filePath, html, function (err) {
        if (err) {
          console.log("File '" + filePath + "' already exists. Aborted!");
        } else {
          console.log("Done, saved to " + filePath);
        }
      });
    });
  });
});
