// const manager = require("./employeeClasses/manager.js");
// const engineer1 = require("./employeeClasses/manager.js");
// const engineer2 = require("./employeeClasses/manager.js");
// const intern = require("./employeeClasses/manager.js");




function renderHTML(manager, engineer1, engineer2, intern) {
    
  
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
        <h1> ${manager.name}</h1>
        <h1> ${engineer1.name}</h1>
        <h1> ${engineer2.name}</h1>
        <h1> ${intern.name}</h1>
        

       

        <script src="" async defer></script>
    </body>
</html>`;
}

module.exports = renderHTML;



