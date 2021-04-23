
function renderHTML(manager, engineer1, engineer2, intern) {
    return `
  <!DOCTYPE html>

  <html>
      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Team-Profile</title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      </head>
  
      <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Team Profile</span>
          </div>
        </nav>
      <body>
          <div class="card">
              <div class="card-body">
                Manager: ${manager.name} <br>
                Employee ID: ${manager.id} <br>
                Email: ${manager.email} <br>
                Office Number: ${manager.office}
              </div>
            </div>
  
            <div class="card">
              <div class="card-body">
                Engineer: ${engineer1.name} <br>
                Employee ID: ${engineer1.id} <br>
                Email: ${engineer1.email} <br>
                Github Username: ${engineer1.email} <br>
              </div>
            </div>
  
            <div class="card">
              <div class="card-body">
                  Engineer: ${engineer2.name} <br>
                  Employee ID: ${engineer2.id} <br>
                  Email: ${engineer2.email} <br>
                  Github Username: ${engineer2.email} <br>
              </div>
            </div>
  
            <div class="card">
              <div class="card-body">
                Intern: ${intern.name} <br>
                Employee ID: ${intern.id} <br>
                Email: ${intern.email} <br>
                Intern School: ${intern.school}
              </div>
            </div>
      </body>
  </html>`;
}

module.exports = renderHTML;



