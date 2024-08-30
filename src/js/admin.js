import { getDatos, deleteDatos } from "../services/datos";

//funcion para agregar datos a la tabla
function agregarDatosATabla(datos) {
  // Obtiene el elemento del DOM donde se mostrarán las filas de la tabla
  const cuerpoTabla = document.getElementById("requestsBody");

  // Limpia el contenido previo del cuerpo de la tabla
  cuerpoTabla.innerHTML = "";

  // Itera sobre cada objeto en el array de datos
  datos.forEach((item) => {
    // Crea una nueva fila para la tabla
    const fila = document.createElement("tr");

    // Crea y agrega celdas para cada propiedad del objeto
    const celdaFechaEntrada = document.createElement("td");
    celdaFechaEntrada.textContent = item.fechaEntrada;
    fila.appendChild(celdaFechaEntrada);

    const celdaFechaSalida = document.createElement("td");
    celdaFechaSalida.textContent = item.fechaSalida;
    fila.appendChild(celdaFechaSalida);

    const celdaCodeComputadora = document.createElement("td");
    celdaCodeComputadora.textContent = item.codePc;
    fila.appendChild(celdaCodeComputadora);

    const celdaSede = document.createElement("td");
    celdaSede.textContent = item.sede;
    fila.appendChild(celdaSede);

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = item.nombre;
    fila.appendChild(celdaNombre);

    const celdaEstadoSolicitud = document.createElement("td");
    celdaEstadoSolicitud.textContent = item.solicitud;
    fila.appendChild(celdaEstadoSolicitud);

    // Crea un botón para eliminar la fila
    const btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
    btnEliminar.className = "bottonE";

    // Agrega el botón a la fila
    fila.appendChild(btnEliminar);

    // Agrega la fila al cuerpo de la tabla
    cuerpoTabla.appendChild(fila);

    // Asocia un manejador de eventos al botón de eliminar
    btnEliminar.addEventListener("click", () => {
      // Llama a la función para eliminar el dato y maneja el éxito o error
      deleteDatos(item.id)
        .then(() => {
          // Si la eliminación es exitosa, elimina la fila de la tabla
          fila.remove();
        })
        .catch((error) => {
          // Muestra un mensaje de error en la consola si la eliminación falla
          console.error("Error al eliminar", error);
        });
    });
  });
}

// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Obtiene los datos desde el servicio
    const datos = await getDatos();
    console.log(datos);

    // Si se obtienen datos, los agrega a la tabla
    if (datos) {
      agregarDatosATabla(datos);
    }
  } catch (error) {
    // Muestra un mensaje de error en la consola si la obtención de datos falla
    console.error("Error al obtener los datos:", error);
  }
});

// Obtiene los elementos del DOM para el campo de búsqueda y el botón de búsqueda
const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");

// Asocia un manejador de eventos al botón de búsqueda
btnBuscar.addEventListener("click", filtrar);

//Función para filtrar las filas de la tabla en base al texto de búsqueda.
function filtrar() {
  // Obtiene el valor del campo de búsqueda y lo convierte a minúsculas
  const valorBusqueda = buscador.value.toLowerCase();

  // Obtiene todas las filas del cuerpo de la tabla
  const filas = Array.from(document.querySelectorAll("#requestsBody tr"));

  console.log("Filas:", filas);

  // Filtra las filas que contienen el texto de búsqueda
  const filasFiltradas = filas.filter((fila) => {
    const celdas = fila.querySelectorAll("td");
    let textoFila = "";

    // Concadena el texto de todas las celdas de la fila
    celdas.forEach((celda) => {
      textoFila += celda.textContent.toLocaleLowerCase() + " ";
    });

    // Verifica si el texto de la fila incluye el texto de búsqueda
    return textoFila.includes(valorBusqueda);

  });

  // Muestra solo las filas que coinciden con la búsqueda y oculta las demás
  filas.forEach((fila) => {
    fila.style.display = filasFiltradas.includes(fila) ? "" : "none";
  });
}

// Obtiene el elemento del DOM para el botón de retroceso
const btnAtras = document.getElementById("btnAtras");

// Asocia un manejador de eventos al botón de retroceso
btnAtras.addEventListener("click", function () {
  // Redirige al usuario a la página de solicitudes
  window.location.href = "http://localhost:1234/solicitudes.html";
});
