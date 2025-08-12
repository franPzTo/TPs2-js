let texto = prompt("Escribe un texto");
let texto2 = texto.split(``).join(`-`);
document.write("<p>" + texto2 + "</p>");