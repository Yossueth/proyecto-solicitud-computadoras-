// Importa la función postDatos desde el módulo ../services/datos
import { postDatos } from "../services/datos";

//variables
let formulario = document.getElementById("formulario");
let alerta = document.getElementById("alerta");
let check = document.getElementById("check");

let abrirModal = document.getElementById("abrirModal");

let cerrarModal = document.getElementById("cerrarModal");
let modal = document.querySelector(".modal");

// Añade un evento 'submit' al formulario
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtiene los valores de los campos del formulario
  let nombre = document.getElementById("nombre").value;
  let sede = document.getElementById("sede").value;
  let fechaSalida = document.getElementById("FechaSalida").value;
  let fechaEntrada = document.getElementById("FechaEntrada").value;
  let codePc = document.getElementById("codePc").value;

  // Verifica si alguno de los campos obligatorios está vacío
  if (!nombre || !sede || !fechaSalida || !fechaEntrada || !codePc) {
    // Muestra un mensaje de alerta si faltan campos
    alerta.innerHTML = "Por favor, rellene todos los campos.";

    // Oculta el mensaje de alerta después de 2 segundos
    setTimeout(() => {
      alerta.innerHTML = "";
    }, 2000);
    return;
  }

  // Verifica si el checkbox de términos y condiciones no está marcado
  if (!check.checked) {
    // Muestra un mensaje de alerta si los términos no están aceptados
    alerta.innerHTML = "Acepta los terminos y condiciones";

    // Oculta el mensaje de alerta después de 2 segundos
    setTimeout(() => {
      alerta.innerHTML = "";
    }, 2000);
    return;
  }

  // Crea un objeto con los datos del formulario
  let datos = {
    nombre: nombre,
    sede: sede,
    fechaSalida: fechaSalida,
    fechaEntrada: fechaEntrada,
    codePc: codePc,
    solicitud: "pendiente",
  };

  // Envía los datos del formulario al servidor
  await postDatos(datos);

  // Muestra un mensaje de éxito en el elemento de alerta
  alerta.innerHTML = "Solicitud enviada con éxito";

  // Oculta el mensaje de éxito después de 3 segundos
  setTimeout(() => {
    alerta.innerHTML = "";
  }, 3000);
  return;
});

// Evento 'click' del modal
abrirModal.addEventListener("click", () => {
  // Muestra el modal
  modal.showModal();
});

cerrarModal.addEventListener("click", () => {
  // Cierra el modal
  modal.close();
});
