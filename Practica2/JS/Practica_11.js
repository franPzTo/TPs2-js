let persona1 = [
    prompt("Introduce el nombre de la persona 1:"), 
    parseInt(prompt("Introduce la edad de la persona 1:"))
];
let persona2 = [
    prompt("Introduce el nombre de la persona 2:"), 
    parseInt(prompt("Introduce la edad de la persona 2:"))
];
let persona3 = [
    prompt("Introduce el nombre de la persona 3:"), 
    parseInt(prompt("Introduce la edad de la persona 3:"))
];

let mayorPorEdad = Math.max(persona1[1], persona2[1], persona3[1]);
let nombreDelMayor = "";
if (mayorPorEdad === persona1[1]) {
    nombreDelMayor = persona1[0];
} else if (mayorPorEdad === persona2[1]) {
    nombreDelMayor = persona2[0];
} else {
    nombreDelMayor = persona3[0];
}
document.write("<p> La persona mayor es " + nombreDelMayor + " con " + mayorPorEdad + " años.</p>");
