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

    let codePc = document.createElement("p");
    codePc.innerHTML = element.codePc;
    contenedor.appendChild(codePc);

    let solicitud = document.createElement("p");
    solicitud.innerHTML = element.solicitud;
    contenedor.appendChild(solicitud);

    let btnAceptar = document.createElement("button");
    btnAceptar.innerHTML = "Aceptar";
    btnAceptar.dataset.id = element.id;
    contenedor.appendChild(btnAceptar);

    let btnRechazar = document.createElement("button");
    btnRechazar.innerHTML = "Rechazar";
    contenedor.appendChild(btnRechazar);

    btnAceptar.addEventListener("click", async function () {
      await putDatos(
        element.nombre,
        element.sede,
        element.fechaSalida,
        element.fechaEntrada,
        element.codePc,
        element.solicitud="Aceptada",
        element.id
      );
      solicitud.innerHTML = "Aceptada";
    });

    btnRechazar.addEventListener("click", async function () {
      await putDatos(
        element.nombre,
        element.sede,
        element.fechaSalida,
        element.fechaEntrada,
        element.codePc,
        element.solicitud="Rechazada",
        element.id
      );
      solicitud.innerHTML = "Rechazada";
    });
  });
}

// btnAceptar.addEventListener("click", async function () {
//   await putDatos(element.id, { solicitud: "Aceptada" });
//   solicitud.innerHTML = "Aceptada";
// });
