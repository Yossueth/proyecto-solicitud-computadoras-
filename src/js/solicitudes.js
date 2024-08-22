import { getDatos, putDatos } from "../services/datos";

let informacion = document.querySelector(".informacion");

dataPc();
async function dataPc() {
  let datosPc = await getDatos();

  datosPc.forEach((element) => {
    let contenedor = document.createElement("div");
    informacion.appendChild(contenedor);

    let nombre = document.createElement("p");
    nombre.innerHTML = element.nombre;
    contenedor.appendChild(nombre);

    let sede = document.createElement("p");
    sede.innerHTML = element.sede;
    contenedor.appendChild(sede);

    let fechaSalida = document.createElement("p");
    fechaSalida.innerHTML = element.fechaSalida;
    contenedor.appendChild(fechaSalida);

    let fechaEntrega = document.createElement("p");
    fechaEntrega.innerHTML = element.fechaEntrada;
    contenedor.appendChild(fechaEntrega);

    let solicitud = document.createElement("p");
    solicitud.innerHTML = element.solicitud;
    contenedor.appendChild(solicitud);

    let btnAceptar = document.createElement("button");
    btnAceptar.innerHTML = "Aceptar";
    contenedor.appendChild(btnAceptar);

    let btnRechazar = document.createElement("button");
    btnRechazar.innerHTML = "Rechazar";
    contenedor.appendChild(btnRechazar);
  });
}
