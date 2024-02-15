class Celular {
    constructor(color,peso,rdp,rdc,ram,memoriaint){
        this.color = color;
        this.peso = peso;
        this.tamano = rdp;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;
        this.almacenamientoInterno = memoriaint;
        this.activado = false;
    }
    botonEncendido(){
        if (this.activado == false){
            alert("Teléfono encendido correctamente");
            this.activado = true;
        }
        else {
            alert("El telefono está apagado");
            this.activado = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alerit("Reinicio del teléfono exitoso");
        }
        else {
            alert("El telefono está apagado")
        }
    }
    capturarFoto(){
        alert(`Imagen capturada en una resolución de: ${this.resolucionDeCamara}`)
    }
    capturarVideo(){
        alert(`Video grabado en una resolución de: ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: <b style="color:#f10">${this.color}</b><br>
        Peso: <b style="color:#2f7">${this.peso}</b><br>
        Tamano: <b style="color:#01f">${this.tamano}</b><br>
        Resolución de cámara: <b style="color:#48e">${this.resolucionCamara}</b><br>
        Memoria RAM: <b style="color:#2d1">${this.memoriaRam}</b><br>
        Almacenamiento interno: <b style="color:#f82">${this.almacenamientoInterno}</b><br>

        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,rdp,rdc,ram,memoriaint,rdce){
        super(color,peso,rdp,rdc,ram,memoriaint);
        this.resolucionDeCamaraExtra = rdce;
    }
    capturaVideoLento(){
        alert("Estás grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de cámara extra: <b style="color:#e84">${this.resolucionDeCamaraExtra}</b>`;
    }
}

celular1 = new Celular("Rojo","150g","5'","HD","4GB","64GB");
celular2 = new Celular("Negro","120g","5.5'","full HD","6GB","128GB");
celular3 = new Celular("Gris","140g","5.7'","4K","8GB","128GB");

celularA1 = new CelularAltaGama("Verde","160g","6'","HD","8GB","128GB","4K");
celularA2 = new CelularAltaGama("Azul","155g","6.5'","Full HD","121GB","256GB","8K");

document.write(`
    ${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>
    <b style="font-size:24px;font-family:Sans-serif">CELULARES DE ALTA GAMA</b><br><br>
    ${celularA1.infoAltaGama()} <br><br>
    ${celularA2.infoAltaGama()} <br>
`);


