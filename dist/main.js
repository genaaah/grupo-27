"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Casino_1 = require("./Casino");
const Ruleta_1 = require("./Ruleta");
const Blackjack_1 = require("./Blackjack");
const TragamonedasClasico_1 = require("./TragamonedasClasico");
const TragamonedasModerno_1 = require("./TragamonedasModerno");
const Hlo_1 = require("./Hlo");
const Coinflip_1 = require("./Coinflip");
const casino = new Casino_1.Casino();
// Crear juegos
const ruleta = new Ruleta_1.Ruleta("Ruleta Clásica", 10);
const blackjack = new Blackjack_1.Blackjack("Blackjack Clásico", 15);
const tragamonedasClasico = new TragamonedasClasico_1.TragamonedasClasico("Tragamonedas Clasico", 10, "Frutas");
const tragamonedasModerno = new TragamonedasModerno_1.TragamonedasModerno("Tragamonedas Moderno", 10, "Vehiculos");
const hilo = new Hlo_1.Hilo("Hilo", 5);
// Agregar juegos al casino
casino.agregarJuego(ruleta);
casino.agregarJuego(blackjack);
casino.agregarJuego(tragamonedasClasico);
casino.agregarJuego(tragamonedasModerno);
casino.agregarJuego(hilo);
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
const montoApuestaTragamonedasClasico = 20;
try {
    const juegoClasico = casino.seleccionarJuego(juegoTragamonedasClasico);
    const resultadoClasico = casino.apostar(juegoClasico, montoApuestaTragamonedasClasico);
    console.log(`Tragamonedas Clasico - Resultado: ${resultadoClasico.descripcion}`);
    console.log(`La ganancia es de : $$ ${resultadoClasico.ganancia}`);
}
catch (error) {
    console.log(`Error en Tragamonedas Clasico: ${error.message}`);
}
//Apostar Tragamonedas Moderno:
const juegoTragamonedasModerno = "Tragamonedas Moderno";
const montoApuestaTragamonedasModerno = 30;
try {
    const juegoModerno = casino.seleccionarJuego(juegoTragamonedasModerno);
    const resultadoModerno = casino.apostar(juegoModerno, montoApuestaTragamonedasModerno);
    console.log(`Tragamonedas Moderno - Resultado: ${resultadoModerno.descripcion}`);
    console.log(`La ganancia es de : $$ ${resultadoModerno.ganancia}`);
}
catch (error) {
    console.log(`Error en Tragamonedas Moderno: ${error.message}`);
}
// Apostar Hilo
const nombreJuegoHilo = "Hilo";
const montoApuestaHilo = 10;
const esMayor = true;
try {
    console.log(`\nApostando en ${nombreJuegoHilo} con $${montoApuestaHilo}...\n`);
    const juegoSeleccionadoHilo = casino.seleccionarJuego(nombreJuegoHilo);
    const resultadoHilo = casino.apostar(juegoSeleccionadoHilo, montoApuestaHilo);
    console.log(`Resultado de Hilo: ${resultadoHilo.descripcion}`);
    console.log(`Ganancia obtenida: $${resultadoHilo.ganancia}`);
}
catch (error) {
    console.error(`Error: ${error.message}`);
}
// Apostar CoinFlip
const coinFlip = new Coinflip_1.CoinFlip("Coin Flip", 5);
casino.agregarJuego(coinFlip);
const nombreJuegoCoinFlip = "Coin Flip";
const montoApuestaCoinFlip = 10;
try {
    console.log(`\nApostando en ${nombreJuegoCoinFlip} con $${montoApuestaCoinFlip}...\n`);
    const juegoSeleccionadoCoinFlip = casino.seleccionarJuego(nombreJuegoCoinFlip);
    const resultadoCoinFlip = casino.apostar(juegoSeleccionadoCoinFlip, montoApuestaCoinFlip);
    console.log(`Resultado de CoinFlip: ${resultadoCoinFlip.descripcion}`);
    console.log(`Ganancia obtenida: $${resultadoCoinFlip.ganancia}`);
}
catch (error) {
    console.error(`Error en CoinFlip: ${error.message}`);
}
