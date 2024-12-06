import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
import { Blackjack } from "./Blackjack";
import { TragamonedasClasico } from "./TragamonedasClasico";
import { TragamonedasModerno } from "./TragamonedasModerno";
import { Hilo } from "./Hlo";
import { CoinFlip } from "./Coinflip";
import { Menu } from "./Menu";

async function main() {
  const casino = new Casino();

  // Crear juegos
  const ruleta = new Ruleta("Ruleta Clásica", 10);
  const blackjack = new Blackjack("Blackjack Clásico", 15);
  const tragamonedasClasico = new TragamonedasClasico(
    "Tragamonedas Clasico",
    10,
    "Frutas"
  );
  const tragamonedasModerno = new TragamonedasModerno(
    "Tragamonedas Moderno",
    10,
    "Vehiculos"
  );
  const hilo = new Hilo("Hilo", 5);
  const coinFlip = new CoinFlip("Coin Flip", 5);

  casino.inicializarJuegos([
    ruleta,
    blackjack,
    tragamonedasClasico,
    tragamonedasModerno,
    hilo,
    coinFlip,
  ]);

  const menu = new Menu(casino);
  menu.cargarJuegosMenu([
    ruleta,
    blackjack,
    tragamonedasClasico,
    tragamonedasModerno,
    hilo,
    coinFlip,
  ]);

  menu.mostrarMenu;
  await menu.iniciar();
}

main().catch((error) => {
  console.error("Error inesperado:", error);
});
