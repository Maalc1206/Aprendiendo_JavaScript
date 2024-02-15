let materias = {
        Matematicas: ["Johan","Diego","Manuel","Hector","Daniel","Juan","Santiago","Andres","Mateo","Julian","Antonio"],
        Biologia: ["Janeth","Felipe","Manuel","Hector","Daniel","Fabiola","Francisco"],
        Sociales: ["Dilsa","Diego","Felipe","Manuel","Daniel"],
        Ingles: ["Johana","Felipe","Manuel","Hector","Daniel"],
        Fisica: ["Fabio","Diego","Felipe","Manuel","Hector","Juan","Santiago","Andres","Mateo","Julian"]
    }

    const inscribir = (alumno,materia)=>{
        personas = materias[materia];
        if (personas.length >= 11){
            document.write(`<b>${alumno}</b>, lo lamentamos, no hay cupos disponibles en la asignatura de <b>${materia}</b><br>`)
        }
        else {
            personas.push(alumno);
            if (materia == "Matematicas"){
                materias = {
                    Matematicas: personas,
                    Biologia: materias['Biologia'],
                    Sociales: materias['Sociales'],
                    Ingles: materias['Ingles'],
                    Fisica: materias['Fisica'],
                }
            }
            else if (materia == "Biologia"){
                materias = {
                    Matematicas: materias['Matematicas'],
                    Biologia: personas,
                    Sociales: materias['Sociales'],
                    Ingles: materias['Ingles'],
                    Fisica: materias['Fisica'],
                }
            }
            else if (materia == "Sociales"){
                materias = {
                    Matematicas: materias['Matematicas'],
                    Biologia: materias['Biologia'],
                    Sociales: personas,
                    Ingles: materias['Ingles'],
                    Fisica: materias['Fisica'],
                }
            }
            else if (materia == "Ingles"){
                materias = {
                    Matematicas: materias['Matematicas'],
                    Biologia: materias['Biologia'],
                    Sociales: materias['Sociales'],
                    Ingles: personas,
                    Fisica: materias['Fisica'],
                }
            }
            else if (materia == "Fisica"){
                materias = {
                    Matematicas: materias['Matematicas'],
                    Biologia: materias['Biologia'],
                    Sociales: materias['Sociales'],
                    Ingles: materias['Ingles'],
                    Fisica: personas,
                }
            }
            document.write(`¡Felicidades <b>${alumno}</b>, te has inscrito a <b>${materia}</b> correctamente!<br>`)
        }
    }

document.write(materias["Matematicas"] + "<br>")
document.write(materias["Biologia"] + "<br>")
document.write(materias["Sociales"] + "<br>")
document.write(materias["Ingles"] + "<br>")
document.write(materias["Fisica"] + "<br><br>")

inscribir(prompt("Cual es tu nombre?"),prompt("Selecciona la clase que te quieras registrar"));
inscribir(prompt("Cual es tu nombre?"),prompt("Selecciona la clase que te quieras registrar"));
inscribir(prompt("Cual es tu nombre?"),prompt("Selecciona la clase que te quieras registrar"));
inscribir(prompt("Cual es tu nombre?"),prompt("Selecciona la clase que te quieras registrar"));
inscribir(prompt("Cual es tu nombre?"),prompt("Selecciona la clase que te quieras registrar"));
inscribir(prompt("Cual es tu nombre?"),prompt("Selecciona la clase que te quieras registrar"));
inscribir(prompt("Cual es tu nombre?"),prompt("Selecciona la clase que te quieras registrar"));

document.write("<br>" + materias["Matematicas"] + "<br>")
document.write(materias["Biologia"] + "<br>")
document.write(materias["Sociales"] + "<br>")
document.write(materias["Ingles"] + "<br>")
document.write(materias["Fisica"] + "<br>")