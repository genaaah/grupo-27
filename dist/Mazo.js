"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mazo = void 0;
const Carta_1 = require("./Carta");
class Mazo {
    constructor() {
        this.cartas = [];
        const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
        for (const palo of palos) {
            for (let valor = 1; valor <= 13; valor++) {
                this.cartas.push(new Carta_1.Carta(valor, palo));
            }
        }
    }
    baraja() {
        for (let i = this.cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
        }
    }
    repartir(cantidad) {
        const mano = [];
        for (let i = 0; i < cantidad && this.cartas.length > 0; i++) {
            mano.push(this.cartas.shift());
        }
        return mano;
    }
    toString() {
        return this.cartas.map((carta) => carta.toString()).join(", ");
    }
}
exports.Mazo = Mazo;
