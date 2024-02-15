class Calculadora{
    constructor(){
    }
suma(num1,num2){
    return parseInt(num1) + parseInt(num2)    
}
resta(num1,num2){
    return parseInt(num1) - parseInt(num2)
}
multiplicacion(num1,num2){
    return parseInt(num1) * parseInt(num2)
}
division(num1,num2){
    return parseInt(num1) / parseInt(num2)
}
potenciacion(num,exp){
    return num**exp
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("¿Qué operación realizarás?");
operacion = prompt("1-Suma, 2-Resta, 3-Multiplicación, 4-División, 5-Potenciación, 6-Raiz Cuadrada, 7-Raiz Cubica");

if (operacion == 1){
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = calculadora.suma(numero1,numero2);
    document.write(`El resultado de <b style="color:#48e">${numero1}</b> <b>+</b> <b style="color:#48e">${numero2}</b> es igual a: <b style="color:#f71">${resultado}</b>`)
}

else if (operacion == 2){
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = calculadora.resta(numero1,numero2);
    document.write(`El resultado de <b style="color:#48e">${numero1}</b> <b>-</b> <b style="color:#48e">${numero2}</b> es igual a: <b style="color:#f71">${resultado}</b>`)
}

else if (operacion == 3){
    let numero1 = prompt("Primer número para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado =calculadora. multiplicacion(numero1,numero2);
    document.write(`El resultado de <b style="color:#48e">${numero1}</b> <b>*</b> <b style="color:#48e">${numero2}</b> es igual a: <b style="color:#f71">${resultado}</b>`)
}

else if (operacion == 4){
    let numero1 = prompt("Primer número para dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = calculadora.division(numero1,numero2);
    document.write(`El resultado de <b style="color:#48e">${numero1}</b> <b>/</b> <b style="color:#48e">${numero2}</b> es igual a: <b style="color:#f71">${resultado}</b>`)
}
else if (operacion == 5){
    let numero1 = prompt("Primer número para potenciar");
    let exp = prompt("Número potenciador");
    resultado = calculadora.potenciacion(numero1,exp);
    document.write(`El resultado de <b style="color:#48e">${numero1}</b> con potencia de <b style="color:#193">${exp}</b> es igual a: <b style="color:#f71">${resultado}</b>`)
}
else if (operacion == 6){
    let numero1 = prompt("Raíz cuadrada de: ");
    resultado = calculadora.raizCuadrada(numero1);
    document.write(`La raíz cuadrada de <b style="color:#48e">${numero1}</b> es igual a: <b style="color:#f71">${resultado}</b>`)
}
else if (operacion == 7){
    let numero1 = prompt("Raíz cúbica de: ");
    resultado = calculadora.raizCubica(numero1);
    document.write(`La raíz cúbica de <b style="color:#48e">${numero1}</b> es igual a: <b style="color:#f71">${resultado}</b>`)
}

else {
    alert(`No se ha podido encontrar la operación, intenta nuevamente.
Presiona F5 para recargar la calculadora.`)
}