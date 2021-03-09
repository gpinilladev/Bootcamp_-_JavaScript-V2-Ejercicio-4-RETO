// Variables
let btnIngresar = document.getElementById("btnIngresar");
let btnLimpiarDatos = document.getElementById("btnLimpiarDatos");
let hNombre = document.getElementById("hNombre");
let hEdad = document.getElementById("hEdad");
let hDocumento = document.getElementById("hDocumento");
let hTelefono = document.getElementById("hTelefono");

// Funciones
const ingresarDatos = () => {
    // alert("Funciona");
    let nombre = prompt("Ingrese el nombre: ");
    if (nombre === '' || nombre === null || nombre === 'undefined') {
        alert("Error!\nEl nombre debe ser valido y no debe ser vacio!");
        ingresarDatos();
    } else {
        hNombre.innerHTML = "Nombre: " + nombre;

        let edad = prompt("Ingrese el edad: ");
        if (edad === '' || edad === null || edad === 'undefined') {
            alert("Error!\nLa edad debe ser valida y no debe ser vacia!");
            ingresarDatos();
        } else {
            hEdad.innerHTML = "Edad: " + edad;

            let documento = prompt("Ingrese el documento: ");
            if (documento === '' || documento === null || documento === 'undefined') {
                alert("Error!\nEl documento debe ser valido y no debe ser vacio!");
                ingresarDatos();
            } else {
                hDocumento.innerHTML = "Documento: " + documento;

                let telefono = prompt("Ingrese el telefono: ");
                if (telefono === '' || telefono === null || telefono === 'undefined') {
                    alert("Error!\nEl telefono debe ser valido y no debe ser vacio!");
                    ingresarDatos();
                } else {
                    hTelefono.innerHTML = "Telefono: " + telefono;
                }

            }

        }

    }
};

const limpiarDatos = () => {
    hNombre.innerHTML = "Nombre: ";
    hEdad.innerHTML = "Edad: ";
    hDocumento.innerHTML = "Documento: ";
    hTelefono.innerHTML = "Telefono: ";
};

// Onclicks
btnIngresar.onclick = () => {
    ingresarDatos();
};
btnLimpiarDatos.onclick = () => {
    limpiarDatos();
};

