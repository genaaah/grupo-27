"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Casino_1 = require("./Casino");
const Ruleta_1 = require("./Ruleta");
const Blackjack_1 = require("./Blackjack");
const TragamonedasClasico_1 = require("./TragamonedasClasico");
const TragamonedasModerno_1 = require("./TragamonedasModerno");
const casino = new Casino_1.Casino();
// Crear juegos
const ruleta = new Ruleta_1.Ruleta("Ruleta Clásica", 10);
const blackjack = new Blackjack_1.Blackjack("Blackjack Clásico", 15);
const tragamonedasClasico = new TragamonedasClasico_1.TragamonedasClasico("Tragamonedas Clasico", 0, "Frutas");
const tragamonedasModerno = new TragamonedasModerno_1.TragamonedasModerno("Tragamonedas Moderno", 0, "Vehiculos");
// Agregar juegos al casino
casino.agregarJuego(ruleta);
casino.agregarJuego(blackjack);
casino.agregarJuego(tragamonedasClasico);
casino.agregarJuego(tragamonedasModerno);
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
//Apostar Tragamonedas Clasico:
const juegoTragamonedasClasico = "Tragamonedas Clasico";
const montoApuestaTragamonedasClasico = 10;
try {
    const juegoClasico = casino.seleccionarJuego(juegoTragamonedasClasico);
    const resultadoClasico = casino.apostar(juegoClasico, montoApuestaTragamonedasClasico);
    console.log(`Tragamonedas Clasico - Resultado: ${resultadoClasico.descripcion}`);
    console.log(`La ganancia es de : $$ ${resultadoClasico.descripcion}`);
}
catch (error) {
    console.log(`Error en Tragamonedas Clasico: ${error.message}`);
}
//Apostar Tragamonedas Moderno:
const juegoTragamonedasModerno = "Tragamonedas Clasico";
const montoApuestaTragamonedasModerno = 10;
try {
    const juegoModerno = casino.seleccionarJuego(juegoTragamonedasModerno);
    const resultadoModerno = casino.apostar(juegoModerno, montoApuestaTragamonedasModerno);
    console.log(`Tragamonedas Moderno - Resultado: ${resultadoModerno.descripcion}`);
    console.log(`La ganancia es de : $$ ${resultadoModerno.descripcion}`);
}
catch (error) {
    console.log(`Error en Tragamonedas Moderno: ${error.message}`);
}
