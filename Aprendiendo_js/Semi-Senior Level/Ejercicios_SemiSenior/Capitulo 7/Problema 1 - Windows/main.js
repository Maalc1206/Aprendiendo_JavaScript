let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`el alto es: ${alto} y el ancho es: ${ancho}`);

if (comprar){
    alert(`Compra realizada exitosamente`)
}
else{
    alert(`Compra cancelada`)
}




let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b></b><br>`;
html += `URL: <b>${href}</b></b><br>`;
html += `Pathname: <b>${pathname}</b></b><br>`;
html += `Hostname: <b>${hostname}</b></b><br>`;

document.write(html)