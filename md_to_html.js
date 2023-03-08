const { marked } = require('marked');
const fs = require("fs")


const file = fs.readFileSync("index.md")


const html = marked.parse(file.toString())

fs.writeFileSync("index.html", `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-weight: normal;
        }

        body {
            padding-left: 10px;
            padding-right: 10px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: large;
        }

        code {
            width: 100%;
            padding-left: 20px;
        }

        pre {
            margin-left: 10px;
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            background-color: #f1f1f1;
        }

        p {
            padding-left: 10px;
            text-align: justify;
        }
    </style>
</head>
<body>
` +
    html +
    `
</body>
</html>
`)

// "
//     <style>
//         body {
//             padding-left: 10px;
//             padding-right: 10px;
//             font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//             font-size: large;
//         }

//         code {
//             width: 100%;
//             padding-left: 20px;
//         }

//         pre {
//             margin-left: 10px;
//             width: 100%;
//             border: 1px solid gray;
//             padding-top: 20px;
//             padding-bottom: 20px;

//         }

//         p {
//             padding-left: 10px;
//             text-align: justify;
//         }
//     </style>"