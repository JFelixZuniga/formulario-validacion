const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "usuario":
      if (expresiones.usuario.test(e.target.value)) {
        document
          .getElementById("grupo__usuario")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__usuario")
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector("#grupo__usuario i")
          .classList.add("fa-check-circle");
        document
          .querySelector("#grupo__usuario i")
          .classList.remove("fa-times-circle");
        document
          .querySelector("#grupo__usuario .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        //en caso de ser FALSE, le agregamos la siguiente clase
        document
          .getElementById("grupo__usuario")
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__usuario")
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector("#grupo__usuario i")
          .classList.add("fa-times-circle");
        document
          .querySelector("#grupo__usuario i")
          .classList.remove("fa-check-circle");
        document
          .querySelector("#grupo__usuario .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;
    case "nombre":
      break;
    case "password":
      break;
    case "password2":
      break;
    case "correo":
      break;
    case "telefono":
      break;
  }
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
});

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
