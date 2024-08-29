import { getDatos, deleteDatos } from "../services/datos";

function agregarDatosATabla(datos) {
  const cuerpoTabla = document.getElementById("requestsBody");
  cuerpoTabla.innerHTML = "";

  datos.forEach((item) => {
    const fila = document.createElement("tr");
<<<<<<< HEAD
    
=======
>>>>>>> ef50b244f187440996ab397606eca35507f94834

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

<<<<<<< HEAD
    const btnEliminar = document.createElement("button")
    btnEliminar.innerHTML= "Eliminar"
    btnEliminar.className= "bottonE"
=======
    const btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
>>>>>>> ef50b244f187440996ab397606eca35507f94834
    fila.appendChild(btnEliminar);

    cuerpoTabla.appendChild(fila);

    btnEliminar.addEventListener("click", () => {
      deleteDatos(item.id)
        .then(() => {
          fila.remove();
        })
<<<<<<< HEAD
        .catch((error)=> {
            console.error("Error al eliminar", error)
        });
    });

    


});
};
=======
        .catch((error) => {
          console.error("Error al eliminar", error);
        });
    });
  });
}
>>>>>>> ef50b244f187440996ab397606eca35507f94834



document.addEventListener("DOMContentLoaded", async () => {
  try {
    const datos = await getDatos();
    console.log(datos);

    if (datos) {
      agregarDatosATabla(datos);
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
});

const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click", filtrar);

function filtrar() {
  const valorBusqueda = buscador.value.toLowerCase();

  const filas = Array.from(document.querySelectorAll("#requestsBody tr"));

  console.log("Filas:", filas);

  const filasFiltradas = filas.filter((fila) => {
    const celdas = fila.querySelectorAll("td");
    let textoFila = "";

    celdas.forEach((celda) => {
      textoFila += celda.textContent.toLocaleLowerCase() + " ";
    });
    //Esto verifica que lo que esta en la fila sea verdadero o falso dependiendo la busqueda.
    return textoFila.includes(valorBusqueda);
  });

  filas.forEach((fila) => {
    fila.style.display = filasFiltradas.includes(fila) ? "" : "none";
  });
}

const btnAtras = document.getElementById("btnAtras");

btnAtras.addEventListener("click", function () {
<<<<<<< HEAD
    window.location.href = "http://localhost:1234/solicitudes.html"
});




=======
  window.location.href = "";
});
>>>>>>> ef50b244f187440996ab397606eca35507f94834
