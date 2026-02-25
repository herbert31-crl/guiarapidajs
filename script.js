// pa dar vienvenida
function saludar(){
    alert("Bienvenido a la Guía Rápida de JavaScript 🚀");
}

// un ejemplo
function verificarEdad(){
    let edad = prompt("Ingresa tu edad:");

    if(edad >= 18){
        alert("Eres mayor de edad");
    }else{
        alert("Eres menor de edad");
    }
}

// la fecha
function mostrarFecha(){
    let fecha = new Date();
    document.getElementById("fecha").innerHTML =
        "Fecha actual: " + fecha.toLocaleDateString();

}
