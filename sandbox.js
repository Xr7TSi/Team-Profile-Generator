const manager = require("./employeeClasses/manager.js");
const engineer1 = require("./employeeClasses/manager.js");
const engineer2 = require("./employeeClasses/manager.js");
const intern = require("./employeeClasses/manager.js");

function returnNewMgr() {
  return newMgr,
  console.log(newMgr)
}

function returnNewEng1() {
  return newEng1,
  console.log(newEng1)
}

function returnNewEng2() {
  return NewEng2,
  console.log(newEng2)
}

function returnNewIntern() {
  return newIntern,
  console.log(newIntern)
}

function renderHTML() {
    
  
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
        <h1> ${returnNewMgr(name)}</h1>
        <h1> ${returnNewEng1(name)}</h1>
        <h1> ${returnNewEng2(name)}</h1>
        <h1> ${returnNewIntern(name)}</h1>

        <script src="" async defer></script>
    </body>
</html>`;
}

module.exports = renderHTML;
