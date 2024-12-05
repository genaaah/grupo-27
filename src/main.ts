import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
import { Blackjack } from "./Blackjack";
import { Resultado } from "./Resultado";
import { TragamonedasClasico } from "./TragamonedasClasico";
import { TragamonedasModerno } from "./TragamonedasModerno";

const casino = new Casino();

// Crear juegos
const ruleta = new Ruleta("Ruleta Clásica", 10);
const blackjack = new Blackjack("Blackjack Clásico", 15);
const tragamonedasClasico= new TragamonedasClasico("Tragamonedas Clasico",0,"Frutas");
const tragamonedasModerno= new TragamonedasModerno("Tragamonedas Moderno",0,"Vehiculos");

// Agregar juegos al casino
casino.agregarJuego(ruleta);
casino.agregarJuego(blackjack);
casino.agregarJuego(tragamonedasClasico);
casino.agregarJuego(tragamonedasModerno);

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

//Apostar Tragamonedas Clasico:
const juegoTragamonedasClasico= "Tragamonedas Clasico";
const montoApuestaTragamonedasClasico= 10;

try{
  const juegoClasico= casino.seleccionarJuego(juegoTragamonedasClasico);
  const resultadoClasico: Resultado= casino.apostar(juegoClasico,montoApuestaTragamonedasClasico);
  console.log(`Tragamonedas Clasico - Resultado: ${resultadoClasico.descripcion}`);
  console.log(`La ganancia es de : $$ ${resultadoClasico.descripcion}`); 
}catch(error){
  console.log(`Error en Tragamonedas Clasico: ${(error as Error).message}`);
}

//Apostar Tragamonedas Moderno:
const juegoTragamonedasModerno= "Tragamonedas Clasico";
const montoApuestaTragamonedasModerno= 10;

try{
  const juegoModerno= casino.seleccionarJuego(juegoTragamonedasModerno);
  const resultadoModerno: Resultado= casino.apostar(juegoModerno,montoApuestaTragamonedasModerno);
  console.log(`Tragamonedas Moderno - Resultado: ${resultadoModerno.descripcion}`);
  console.log(`La ganancia es de : $$ ${resultadoModerno.descripcion}`); 
}catch(error){
  console.log(`Error en Tragamonedas Moderno: ${(error as Error).message}`);
}
