
let precio = prompt("Ingrese cantidad");
let calculo = 0;

if(precio >= 1 && precio <= 19){
    alert("Precio del articulo " + precio + "No genera Impuesto");
}
else if (precio > 20 && precio <= 49){
    calculo = precio * 0.30;
    alert("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 30%");
}
else if(precio > 40 && precio <= 500){
    calculo = precio * 0.40;
    alert("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 40%");
}
else {
    calculo = precio * 0.50;
    alert("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 50%");
}