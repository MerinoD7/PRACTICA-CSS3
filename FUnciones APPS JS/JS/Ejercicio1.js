//1.	Leer un número entero y determinar si tiene 3 dígitos.
//Algoritmo Determinar_si_entero

let entero = prompt("Digite un numero");
let numero = entero.toString();

if(numero.length == 3){
    alert("El entero tiene 3 digitos") + document.write("<h1>El entero tiene 3 digitos</h1>");
}else{
   alert("El entero no tiene 3 digitos, tiene " + numero.length)
}


