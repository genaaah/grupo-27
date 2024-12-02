"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
const Juego_1 = require("./Juego");
const Resultado_1 = require("./Resultado");
class Ruleta extends Juego_1.Juego {
    constructor(nombre, minApuesta) {
        super(nombre, minApuesta);
        this.numeros = Array.from({ length: 37 }, (_, i) => i);
    }
    jugar(monto) {
        const numeroGanador = this.numeros[Math.floor(Math.random() * this.numeros.length)];
        const esPar = numeroGanador % 2 === 0;
        const ganancia = esPar ? monto * 2 : 0;
        return new Resultado_1.Resultado(ganancia, `El número ganador es ${numeroGanador}. ${esPar ? "¡Felicidades! Ganaste." : "Mejor suerte la próxima vez."}`);
    }
}
exports.Ruleta = Ruleta;
