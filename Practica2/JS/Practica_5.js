let input = prompt("Ingresa un DNI (Para salir, pulsa \"cancelar\"):");
while(input !== null){
    const DNI = +input;
    if(!isNaN(DNI) && DNI >= 0 && DNI <= 99999999){
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letra = letras.charAt(DNI % 23);
        alert("La letra del DNI " + DNI + " es: " + letra);
    } else{
        alert("DNI inválido. Ingrese nuevamente un DNI")
    }
    input = prompt("Ingresa un nuevo DNI (Para salir, pulsa \"cancelar\"):");
}
document.write("Fin del programa")