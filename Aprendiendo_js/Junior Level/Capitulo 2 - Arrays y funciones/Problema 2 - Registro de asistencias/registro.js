let cantidadAlumnos = prompt("'Cuántos alumnos hay?")
let alumnosTotales = []

for (i = 0; i < cantidadAlumnos; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const registroAsistencia = (nombre,p)=>{
    let presente = prompt(nombre);
    if (presente == "p" || presente == "P"){
        alumnosTotales[p][1]++;
    }
}


for (i = 0; i <30; i++){
    for (alumno in alumnosTotales){
        registroAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    - Asistencias: <b>${alumnosTotales[alumno][1]}</b> <br>
    - Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= ` -<b style="color:darkblue"> ${alumnosTotales[alumno][0]}</b>, te han<b style="color:red"> REPROBADO</b> por inasistir a clases.<br><br>`
    }
    else {
        resultado+= "<br><br>"
    }
    document.write(resultado)
}
