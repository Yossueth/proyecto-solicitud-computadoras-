

import { getDatos } from "../services/datos";



function agregarDatosATabla(datos) {

    console.log("hola", datos);
    
    const cuerpoTabla = document.getElementById("requestsBody")
    cuerpoTabla.innerHTML="";

datos.forEach(item => {
    console.log("item",item);
    
    const fila = document.createElement("tr");

    const celdaFechaSalida = document.createElement("td");
    celdaFechaSalida.textContent= item.celdaFechaSalida;
    fila.appendChild(celdaFechaSalida);

    const celdaFechaEntrada = document.createElement("td");
    celdaFechaEntrada.textContent = item.celdaFechaEntrada;
    fila.appendChild(celdaFechaEntrada);

    const celdaIdComputadora = document.createElement("td");
    celdaIdComputadora.textContent = item.celdaIdComputadora;
    fila.appendChild(celdaIdComputadora)

    const celdaAprobacion = document.createElement("td")
    celdaAprobacion.textContent = item.celdaAprobacion;
    fila.appendChild(celdaAprobacion);
    
    const celdaNombre = document.createElement("td")
    celdaNombre.textContent = item.celdaNombre;
    fila.appendChild(celdaNombre);


    cuerpoTabla.appendChild(fila);
    
});
};

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const datos = await getDatos();
        console.log(datos);
        
        if (datos) {
            agregarDatosATabla(datos);
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
});




const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar")

 
btnBuscar.addEventListener("click", filtrar);

function filtrar() {
   const valorBusqueda = buscador.value.toLowerCase();
   
   const filas = Array.from(document.querySelectorAll("#requestsBody tr"));

   console.log('Filas:', filas);

   const filasFiltradas = filas.filter(fila => {
    const celdas = fila.querySelectorAll("td");
    let textoFila = "";

    celdas.forEach(celda => {
        textoFila += celda.textContent.toLocaleLowerCase() + " ";

        
    });
//Esto verifica que lo que esta en la fila sea verdadero o falso dependiendo la busqueda.
    return textoFila.includes(valorBusqueda);
    
   });
   
   filas.forEach(fila => {
   fila.style.display = filasFiltradas.includes(fila) ? "" : "none";

    
});
}



/////////









