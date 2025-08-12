let cadenas = "";
let texto;
while (true) {
    texto = prompt("Escribe un texto (pulsa \"cancelar\" para salir)");
    if (texto === null) {
        break;
    }
    if (cadenas === ""){
        cadenas = texto;
    } else {
        cadenas += "-" + texto;
    }
}
document.write(cadenas);