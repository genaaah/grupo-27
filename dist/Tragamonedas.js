"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
const Juego_1 = require("./Juego");
const Resultado_1 = require("./Resultado");
class Tragamonedas extends Juego_1.Juego {
    constructor(nombre, minApuesta, tematica) {
        super(nombre, minApuesta);
        this.tematica = tematica;
        this.valorMultiplicador = 2;
        this.numeroLineas = [];
    }
    getTematica() {
        return this.tematica;
    }
    getValorMultiplicador() {
        return this.valorMultiplicador;
    }
    getNumeroLineas() {
        return this.numeroLineas;
    }
    realizarApuesta(monto) {
        if (monto < this.minApuesta) {
            throw new Error(`La apuesta mínima es ${this.minApuesta}.`);
        }
        const ganancia = monto * this.valorMultiplicador;
        const descripcion = "Apuesta realizada correctamente";
        return new Resultado_1.Resultado(ganancia, descripcion);
    }
}
exports.Tragamonedas = Tragamonedas;
