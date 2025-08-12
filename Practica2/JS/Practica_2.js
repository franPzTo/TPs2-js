let nota = +prompt("Introduce una nota del 0 al 10:");
let mensaje;


switch (true) {
    case (nota >= 11):
        mensaje = "Nota errónea";
        break;
    case (nota == 10):
        mensaje = "Sobresaliente";
        break;
    case (nota >= 8):
        mensaje = "Notable";
        break;
    case (nota >= 7):
        mensaje = "Bien";
        break;
    case (nota >= 5):
        mensaje = "Suficiente";
        break;
    case (nota >= 3):
        mensaje = "Insuficiente";
        break;
    case (nota >= 0):
        mensaje = "Muy deficiente";
        break;
    default:
        mensaje = "Introduce solo la nota del 0 al 10:";
        break;
}

alert(mensaje);