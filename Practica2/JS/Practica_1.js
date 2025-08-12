let edad = +prompt("¿Cuál es tu edad?");
let mensaje;

if (edad >= 18) {
    mensaje = "Ya puede conducir";
} else {
    mensaje = "No puede conducir aún";
}

alert(mensaje);