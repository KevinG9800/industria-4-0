// Respuestas de CiberSeguridad
// Arreglo que contiene las respuestas correctas
let correctas_ciber = [1, 2, 0, 3, 1, 2, 3, 0, 3, 1];
let opcion_elegida_ciber = [];

function respuesta(num_pregunta, seleccionada) {
    opcion_elegida_ciber[num_pregunta] = parseInt(seleccionada.value);
}

function corregir_ciber() {
    let cantidad_correctas_ciber = 0;

    // Contar respuestas correctas y aplicar estilos
    for (let i = 0; i < correctas_ciber.length; i++) {
        let id = "p" + (i + 1);
        let elementoRespuesta = document.getElementById(id);

        if (correctas_ciber[i] === opcion_elegida_ciber[i]) {
            cantidad_correctas_ciber++;
            elementoRespuesta.classList.remove('incorrecta');
            elementoRespuesta.classList.add('correcta');
        } else {
            elementoRespuesta.classList.remove('correcta');
            elementoRespuesta.classList.add('incorrecta');
        }
    }

    // Mostrar cantidad de respuestas correctas
    document.getElementById("resultado_ciber").innerHTML = `Respuestas correctas: ${cantidad_correctas_ciber} / ${correctas_ciber.length}`;
}

// Respuestas de Electromovilidad
// Arreglo que contiene las respuestas correctas
let correctas_electro = [0, 1, 3, 2, 2, 0, 1, 0];
let opcion_elegida_electro = [];

function respuesta_electro(num_pregunta, seleccionada) {
    opcion_elegida_electro[num_pregunta] = parseInt(seleccionada.value);
}

function corregir_electro() {
    let cantidad_correctas_electro = 0;

    // Contar respuestas correctas y aplicar estilos
    for (let i = 0; i < correctas_electro.length; i++) {
        let id = "el" + (i + 1);
        let elementoRespuesta = document.getElementById(id);

        if (correctas_electro[i] === opcion_elegida_electro[i]) {
            cantidad_correctas_electro++;
            elementoRespuesta.classList.remove('incorrecta');
            elementoRespuesta.classList.add('correcta');
        } else {
            elementoRespuesta.classList.remove('correcta');
            elementoRespuesta.classList.add('incorrecta');
        }
    }

    // Mostrar cantidad de respuestas correctas
    document.getElementById("resultado_electro").innerHTML = `Respuestas correctas: ${cantidad_correctas_electro} / ${correctas_electro.length}`;
}

// Respuestas de InteligenciaArtificial
// Arreglo que contiene las respuestas correctas
let correctas_IA = [0, 1, 3, 2, 2, 0, 1, 0];
let opcion_elegida_IA = [];

function respuesta_IA(num_pregunta, seleccionada) {
    opcion_elegida_IA[num_pregunta] = parseInt(seleccionada.value);
}

function corregir_IA() {
    let cantidad_correctas_IA = 0;

    // Contar respuestas correctas y aplicar estilos
    for (let i = 0; i < correctas_IA.length; i++) {
        let id = "ia" + (i + 1);
        let elementoRespuesta = document.getElementById(id);

        if (correctas_IA[i] === opcion_elegida_IA[i]) {
            cantidad_correctas_IA++;
            elementoRespuesta.classList.remove('incorrecta');
            elementoRespuesta.classList.add('correcta');
        } else {
            elementoRespuesta.classList.remove('correcta');
            elementoRespuesta.classList.add('incorrecta');
        }
    }

    // Mostrar cantidad de respuestas correctas
    document.getElementById("resultado_IA").innerHTML = `Respuestas correctas: ${cantidad_correctas_IA} / ${correctas_IA.length}`;
}


