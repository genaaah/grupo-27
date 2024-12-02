import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
import { Resultado } from "./Resultado";

const casino = new Casino();
const ruleta = new Ruleta("Ruleta Clásica", 10);

casino.agregarJuego(ruleta);

const nombreJuego = "Ruleta Clásica";
const montoApuesta = 20;

try {
  const juegoSeleccionado = casino.seleccionarJuego(nombreJuego);
  const resultado: Resultado = casino.apostar(juegoSeleccionado, montoApuesta);
  console.log(`Resultado de la apuesta: ${resultado.descripcion}`);
  console.log(`Ganancia obtenida: $${resultado.ganancia}`);
} catch (error) {
  console.error(`Error: ${(error as Error).message}`);
}
