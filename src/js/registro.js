import { get, post } from "../services/users";

// Variables
let texto = document.getElementById("texto");
let signUpForm = document.getElementById("signUpForm");

// Función para mostrar mensajes
function showMessage(message) {
  texto.innerHTML = message;
  setTimeout(() => {
    texto.innerHTML = "";
  }, 2000);
}

// Evento que se ejecuta cuando el formulario es enviado.
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Verifica si la contraseña tiene menos de 8 caracteres.
  if (password.length < 8) {
    showMessage(
      "La contraseña es demasiado corta. Debe tener al menos 8 caracteres."
    );
    return;
  }

  // Verifica si la contraseña contiene caracteres especiales.
  let caracteres = /[^a-zA-Z0-9]/;
  if (caracteres.test(password)) {
    showMessage("La contraseña no debe contener caracteres especiales.");
    return;
  }

  // Obtiene la lista de usuarios registrados llamando a la función `get`.
  let userList = (await get()) || [];
  // Busca si ya existe un usuario con el mismo correo electrónico.
  let userRegister = userList.find((user) => user.email === email);

  try {
    // Si el correo electrónico ya está registrado, muestra un mensaje y detiene la ejecución.
    if (userRegister) {
      showMessage(
        "Un usuario con esa dirección de correo electrónico ya está registrado 😭"
      );
      return;
    }

    // Si el correo electrónico no está registrado, envía los datos del nuevo usuario al servidor.
    await post({ name: name, email: email, password: password });

    // Muestra un mensaje de éxito y redirige al usuario a la página de inicio de sesión.
    showMessage("Registro exitoso 👌");
    window.location.href = "http://localhost:1234/login.html";
  } catch (error) {
    // Si ocurre un error durante el registro, muestra un mensaje de error y lo registra en la consola.
    showMessage("Ocurrió un error. Por favor, inténtalo de nuevo.");
    console.error("Error en el registro:", error);
  }
});
