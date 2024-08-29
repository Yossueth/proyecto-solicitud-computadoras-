
import { get } from "../services/users";

//variables
let loginForm = document.getElementById("loginForm");
let texto = document.getElementById("texto");

// Añade evento 'submit' al formulario de inicio de sesión
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Llama a la función 'get' para obtener la lista de usuarios; si no hay usuarios, se inicializa como un array vacío
  let userList = (await get()) || [];

  try {
    // Busca un usuario en la lista que coincida con el email y la contraseña proporcionados
    let validUser = userList.find(
      (user) => user.email === email && user.password === password
    );

    // Si no se encuentra un usuario válido, muestra un mensaje de error y limpia el mensaje después de 2 segundos
    if (!validUser) {
      texto.innerHTML = "Username and/or password are incorrect";
      setTimeout(() => (texto.innerHTML = ""), 2000);
      return;
    }

    // Redirige al usuario a la página correspondiente según el email
    if (email.endsWith("@admin")) {
      // Si el email termina en "@admin", redirige a la página de solicitudes
      window.location.href = "http://localhost:1234/solicitudes.html";
    } else {
      // De lo contrario, redirige a la página de inicio
      window.location.href = "http://localhost:1234/home.html";
    }
  } catch (error) {
    // Captura y muestra un mensaje de error si ocurre algún problema al obtener los usuarios
    console.error("Error fetching users:", error);
    texto.innerHTML = "An error occurred. Please try again later.";
  }
});
