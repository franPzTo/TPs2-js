let suma = 0;
let numero;
while (true) {
    numero = prompt("Escribe los numeros (pulsa \"Aceptar\" para otro numero y \"cancelar\" para suma y salir)");
    if (numero === null) {
        break;
    }
    if (isNaN(numero) || numero.trim() === "") {
        alert("Lo introducido \"NO\" es un número");
    } else {
        suma += Number(numero);
    }
    document.write(" + " + numero + " = " + suma);
}
document.write("<p>Proceso terminado</p>");