let texto=prompt("Escribe una frase");
document.write(`<p> ${texto} </p>`);
texto2= texto.toLowerCase();
let vocales= "aeiouáéíóúäëïöüâêîôû";
let contador= 0;
for (let i = 0; i < texto2.length; i++) {
    if (vocales.includes(texto2[i])) {
        contador++;
    }
}
document.write("<p> El texto tiene " + contador + " vocales </p>");