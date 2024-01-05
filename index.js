

function main() {
    //let animales = ["leon", "ciervo", "liebre", "aguila", false, "osoPanda"];
    let miedos = ["dementor", "payasos", "McGonagall", "Snape"];
    let miedosTransformados = ["globo", "gato", "pajaro", "snape Con Bestido"]


    let btnNombre;
    let btnFamilia;
    let btnEdad;
    let btnlinaje;
    let btnCualidades
    let btnpatronus

        btnNombre= document.getElementById("nombre").value;
        btnFamilia = document.getElementById("familia").value;
        btnEdad = document.getElementById("edad").value;
        btnlinaje = document.getElementById("linaje").value;
        btnCualidades = document.getElementById("valores").value;
        btnpatronus = document.getElementById("txAnimalPatronus").value;

        switch (btnCualidades) {
            case "0":
                btnCualidades = ["valor", "fuerza", "audacia"];
                break;
            case "1":
                btnCualidades = ["justicia", "lealtad", "paciencia"];
                break;
        
            case "2":
                btnCualidades = ["creatividad", "erudicion", "inteligencia"];
                break;
            case "3":
                btnCualidades =["ambicion", "determinacion", "astucia"];
                break;
            default:
                break;
        }
        
        
        switch (btnlinaje) {
            case "0":
                btnlinaje= "mestizo";
                break;
            case "1":
                btnlinaje= "muggle";
                break
            case "2":
                btnlinaje= "Sangre pura";
                break;
            default:
                break;
        }

        
        let estudiante = {
            nombre: btnNombre,
            familia: btnFamilia,
            edad: btnEdad,
            linaje: btnlinaje,
            casa: "",
            animalPatronus: btnpatronus,
            cualidades: btnCualidades
        }
        console.log(estudiante); 
        
    
    // PASO 2



    let casas = {
        Gryffindor: {
            valores: ["valor", "fuerza", "audacia"],
            linaje: ["mestizo", "muggle", "Sangre pura"]
        },
        Hufflepuff: {
            valores: ["justicia", "lealtad", "paciencia"],
            linaje: ["mestizo", "muggle"]

        },
        Ravenclaw: {
            valores: ["creatividad", "erudicion", "inteligencia"],
            linaje: ["mestizo", "muggle", "Sangre pura"]
        },
        Slytherin: {
            valores: ["ambicion", "determinacion", "astucia"],
            linaje: "Sangre pura"
        }
    }


    // PASO 3
    let clases = {
        transformaciones: "profesor Kevin Slughorn",
        herbologia: "Profesor Maria Umbridge",
        pociones: "Profesor Liliana McGonagall",
        encantamientos: "Profesora Jackie",
        defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
        animalesMagicos: "Profesor David Filch",
        historiaDeMagia: "Profesor Ronald Sprout"
    }

    let mensaje = document.getElementById("casa");

    function escogerCasa() {

        if ((estudiante.cualidades.includes("valor", "fuerza", "audacia")) && (estudiante.linaje.includes("mestizo", "muggle", "Sangre pura"))) {
            estudiante.casa = "Gryffindor"
        }
        else if ((estudiante.cualidades.includes("justicia", "lealtad", "paciencia")) && (estudiante.linaje.includes("mestizo", "muggle"))) {
            estudiante.casa = "Hufflepuff"
        }
        else if ((estudiante.cualidades.includes("creatividad", "erudicion", "inteligencia")) && (estudiante.linaje.includes("mestizo", "muggle", "Sangre pura"))) {
            estudiante.casa = "Ravenclaw"

        }
        else if ((estudiante.cualidades.includes("ambicion", "determinacion", "astucia")) && (estudiante.linaje.includes("Sangre pura"))) {
            estudiante.casa = "Slytherin"
        } else {
            console.log("no has sido admitido");
        }
        console.log(estudiante);
        mensaje.innerHTML = `el estudiante ${estudiante.nombre} a sido admitido a la casa ${estudiante.casa}`;
    } 
    escogerCasa();


    let boggart=miedos[Math.floor(Math.random() * miedos.length)]
    //let boggart = btnpatronus
    let mensajeTranformaciones = document.getElementById("transformacion");


    let claseTransformaciones = {
        profesor: clases.transformaciones,
        horario: "8AM",
        rastreador: false,
        
        realizarTransformacionRiddikulus() {
            if (boggart == false) {
                console.log("No hay ningun miedo");
                
            } else {
                console.log("Encantamiento Riddikulus");
                claseTransformaciones.rastreador=true;
            }
        },

        
        enfrentarBoggart(boggart) {
            let boggartTransfomado = miedosTransformados[Math.floor(Math.random() * miedosTransformados.length)]
            if (boggart == false) {
                console.log("No hay ningun miedo");
            }else{
                mensajeTranformaciones.innerHTML=`has convertido a ${boggart} a un ${boggartTransfomado}`;
            }
            
        }
    }

    claseTransformaciones.realizarTransformacionRiddikulus(boggart)
    claseTransformaciones.enfrentarBoggart(boggart);




    // PASO 5
    //Elige un animal al azar
    //let patronus = animales[Math.floor(Math.random() * animales.length)];
    let patronus = btnpatronus;
    estudiante.animalPatronus = patronus;

    let mensajeOscuro = document.getElementById("artesOscuras")

    let defensaContraLasArtesOscuras ={

        generar(patronus,boggart) {
            if ((boggart == "dementor") || (patronus == false) || (boggart == false)) {
                 mensajeOscuro.innerHTML="No hay ningun animal, has sido absorbido - te han llevado ala enfermeria";
            
            }else{
                mensajeOscuro.innerHTML= `has detenido al dementor con un ${patronus}`;

            }
        }
    }
    defensaContraLasArtesOscuras.generar(patronus,boggart)


    ////// MOSTRAR DATOS
    
    function mostrosDatos() {
        document.getElementById("btnnombre").innerHTML = `el nombre del estudiante es ${btnNombre}`;
        document.getElementById("btnfamilia").innerHTML = `la familia ala que perteneces ${btnFamilia}`;
        document.getElementById("btnedad").innerHTML = `la edad es de ${btnEdad}`;
        document.getElementById("btnlinaje").innerHTML = `el linaje es de ${btnlinaje}`;
        document.getElementById("btnpatronus").innerHTML = `el animal patronus es ${patronus}`;
        document.getElementById("btnvalores").innerHTML = ` los valores escogidos son ${btnCualidades}`;
        console.log(estudiante);
    }
    mostrosDatos();
}