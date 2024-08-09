alumnos = [{
  nombre: "Manuel Poveda",
  email: "maalc1206@gmail.com",
  materia: "Fisica"
},{
  nombre: "Camilo Moreno",
  email: "milo@gmail.com",
  materia: "Matematicas"
},{
  nombre: "Juan Orozco",
  email: "juanito@gmail.com",
  materia: "Aritmética"
},{
  nombre: "Carolina Estupiñan",
  email: "carito@gmail.com",
  materia: "Cálculo"
},{
  nombre: "Alejandro Cordoba",
  email: "maalcgamer@gmail.com",
  materia: "Química"
}];

const boton = document.querySelector(".confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos){
  let datos = alumnos[alumno];
  let nombre = datos["nombre"];
  let email = datos["email"];
  let materia = datos["materia"];
  let htmlCode = `
  <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
      <select class="semana-elegida">
        <option value="Semana 1">Semana 1</option>
        <option value="Semana 2">Semana 2</option>
      </select>
  </div>`;
  contenedor.innerHTML += htmlCode;
};

boton.addEventListener("click",()=>{
  let confirmar = confirm("¿Quieres confirmar las mesas?");
  if (confirmar) {
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana-elegida");
    for(elemento in elementos){
      semana = elementos[elemento];
      semana.innerHTML = semanaElegida[elemento].value;
    };
  }
});