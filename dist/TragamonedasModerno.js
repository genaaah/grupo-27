"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TragamonedasModerno = void 0;
const Resultado_1 = require("./Resultado");
const Tragamonedas_1 = require("./Tragamonedas");
class TragamonedasModerno extends Tragamonedas_1.Tragamonedas {
    constructor(nombre, minApuesta, tematica) {
        super(nombre, minApuesta, tematica);
        this.setNumeroLineas();
        this.tieneBonus = true;
        this.jackpot = this.valorMultiplicador * 5;
    }
    setNumeroLineas() {
        this.numeroLineas = ["🚗", "🚌", "🚑", "🚒", "🚜"];
    }
    vehiculosAleatorios() {
        return this.numeroLineas[Math.floor(Math.random() * this.numeroLineas.length)];
    }
    jugar(monto) {
        this.realizarApuesta(monto);
        const vehiculo1 = this.vehiculosAleatorios();
        const vehiculo2 = this.vehiculosAleatorios();
        const vehiculo3 = this.vehiculosAleatorios();
        if (vehiculo1 === vehiculo2 && vehiculo2 === vehiculo3) {
            const ganancia = monto * this.jackpot;
            return new Resultado_1.Resultado(ganancia, `¡Ganaste con ${vehiculo1}!`);
        }
        else {
            return new Resultado_1.Resultado(0, `Perdiste: ${monto}. Los vehículos fueron: ${vehiculo1}, ${vehiculo2}, ${vehiculo3}`);
        }
    }
}
exports.TragamonedasModerno = TragamonedasModerno;
