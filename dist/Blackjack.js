"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blackjack = void 0;
const Juego_1 = require("./Juego");
const Mazo_1 = require("./Mazo");
const Resultado_1 = require("./Resultado");
class Blackjack extends Juego_1.Juego {
    constructor(nombre, minApuesta) {
        super(nombre, minApuesta);
        this.mazo = new Mazo_1.Mazo();
        this.manoJugador = [];
        this.manoDealer = [];
    }
    jugar(monto) {
        if (monto < this.minApuesta) {
            throw new Error(`El monto apostado debe ser mayor o igual a la apuesta mínima: $${this.minApuesta}`);
        }
        this.mazo.baraja();
        this.manoJugador = this.mazo.repartir(2);
        this.manoDealer = this.mazo.repartir(2);
        while (this.calcularPuntaje(this.manoJugador) < 17) {
            this.manoJugador.push(...this.mazo.repartir(1));
        }
        while (this.calcularPuntaje(this.manoDealer) < 17) {
            this.manoDealer.push(...this.mazo.repartir(1));
        }
        const puntajeFinalJugador = this.calcularPuntaje(this.manoJugador);
        const puntajeFinalDealer = this.calcularPuntaje(this.manoDealer);
        let mensaje = `Jugador: ${puntajeFinalJugador}, Dealer: ${puntajeFinalDealer}. `;
        let ganancia = 0;
        if (puntajeFinalJugador > 21) {
            mensaje += "El jugador se pasó de 21. Dealer gana.";
            ganancia = -monto;
        }
        else if (puntajeFinalDealer > 21) {
            mensaje += "El dealer se pasó de 21. Jugador gana.";
            ganancia = monto;
        }
        else if (puntajeFinalJugador > puntajeFinalDealer) {
            mensaje += "Jugador tiene más puntos. Jugador gana.";
            ganancia = monto;
        }
        else if (puntajeFinalJugador < puntajeFinalDealer) {
            mensaje += "Dealer tiene más puntos. Dealer gana.";
            ganancia = -monto;
        }
        else {
            mensaje += "Empate.";
            ganancia = 0;
        }
        return new Resultado_1.Resultado(ganancia, mensaje);
    }
    calcularPuntaje(mano) {
        let puntaje = 0;
        let ases = 0;
        for (const carta of mano) {
            if (carta.getValor() > 10) {
                puntaje += 10;
            }
            else if (carta.getValor() === 1) {
                ases++;
                puntaje += 11;
            }
            else {
                puntaje += carta.getValor();
            }
        }
        while (puntaje > 21 && ases > 0) {
            puntaje -= 10;
            ases--;
        }
        return puntaje;
    }
}
exports.Blackjack = Blackjack;
