// alert("Estos son los resultados de el primer semestre de clases")

const materias = { 
    Matematicas: [100,10,4,"Matematicas"],
    Ingles: [70,7,3,"Ingles"],
    Quimica: [80,5,3,"Quimica"],
    Informatica: [80,7,2,"Informatica"],
    Biologia: [70,6,3,"Biologia"],
    Sociales: [80,5,2,"Sociales"],
    Tecnologia: [50,7,2,"Tecnologia"],
    Fisica: [70,5,2,"Fisica"],
} 

const aprobar = ()=>{
    for (materia in materias){

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >= 80){
            console.log("%c  Asitencias aprobadas","color:green");
        }
        else {
            console.log("%c  Asistencias insuficientes","color:red")
        }
        if (promedio >= 7){
            console.log("%c  Promedio suficiente","color:green");
        }
        else {
            console.log("%c  Promedio Insuficiente","color:red")
        }
        if (trabajos >= 3){
            console.log("%c  Trabajos aprobados","color:green");
        }
        else {
            console.log("%c  Faltan trabajos por entregar","color:red")
        }
    }
}

aprobar()