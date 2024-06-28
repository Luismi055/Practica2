const users = [
    [
      {
        label: "Nombre",
        value: "Juan",
      },
      {
        label: "Apellido",
        value: "Perez",
      },
      {
        label: "Email",
        value: "alguien@gmail.com",
      },
      {
        label: "Contraseña",
        value: "1234a",
      },
      {
        label: "Repetir contraseña",
        value: "1234a",
      }
    ]
  ]
  function sendForm(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const lastname = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const password2 = event.target.password2.value;
  
    const app = document.getElementById("app");
    app.innerHTML = "";
    if (password !== password2) {
      const error = document.createElement("p");
      error.textContent = "Las contraseñas no coinciden";
      app.appendChild(error);
      return;
    }
  
    const user = [
      {
        label: "Nombre",
        value: name,
      },
      {
        label: "Apellido",
        value: lastname,
      },
      {
        label: "Email",
        value: email,
      },
      {
        label: "Contraseña",
        value: password,
      },
      {
        label: "Repetir contraseña",
        value: password2,
      }
    ];
  
    users.push(user);
  
    const title = document.createElement("h1");
    title.innerHTML = `<h1 class="text-2xl title">
      Datos del usuario
    </h1>`;
    app.appendChild(title);
    app.style.height = "auto";
  
    user.forEach((item) => {
      const container = document.createElement("div"); 
      container.innerHTML = `
              <div
                  class="container__item"  
              > 
                  <span
                      class="item__label"
                  >${item.label}</span>
                  <span
                      class="item__value"
                  >${item.value}</span>
              </div>`;
      app.appendChild(container);
    });
    loadData()
    event.target.reset();
  }
  function loadData() {
    const app = document.getElementById("lista");
    app.innerHTML = "";
    
    app.style.height = "auto";
  
    users.forEach((user) => {
      const row = document.createElement("div");
      user.forEach((item) => {
        const container = document.createElement("div"); 
        container.innerHTML = `
              <div
                  class="container__item"  
              > 
                  <span
                      class="item__label"
                  >${item.label}</span>
                  <span
                      class="item__value"
                  >${item.value}</span>
              </div>`;
        row.appendChild(container);
      });
      app.appendChild(row);
    });
  }