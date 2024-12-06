"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinFlip = void 0;
const Juego_1 = require("./Juego");
const Resultado_1 = require("./Resultado");
class CoinFlip extends Juego_1.Juego {
    constructor(nombre, minApuesta) {
        super(nombre, minApuesta);
    }
    jugar(monto) {
        const resultadoLanzamiento = Math.random() < 0.5 ? 'Cara' : 'Cruz';
        const esCara = resultadoLanzamiento === "Cara";
        const ganancia = esCara ? monto * 2 : 0;
        return new Resultado_1.Resultado(ganancia, `El resultado del lanzamiento fue: ${resultadoLanzamiento}. ${esCara ? "¡Felicidades! Ganaste." : "Mejor suerte la próxima vez."}`);
    }
}
exports.CoinFlip = CoinFlip;
