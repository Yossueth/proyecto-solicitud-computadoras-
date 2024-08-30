import { getDatos, putDatos } from "../services/datos";

// Llamamos a la función dataPc para cargar y mostrar los datos.
dataPc();

// Función principal para obtener y mostrar los datos.
async function dataPc() {
  // Llamamos a getDatos para obtener los datos del servidor.
  let datosPc = await getDatos();

  // Seleccionamos el cuerpo de la tabla en el DOM.
  const cuerpoTabla = document.getElementById("requestsBody");

  // Limpiamos el contenido actual del cuerpo de la tabla.
  cuerpoTabla.innerHTML = "";

  // Filtramos los datos para obtener solo aquellos con solicitud pendiente.
  let pendientes = datosPc.filter(
    (element) => element.solicitud === "pendiente"
  );

  // Iteramos sobre cada elemento pendiente para crear una fila en la tabla.
  pendientes.forEach((element) => {
    // Creamos una nueva fila para la tabla.
    const fila = document.createElement("tr");

    // Creamos y agregamos una celda para el nombre.
    let nombre = document.createElement("td");
    nombre.textContent = element.nombre;
    fila.appendChild(nombre);

    // Creamos y agregamos una celda para la sede.
    let sede = document.createElement("td");
    sede.textContent = element.sede;
    fila.appendChild(sede);

    // Creamos y agregamos una celda para la fecha de salida.
    let fechaSalida = document.createElement("td");
    fechaSalida.textContent = element.fechaSalida;
    fila.appendChild(fechaSalida);

    // Creamos y agregamos una celda para la fecha de entrega.
    let fechaEntrega = document.createElement("td");
    fechaEntrega.textContent = element.fechaEntrada;
    fila.appendChild(fechaEntrega);

    // Creamos y agregamos una celda para el código del PC.
    let codePc = document.createElement("td");
    codePc.textContent = element.codePc;
    fila.appendChild(codePc);

    // Creamos y agregamos una celda para el estado de la solicitud.
    let solicitud = document.createElement("td");
    solicitud.textContent = element.solicitud;
    fila.appendChild(solicitud);

    // Creamos un botón "Aceptar" y lo agregamos a la fila.
    let btnAceptar = document.createElement("button");
    btnAceptar.innerHTML = "Aceptar";
    btnAceptar.className = "aceptar";
    btnAceptar.dataset.id = element.id;
    fila.appendChild(btnAceptar);

    // Creamos un botón "Rechazar" y lo agregamos a la fila.
    let btnRechazar = document.createElement("button");
    btnRechazar.innerHTML = "Rechazar";
    btnRechazar.className = "rechazar";
    fila.appendChild(btnRechazar);

    // Agregamos la fila completa al cuerpo de la tabla.
    cuerpoTabla.appendChild(fila);

    // Añadimos un manejador de eventos para el botón "Aceptar".
    btnAceptar.addEventListener("click", async function () {
      // Limpiamos la fila antes de actualizar el estado.
      fila.innerHTML = "";
      // Llamamos a putDatos para actualizar el estado de la solicitud a "Aceptada".
      await putDatos(
        element.nombre,
        element.sede,
        element.fechaSalida,
        element.fechaEntrada,
        element.codePc,
        (element.solicitud = "Aceptada"),
        element.id
      );
      // Actualizamos el contenido de la celda de solicitud a "Aceptada".
      solicitud.innerHTML = "Aceptada";
      // Volvemos a cargar los datos para reflejar los cambios.
      dataPc();
    });

    // Añadimos un manejador de eventos para el botón "Rechazar".
    btnRechazar.addEventListener("click", async function () {
      // Limpiamos la fila antes de actualizar el estado.
      fila.innerHTML = "";
      // Llamamos a putDatos para actualizar el estado de la solicitud a "Rechazada".
      await putDatos(
        element.nombre,
        element.sede,
        element.fechaSalida,
        element.fechaEntrada,
        element.codePc,
        (element.solicitud = "Rechazada"),
        element.id
      );
      // Actualizamos el contenido de la celda de solicitud a "Rechazada".
      solicitud.innerHTML = "Rechazada";
      // Volvemos a cargar los datos para reflejar los cambios.
      dataPc();
    });
  });
}

// Seleccionamos el botón "Historial" en el DOM.
const btnHistorial = document.getElementById("btnHistorial");

// Añadimos un manejador de eventos para el botón "Historial".
btnHistorial.addEventListener("click", function () {
  // Redirigimos al usuario a la página de historial.
  window.location.href = "http://localhost:1234/admin.html";
});
