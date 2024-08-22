//import { get, post } from "./server/fetch";
let texto = document.getElementById("texto")
let signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (password.length < 8) {
    
    texto.innerHTML= "La contraseña es demasiado corta. Debe tener al menos 8 caracteres."
    setTimeout(()=>{
        texto.innerHTML=""
    }, 2000);
    return
   
  }
  let caracteres = /[^a-zA-Z0-9]/;
  if (caracteres.test(password)) {

    texto.innerHTML= "La contraseña no debe contener caracteres especiales."
    setTimeout(()=>{
        texto.innerHTML=""
    }, 2000);
    return
   
  }
  let userList = await get || [];
  let userRegister = userList.find((user) => user.email === email);

  if (userRegister) {
    
    texto.innerHTML= "Un usuario con esa dirección de correo electrónico ya está registrado 😭"
    setTimeout(()=>{
        texto.innerHTML=""
    }, 2000);
    return
  }
  await post({ name: name, email: email, password: password });

  texto.innerHTML= "Registro exitoso 👌"
  setTimeout(()=>{
      texto.innerHTML=""
  }, 2000);
  return
  
  window.location.href = "login.html";
});