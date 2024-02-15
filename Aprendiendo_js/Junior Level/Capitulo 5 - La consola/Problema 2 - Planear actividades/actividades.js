let ducha = "15 minutos de baño";
let desayuno = "45 minutos para desayunar";
let clases = "270 minutos - 4 horas y media";
let sacarNalaTarde = "15 minutos";
let almuerzo = "60 minutos - 1 hora";
let homework = "90 minutos - 1 hora y media";
let programacionDalto = "165 minutos - 2 horas y 45 minutos";
let relax = "120 minutos - 2 horas";
let sacarNalaNoche = "15 minutos";
let relaxStreams = "45 minutos";
let cena = "30 minutos";
let relaxDormir = "90 minutos - 1 hora y media";
let dormir = "480 minutos - 8 horas";


console.log("TAREAS")
for (var i = 0; 1 < 14; i++){
    if (i == 0) {
        console.group("semana 1")
    }
} 
console.groupColapsed("dia " + (i+1));
console.log(ducha);
console.log(desayuno);
console.log(clases);
console.log(sacarNalaTarde);
console.log(almuerzo);
console.log(homework);
console.log(programacionDalto);
console.log(relax);
console.log(sacarNalaNoche);
console.log(relaxStreams);
console.log(cena);
console.log(relaxDormir);
console.log(dormir);
if (i == 5){
        console.groupEnd();
        console.group("semana 2")
    }

console.groupEnd();
console.groupEnd();
