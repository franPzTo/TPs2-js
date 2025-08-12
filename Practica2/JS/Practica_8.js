let n = prompt("Escribe un número entre 0 y 50");
if (n < 0 || n > 50) {
  document.write("Número fuera de rango. Debe ser entre 0 y 50.");
} else {
  for (let i = 1; i <= n; i++) {
    let r = "";
    for (let j = 1; j <= i; j++) {
        r += j;
    }
    document.write("<p>" + r + "</p>");
  }
}
