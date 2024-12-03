"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Casino_1 = require("./Casino");
const Ruleta_1 = require("./Ruleta");
const Blackjack_1 = require("./Blackjack");
const casino = new Casino_1.Casino();
// Crear juegos
const ruleta = new Ruleta_1.Ruleta("Ruleta Clásica", 10);
const blackjack = new Blackjack_1.Blackjack("Blackjack Clásico", 15);
// Agregar juegos al casino
casino.agregarJuego(ruleta);
casino.agregarJuego(blackjack);
const nombreJuegoRuleta = "Ruleta Clásica";
const montoApuestaRuleta = 20;
const nombreJuegoBlackjack = "Blackjack Clásico";
const montoApuestaBlc = 50;
try {
    // Apostar Ruleta
    const juegoSeleccionado = casino.seleccionarJuego(nombreJuegoRuleta);
    const resultado = casino.apostar(juegoSeleccionado, montoApuestaRuleta);
    console.log(`Resultado de la apuesta: ${resultado.descripcion}`);
    console.log(`Ganancia obtenida: $${resultado.ganancia}`);
    // Apostar Blc
    console.log(`\nApostando en ${nombreJuegoBlackjack} con $${montoApuestaBlc}...\n`);
    const juegoSeleccionadoBlackjack = casino.seleccionarJuego(nombreJuegoBlackjack);
    const resultadoBlackjack = casino.apostar(juegoSeleccionadoBlackjack, montoApuestaBlc);
    console.log(`Resultado de Blackjack: ${resultadoBlackjack.descripcion}`);
    console.log(`Ganancia obtenida: $${resultadoBlackjack.ganancia}`);
}
catch (error) {
    console.error(`Error: ${error.message}`);
}
