// GET
export async function getDatos() {
  try {
    const response = await fetch("http://localhost:3000/datos");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error in GET request:", error.message);
    throw error;
  }
}

// POST
 export async function postDatos(data) {
  try {
    const response = await fetch("http://localhost:3000/datos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in POST request:", error.message);
    throw error;
  }
}

// PUT
export async function putDatos(nombre,sede,fechaSalida,fechaEntrada,codePc,solicitud,id) {
  let data={
    id,
    nombre,
    sede,
    fechaSalida,
    fechaEntrada,
    codePc,
    solicitud
  }
  try {
    const response = await fetch(`http://localhost:3000/datos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error in PUT request:", error.message);
    throw error;
  }
}


// DELETE
export async function deleteDatos(id) {
  try {
    const response = await fetch(`http://localhost:3000/datos/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(`Task ${id} deleted`);
      return true;
    } else {
      console.error("Error deleting task:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}
