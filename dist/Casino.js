"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
class Casino {
    constructor() {
        this.juegos = [];
    }
    agregarJuego(juego) {
        this.juegos.push(juego);
    }
    seleccionarJuego(nombre) {
        const juego = this.juegos.find((j) => j.nombre === nombre);
        if (!juego) {
            throw new Error(`El juego con el nombre "${nombre}" no fue encontrado.`);
        }
        return juego;
    }
    apostar(juego, monto) {
        if (monto < juego.getMinApuesta()) {
            throw new Error(`La apuesta minima para "${juego.nombre}" es ${juego.getMinApuesta}`);
        }
        return juego.jugar();
    }
}
exports.Casino = Casino;
