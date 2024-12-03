import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
import { Blackjack } from "./Blackjack";
import { Resultado } from "./Resultado";

const casino = new Casino();

// Crear juegos
const ruleta = new Ruleta("Ruleta Clásica", 10);
const blackjack = new Blackjack("Blackjack Clásico", 15);

// Agregar juegos al casino
casino.agregarJuego(ruleta);
casino.agregarJuego(blackjack);

const nombreJuegoRuleta = "Ruleta Clásica";
const montoApuestaRuleta = 20;

const nombreJuegoBlackjack = "Blackjack Clásico";
const montoApuestaBlc = 50;

try {
  // Apostar Ruleta
  const juegoSeleccionado = casino.seleccionarJuego(nombreJuegoRuleta);
  const resultado: Resultado = casino.apostar(
    juegoSeleccionado,
    montoApuestaRuleta
  );
  console.log(`Resultado de la apuesta: ${resultado.descripcion}`);
  console.log(`Ganancia obtenida: $${resultado.ganancia}`);

  // Apostar Blc
  console.log(
    `\nApostando en ${nombreJuegoBlackjack} con $${montoApuestaBlc}...\n`
  );
  const juegoSeleccionadoBlackjack =
    casino.seleccionarJuego(nombreJuegoBlackjack);
  const resultadoBlackjack: Resultado = casino.apostar(
    juegoSeleccionadoBlackjack,
    montoApuestaBlc
  );
  console.log(`Resultado de Blackjack: ${resultadoBlackjack.descripcion}`);
  console.log(`Ganancia obtenida: $${resultadoBlackjack.ganancia}`);
} catch (error) {
  console.error(`Error: ${(error as Error).message}`);
}
