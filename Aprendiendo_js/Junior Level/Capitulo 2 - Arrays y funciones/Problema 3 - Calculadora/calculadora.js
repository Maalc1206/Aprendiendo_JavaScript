const suma = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2)    
}
const resta = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2)
}
const multiplicacion = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2)
}
const division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2)
}

alert("¿Qué operación realizarás?");
operacion = prompt("1: suma, 2: resta, 3: multiplicación, 4: división");

if (operacion == 1){
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = suma(numero1,numero2);
    alert(`El resultado de la operación es ${resultado}`)
}

else if (operacion == 2){
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = resta(numero1,numero2);
    alert(`El resultado de la operación es ${resultado}`)
}

else if (operacion == 3){
    let numero1 = prompt("Primer número para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = multiplicacion(numero1,numero2);
    alert(`El resultado de la operación es ${resultado}`)
}

else if (operacion == 4){
    let numero1 = prompt("Primer número para dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = division(numero1,numero2);
    alert(`El resultado de la operación es ${resultado}`)
}

else {
    alert("No se ha podido realizar la operación, intenta nuevamente")
}