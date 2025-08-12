let texto = prompt("Escribe una frase");
let textoAlreves = texto.split("").reverse().join("");
document.write("<p>" + textoAlreves + "</p>");
document.write("<p>" + texto + "</p>");