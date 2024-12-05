"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TragamonedasClasico = void 0;
const Resultado_1 = require("./Resultado");
const Tragamonedas_1 = require("./Tragamonedas");
class TragamonedasClasico extends Tragamonedas_1.Tragamonedas {
    constructor(nombre, minApuesta, tematica) {
        super(nombre, minApuesta, tematica);
        this.setNumeroLineas();
        this.probabilidadPromedio = 0.5;
    }
    setNumeroLineas() {
        this.numeroLineas = ["🍒", "🍋", "🍎", "🍐", "🍉"];
    }
    frutasAleatorias() {
        return this.numeroLineas[Math.floor(Math.random() * this.numeroLineas.length)];
    }
    jugar(monto) {
        this.realizarApuesta(monto);
        const fruta1 = this.frutasAleatorias();
        const fruta2 = this.frutasAleatorias();
        const fruta3 = this.frutasAleatorias();
        if (fruta1 === fruta2 && fruta2 === fruta3) {
            const ganancia = monto * this.valorMultiplicador;
            return new Resultado_1.Resultado(ganancia, `¡Ganaste con ${fruta1}!`);
        }
        else {
            return new Resultado_1.Resultado(0, `Perdiste: ${monto}. Las frutas fueron: ${fruta1}, ${fruta2}, ${fruta3}`);
        }
    }
}
exports.TragamonedasClasico = TragamonedasClasico;
