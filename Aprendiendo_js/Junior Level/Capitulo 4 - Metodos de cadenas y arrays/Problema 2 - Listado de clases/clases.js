const obtenerInformacion = (materia)=>{
    materias = {
        Matematicas: ["Johan"," Diego"," Manuel"," Hector"," Daniel"],
        Biologia: ["Janeth"," Felipe"," Manuel"," Hector"," Daniel"],
        Sociales: ["Dilsa"," Diego"," Felipe"," Manuel"," Daniel"],
        Ingles: ["Johana"," Felipe"," Manuel"," Hector"," Daniel"],
        Fisica: ["Fabio"," Diego"," Felipe"," Manuel"," Hector"],
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }
    else {
        return materias;
    }
}


const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
if (informacion !== false){
    let profesor = obtenerInformacion(materia)[0][0];
    let alumnos = obtenerInformacion(materia)[0];
        alumnos.shift();
    document.write(`<b style="font-family:Sans-serif,Tahoma,Arial">El profesor de la asignatura <b style="color:#fa2">${informacion[1]}</b> es: <b style="color:red">${profesor}</b>.<br>
    Los alumnos inscritos en la asignatura de <b style="color:#fa2">${informacion[1]}</b> son: <b style="color:#48e">${alumnos}</b>.</b><br><br>
    `);
}
}

const cantidadClases = function (alumno) {
    let informacion = obtenerInformacion();
    let clasesDisponibles = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno))
            cantidadTotal++;
        clasesDisponibles.push(" " + info);
    }
    return `<b style="font-family:Sans-serif,Tahoma,Arial"><b style="color:#48e">${alumno}</b> está en <b style="color:#291">${cantidadTotal}</b> clases.<br>
    Las clases son: <b style="color:#fa2">${clasesDisponibles}</b><br><br>
    </b>`;
}



 mostrarInformacion("Matematicas");
 mostrarInformacion("Biologia");
 mostrarInformacion("Sociales");
 mostrarInformacion("Ingles");
 mostrarInformacion("Fisica");

 
 document.write(cantidadClases(" Daniel"))
 document.write(cantidadClases(" Diego"))
 document.write(cantidadClases(" Manuel"))
 document.write(cantidadClases(" Felipe"))
 document.write(cantidadClases(" Hector"))