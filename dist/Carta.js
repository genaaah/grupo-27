"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
class Carta {
    constructor(valor, palo) {
        this.valor = valor;
        this.palo = palo;
    }
    getValor() {
        return this.valor;
    }
    getPalo() {
        return this.palo;
    }
    toString() {
        return `${this.valor} de ${this.palo}`;
    }
}
exports.Carta = Carta;
