function renderHTML(manager, engineer1, engineer2, intern) {
  return `
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Team-Profile</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
    </head>
  
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid" style="background-color: blue">
        <span class="navbar-brand mb-0 h1" style="margin-left: 10px; color: white"
          >Team Profile</span
        >
      </div>
    </nav>
    <body style="background-color: rgb(134, 134, 141)">
      <div
        class="row"
        style="
          margin-bottom: 10px;
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10px;
        "
      >
        <!-- Manager Section -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              Manager: ${manager.name} <br />
              Employee ID: ${manager.id} <br />
              Email: <a href="mailto: ${manager.email}">${manager.email}</a> <br />
              Office Number: ${manager.office}
            </div>
          </div>
        </div>
      </div>
  
      <div
        class="row"
        style="margin-bottom: 10px; margin-left: 10px; margin-right: 10px"
      >
        <!-- Engineer1 Section -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              Engineer: ${engineer1.name} <br />
              Employee ID: ${engineer1.id} <br />
              Email: <a href="mailto: ${engineer1.email}">${engineer1.email}</a> <br/>
              Github Username: <a href="https://github.com/${engineer1.gitHub}" target="_blank">${engineer1.gitHub}</a> <br/>
            </div>
          </div>
        </div>
        <!-- Engineer2 Section -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              Engineer: ${engineer2.name} <br />
              Employee ID: ${engineer2.id} <br />
              Email: <a href="mailto: ${engineer2.email}">${engineer2.email}</a> <br/>
              Github Username: <a href="https://github.com/${engineer2.gitHub}" target="_blank">${engineer2.gitHub}</a> <br/>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row"
        style="margin-bottom: 10px; margin-left: 10px; margin-right: 10px"
      >
        <!-- Intern Section -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              Intern: ${intern.name} <br />
              Employee ID: ${intern.id} <br />
              Email: <a href="mailto: ${intern.email}">${intern.email}</a> <br/>
              Intern School: ${intern.school}
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
    `;
}

module.exports = renderHTML;
