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
Object.defineProperty(exports, "__esModule", { value: true });
const Casino_1 = require("./Casino");
const Ruleta_1 = require("./Ruleta");
const Blackjack_1 = require("./Blackjack");
const TragamonedasClasico_1 = require("./TragamonedasClasico");
const TragamonedasModerno_1 = require("./TragamonedasModerno");
const Hlo_1 = require("./Hlo");
const Coinflip_1 = require("./Coinflip");
const Menu_1 = require("./Menu");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const casino = new Casino_1.Casino();
        // Crear juegos
        const ruleta = new Ruleta_1.Ruleta("Ruleta Clásica", 10);
        const blackjack = new Blackjack_1.Blackjack("Blackjack Clásico", 15);
        const tragamonedasClasico = new TragamonedasClasico_1.TragamonedasClasico("Tragamonedas Clasico", 10, "Frutas");
        const tragamonedasModerno = new TragamonedasModerno_1.TragamonedasModerno("Tragamonedas Moderno", 10, "Vehiculos");
        const hilo = new Hlo_1.Hilo("Hilo", 5);
        const coinFlip = new Coinflip_1.CoinFlip("Coin Flip", 5);
        casino.inicializarJuegos([
            ruleta,
            blackjack,
            tragamonedasClasico,
            tragamonedasModerno,
            hilo,
            coinFlip,
        ]);
        const menu = new Menu_1.Menu(casino);
        menu.cargarJuegosMenu([
            ruleta,
            blackjack,
            tragamonedasClasico,
            tragamonedasModerno,
            hilo,
            coinFlip,
        ]);
        menu.mostrarMenu;
        yield menu.iniciar();
    });
}
main().catch((error) => {
    console.error("Error inesperado:", error);
});
