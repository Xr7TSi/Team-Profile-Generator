const Engineer2 = require("./employeeClasses/engineer2.js");
const manager = require("./employeeClasses/manager.js");
const engineer1 = require("./employeeClasses/manager.js");
const engineer2 = require("./employeeClasses/manager.js");
const intern = require("./employeeClasses/manager.js");

function returnMgr() {
  return manager;
}

function returnEng1() {
  return engineer1;
}

function returnEng2() {
  return Engineer2;
}

function returnIntern() {
  return intern;
}

function renderHTML(data) {
  
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
        <h1> ${returnMgr(data.name)}</h1>
        <h1> ${returnEng1(data.name)}</h1>
        <h1> ${returnEng2(data.name)}</h1>
        <h1> ${returnIntern(data.name)}</h1>

        <script src="" async defer></script>
    </body>
</html>`;
}

module.exports = renderHTML;
