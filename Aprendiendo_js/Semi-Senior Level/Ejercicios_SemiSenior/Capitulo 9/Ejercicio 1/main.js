const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const materia = document.getElementById("materia").value;
const boton = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
  e.preventDefault();
  let error = validarCampos();
  resultado.classList.add("red");
  if (error[0]) {
    resultado.innerHTML = error[1];
  } else {
    resultado.innerHTML = "Solicitud enviada correctamente."
    resultado.classList.add("green");
    resultado.classList.remove("red")
  }
});

const validarCampos = ()=>{
  nombre.value;
  email.value;
  materia.value;

  let error = [];
  if (nombre.length < 5 || nombre.length > 40) {
    error[0] = true;
    error[1] = "El nombre es incorrecto.";
    return error;
  } else if (email.length < 5 ||
             email.length > 40 ||
             email.indexOf("@") == -1 ||
             email.indexOf(".") == -1 ){
    error[0] = true;
    error[1] = "El email es incorrecto."
    return error;
  } else if (materia.length < 4 || materia.length > 20){
    error[0] = true;
    error[1] = "La materia no existe."
  }

  error[0] = false;
  return error;
};