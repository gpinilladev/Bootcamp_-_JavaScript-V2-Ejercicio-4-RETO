// Variables
let btnIngresar = document.getElementById("btnIngresar");
console.log('btnIngresar: ', btnIngresar);
let btnLimpiarDatos = document.getElementById("btnLimpiarDatos");
console.log('btnLimpiarDatos: ', btnLimpiarDatos);
let hNombre = document.getElementById("hNombre");
console.log('hNombre: ', hNombre);
let hEdad = document.getElementById("hEdad");
console.log('hEdad: ', hEdad);
let hDocumento = document.getElementById("hDocumento");
console.log('hDocumento: ', hDocumento);
let hTelefono = document.getElementById("hTelefono");
console.log('hTelefono: ', hTelefono);

// Funciones
const ingresarDatos = () => {
    // alert("Funciona");
    let nombre = prompt("Ingrese el nombre: ");
    console.log('nombre: ', nombre);
    if (nombre === '' || nombre === null || nombre === 'undefined') {
        alert("Error!\nEl nombre debe ser valido y no debe ser vacio!");
        ingresarDatos();
    } else {
        hNombre.innerHTML = "Nombre: " + nombre;
        console.log('hNombre: ', hNombre);

        let edad = prompt("Ingrese el edad: ");
        console.log('edad: ', edad);
        if (edad === '' || edad === null || edad === 'undefined') {
            alert("Error!\nLa edad debe ser valida y no debe ser vacia!");
            ingresarDatos();
        } else {
            hEdad.innerHTML = "Edad: " + edad;
            console.log('hEdad: ', hEdad);

            let documento = prompt("Ingrese el documento: ");
            console.log('documento: ', documento);
            if (documento === '' || documento === null || documento === 'undefined') {
                alert("Error!\nEl documento debe ser valido y no debe ser vacio!");
                ingresarDatos();
            } else {
                hDocumento.innerHTML = "Documento: " + documento;
                console.log('hDocumento: ', hDocumento);

                let telefono = prompt("Ingrese el telefono: ");
                console.log('telefono: ', telefono);
                if (telefono === '' || telefono === null || telefono === 'undefined') {
                    alert("Error!\nEl telefono debe ser valido y no debe ser vacio!");
                    ingresarDatos();
                } else {
                    hTelefono.innerHTML = "Telefono: " + telefono;
                    console.log('hTelefono: ', hTelefono);
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

