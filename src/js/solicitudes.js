import { getDatos, putDatos } from "../services/datos";



dataPc();
async function dataPc() {
  let datosPc = await getDatos();

  const cuerpoTabla = document.getElementById("requestsBody");
  cuerpoTabla.innerHTML="";

  let pendientes = datosPc.filter(
    (element) => element.solicitud === "pendiente"
  );

  pendientes.forEach((element) => {
  

    const fila = document.createElement("tr")

    let nombre = document.createElement("td");
    nombre.textContent = element.nombre;
    fila.appendChild(nombre);

    let sede = document.createElement("td");
    sede.textContent = element.sede;
    fila.appendChild(sede);

    let fechaSalida = document.createElement("td");
    fechaSalida.textContent = element.fechaSalida;
    fila.appendChild(fechaSalida);

    let fechaEntrega = document.createElement("td");
    fechaEntrega.textContent = element.fechaEntrada;
    fila.appendChild(fechaEntrega);

    let codePc = document.createElement("td");
    codePc.textContent = element.codePc;
    fila.appendChild(codePc);

    let solicitud = document.createElement("td");
    solicitud.textContent = element.solicitud;
    fila.appendChild(solicitud);

    let btnAceptar = document.createElement("button");
    btnAceptar.innerHTML = "Aceptar";
    btnAceptar.className= "aceptar"
    btnAceptar.dataset.id = element.id;
    fila.appendChild(btnAceptar);

    let btnRechazar = document.createElement("button");
    btnRechazar.innerHTML = "Rechazar";
    btnRechazar.className="rechazar"
    fila.appendChild(btnRechazar);

    cuerpoTabla.appendChild(fila)

    btnAceptar.addEventListener("click", async function () {
      fila.innerHTML = "";
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
      dataPc();
    });

    btnRechazar.addEventListener("click", async function () {
      fila.innerHTML = "";
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
      dataPc();
    });
  });
}


const btnHistorial = document.getElementById("btnHistorial");
btnHistorial.addEventListener("click", function () {
    window.location.href = "http://localhost:1234/admin.html"
});



// btnAceptar.addEventListener("click", async function () {
//   await putDatos(element.id, { solicitud: "Aceptada" });
//   solicitud.innerHTML = "Aceptada";
// });
