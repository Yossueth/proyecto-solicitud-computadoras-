import { get } from "../services/users";

let loginForm = document.getElementById("loginForm");
let texto = document.getElementById("texto");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let userList = (await get()) || [];

  try {
    if (!email.includes("@admin")) {
      window.location.href = "http://localhost:1234/home.html";
      return;
    }

    let validUser = userList.find(
      (user) => user.email === email && user.password === password
    );

    if (!validUser) {
      texto.innerHTML = "Username and/or password are incorrect";

      setTimeout(() => {
        texto.innerHTML = "";
      }, 2000);

      return;
    }
    
    window.location.href = "http://localhost:1234/solicitudes.html";
  } catch (error) {
    console.error("Error fetching users:", error);
    texto.innerHTML = "An error occurred. Please try again later.";
  }
});
