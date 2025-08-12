let x1 = parseInt(prompt("Introduce el numero de filas:"));
let x2 = parseInt(prompt("Introduce el numero de columnas:"));
let x3 = x1 * x2;
let tabla = document.createElement("table");
tabla.style.border = "3px solid red";
tabla.style.margin = "5px";

for (let fila = 0; fila < x1; fila++) {
    let tr = document.createElement("tr");
    for (let col = 0; col < x2; col++) {
        let td = document.createElement("td");
        td.textContent = x3--;
        tr.appendChild(td);
    }
    tabla.appendChild(tr);
}
document.body.appendChild(tabla);