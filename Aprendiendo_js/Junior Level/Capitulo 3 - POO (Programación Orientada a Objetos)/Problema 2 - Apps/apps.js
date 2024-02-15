class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.abierta = false;
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("La aplicación se instaló correctamente");
        }
        else {
            alert("La aplicación ya está instalada");
            this.instalada = false;
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("La aplicación se desinstaló correctamente");
        }
    }
    abrir(){
        if (this.abierta == false && this.instalada == true){
            this.abierta = true;
            alert("La aplicación está abierta");
        }
        else {
            alert("La aplicación no pudo abrirse, intentalo nuevamente");
            this.abierta = false;
        }
    }
    cerrar(){
        if (this.abierta == true){
            this.abierta = false;
            alert("La aplicación está cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b style="color:#3f1">${this.descargas}</b><br>
        Puntuación: <b style="color:#48e">${this.puntuacion}</b><br>
        Peso: <b style="color:#fd2">${this.peso}</b><br>
        `
    }
}

app = new App("5.000","2 Estrellas","50Mb")
app2 = new App("10.000","2.5 Estrellas","90Mb")
app3 = new App("20.000","3 Estrellas","130Mb")
app4 = new App("25.000","3.5 Estrellas","170Mb")
app5 = new App("50.000","4 Estrellas","210Mb")
app6 = new App("100.000","4.5 Estrellas","250Mb")
app7 = new App("150.000","5 Estrellas","300Mb")

document.write(`
    ${app.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`);
