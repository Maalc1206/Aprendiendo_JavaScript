let free = false;

const validarEntrada = (time)=>{
    let edad = prompt("¿Cuál es tu edad?")
    if (edad >= 18){
        if (time >= 2 && time < 3 && !free){
            alert("Por ser el primer cliente después de las 2AM, ¡entras gratis!")
            free = true
        }
        else {
            alert(`Son las ${time}:00 Hrs. Puedes ingrsar, pero tienes que pagar tu entrada`)
        }
    }
    else {
        alert("No puedes ingresar, eres menor de edad")
    }
}

validarEntrada(0);
validarEntrada(2);
validarEntrada(3);
validarEntrada(6);
validarEntrada(9);
validarEntrada(11);
validarEntrada(12);
validarEntrada(16);
validarEntrada(20);
validarEntrada(22);