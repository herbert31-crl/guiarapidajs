// Mensaje de bienvenida
function saludar(){
    alert("Bienvenido a la Guía Rápida de JavaScript 🚀");
}

// Ejemplo interactivo
function verificarEdad(){
    let edad = prompt("Ingresa tu edad:");

    if(edad >= 18){
        alert("Eres mayor de edad");
    }else{
        alert("Eres menor de edad");
    }
}

// Mostrar fecha actual
function mostrarFecha(){
    let fecha = new Date();
    document.getElementById("fecha").innerHTML =
        "Fecha actual: " + fecha.toLocaleDateString();
}