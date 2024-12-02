"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Casino_1 = require("./Casino");
const Ruleta_1 = require("./Ruleta");
const casino = new Casino_1.Casino();
const ruleta = new Ruleta_1.Ruleta("Ruleta Clásica", 10);
casino.agregarJuego(ruleta);
const nombreJuego = "Ruleta Clásica";
const montoApuesta = 20;
try {
    const juegoSeleccionado = casino.seleccionarJuego(nombreJuego);
    const resultado = casino.apostar(juegoSeleccionado, montoApuesta);
    console.log(`Resultado de la apuesta: ${resultado.descripcion}`);
    console.log(`Ganancia obtenida: $${resultado.ganancia}`);
}
catch (error) {
    console.error(`Error: ${error.message}`);
}
