const Manager = require("./employeeClasses/manager.js");


function renderHTML(data) {
  getMgrName(data);

  return `
        <!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <h1>Here's some text!</h1> 
        <h1> ${Manager.name()}</h1>

        <script src="" async defer></script>
    </body>
</html>`;
}

module.exports = renderHTML;
