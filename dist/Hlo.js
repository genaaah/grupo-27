"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hilo = void 0;
const Carta_1 = require("./Carta");
const Juego_1 = require("./Juego");
const Resultado_1 = require("./Resultado");
class Hilo extends Juego_1.Juego {
    constructor(nombre, minApuesta) {
        super(nombre, minApuesta);
        this.cartas = [];
        this.generarCartas();
    }
    generarCartas() {
        const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
        for (const palo of palos) {
            for (let valor = 1; valor <= 13; valor++) {
                this.cartas.push(new Carta_1.Carta(valor, palo));
            }
        }
    }
    jugar(monto) {
        if (this.cartas.length === 0) {
            throw new Error("No hay cartas");
        }
        const siguienteCarta = this.cartas[Math.floor(Math.random() * this.cartas.length)];
        const cartaActual = this.cartas[Math.floor(Math.random() * this.cartas.length)];
        let ganancia = 0;
        let descripcion;
        const esMayor = Math.random() > 0.5;
        if (esMayor) {
            if (siguienteCarta.getValor() > cartaActual.getValor()) {
                descripcion = "Ganaste, era mayor";
                ganancia = monto * 2;
            }
            else {
                descripcion = "Perdiste";
                ganancia = -monto;
            }
        }
        else {
            if (siguienteCarta.getValor() < cartaActual.getValor()) {
                descripcion = "Ganaste, la siguiente carta era menor";
                ganancia = monto * 2;
            }
            else {
                descripcion = "Perdiste";
                ganancia = -monto;
            }
        }
        return new Resultado_1.Resultado(ganancia, descripcion);
    }
}
exports.Hilo = Hilo;
