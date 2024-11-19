"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
class Juego {
    constructor(nombre, minApuesta) {
        this.nombre = nombre;
        this.minApuesta = minApuesta;
    }
    getMinApuesta() {
        return this.minApuesta;
    }
    getTipoJuego() {
        return this.constructor.name;
    }
}
exports.Juego = Juego;
