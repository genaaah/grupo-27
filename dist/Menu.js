"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const readline_1 = __importDefault(require("readline"));
class Menu {
    constructor(casino) {
        this.juegos = [];
        this.casino = casino;
        this.rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    cargarJuegosMenu(juegosCargar) {
        juegosCargar.forEach((juego) => {
            this.juegos.push({ nombre: juego.nombre, minApuesta: juego.minApuesta });
        });
    }
    mostrarMenu() {
        console.log("\n--- Bienvenido al Casino ---");
        this.juegos.forEach((juego, index) => {
            console.log(`${index + 1}. Apostar en ${juego.nombre}`);
        });
        console.log(`${this.juegos.length + 1}. Salir`);
    }
    pedirMonto() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.rl.question("Ingresa el monto que deseas apostar: ", (respuesta) => {
                    const monto = Number(respuesta);
                    if (isNaN(monto) || monto <= 0) {
                        console.log("Monto no válido. Por favor, ingresa un número mayor a 0.");
                        resolve(this.pedirMonto());
                    }
                    else {
                        resolve(monto);
                    }
                });
            });
        });
    }
    iniciar() {
        return __awaiter(this, void 0, void 0, function* () {
            const preguntar = () => {
                return new Promise((resolve) => {
                    this.rl.question("Selecciona una opción del menú: ", (respuesta) => {
                        resolve(parseInt(respuesta));
                    });
                });
            };
            let continuar = true;
            while (continuar) {
                this.mostrarMenu();
                const opcion = yield preguntar();
                if (opcion === this.juegos.length + 1) {
                    console.log("¡Gracias por jugar! Hasta luego.");
                    continuar = false;
                }
                else {
                    const juegoSeleccionado = this.juegos[opcion - 1];
                    if (!juegoSeleccionado) {
                        console.log("Opción no válida, por favor selecciona otra opción.");
                    }
                    else {
                        const monto = yield this.pedirMonto();
                        try {
                            const juego = this.casino.seleccionarJuego(juegoSeleccionado.nombre);
                            const resultado = this.casino.apostar(juego, monto);
                            console.log(`\n--- ${juegoSeleccionado.nombre} ---`);
                            console.log(`Resultado: ${resultado.descripcion}`);
                            console.log(`Ganancia obtenida: $${resultado.ganancia}`);
                        }
                        catch (error) {
                            console.error(`Error: ${error.message}`);
                        }
                    }
                }
            }
            this.rl.close();
        });
    }
}
exports.Menu = Menu;
