let texto = prompt("Escribe un texto");
let vocales = "aeiouáéíóúäëïöüâêîôûAEIOUÁÉÍÓÚÄËÏÖÜ";
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        posicion = i;
        break;
    }
}
document.write("<p>Texto ingresado: " + texto + "</p>");
if (posicion !== -1) {
    document.write("<p> La primera vocal se encuentra en la posición: " + posicion + "</p>");
} else {
    document.write("No se encontraron vocales.");
}