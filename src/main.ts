import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
import { Blackjack } from "./Blackjack";
import { Resultado } from "./Resultado";
import { TragamonedasClasico } from "./TragamonedasClasico";
import { TragamonedasModerno } from "./TragamonedasModerno";
import { Hilo } from "./Hlo";
import { CoinFlip } from "./Coinflip";

const casino = new Casino();

// Crear juegos
const ruleta = new Ruleta("Ruleta Clásica", 10);
const blackjack = new Blackjack("Blackjack Clásico", 15);
const tragamonedasClasico= new TragamonedasClasico("Tragamonedas Clasico",10,"Frutas");
const tragamonedasModerno= new TragamonedasModerno("Tragamonedas Moderno",10,"Vehiculos");
const hilo= new Hilo("Hilo", 5);




// Agregar juegos al casino
casino.agregarJuego(ruleta);
casino.agregarJuego(blackjack);
casino.agregarJuego(tragamonedasClasico);
casino.agregarJuego(tragamonedasModerno);
casino.agregarJuego(hilo);


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
const montoApuestaTragamonedasClasico= 20;

try{
  const juegoClasico= casino.seleccionarJuego(juegoTragamonedasClasico);
  const resultadoClasico: Resultado= casino.apostar(juegoClasico,montoApuestaTragamonedasClasico);
  console.log(`Tragamonedas Clasico - Resultado: ${resultadoClasico.descripcion}`);
  console.log(`La ganancia es de : $$ ${resultadoClasico.ganancia}`); 
}catch(error){
  console.log(`Error en Tragamonedas Clasico: ${(error as Error).message}`);
}

//Apostar Tragamonedas Moderno:
const juegoTragamonedasModerno= "Tragamonedas Moderno";
const montoApuestaTragamonedasModerno= 30;

try{
  const juegoModerno= casino.seleccionarJuego(juegoTragamonedasModerno);
  const resultadoModerno: Resultado= casino.apostar(juegoModerno,montoApuestaTragamonedasModerno);
  console.log(`Tragamonedas Moderno - Resultado: ${resultadoModerno.descripcion}`);
  console.log(`La ganancia es de : $$ ${resultadoModerno.ganancia}`); 
}catch(error){
  console.log(`Error en Tragamonedas Moderno: ${(error as Error).message}`);
}

// Apostar Hilo

const nombreJuegoHilo = "Hilo";
const montoApuestaHilo = 10;
const esMayor = true; 


try {
  console.log(`\nApostando en ${nombreJuegoHilo} con $${montoApuestaHilo}...\n`);
  const juegoSeleccionadoHilo = casino.seleccionarJuego(nombreJuegoHilo);
  const resultadoHilo: Resultado = casino.apostar(juegoSeleccionadoHilo, montoApuestaHilo);
  console.log(`Resultado de Hilo: ${resultadoHilo.descripcion}`);
  console.log(`Ganancia obtenida: $${resultadoHilo.ganancia}`);
} catch (error) {
  console.error(`Error: ${(error as Error).message}`);
}

// Apostar CoinFlip
const coinFlip = new CoinFlip("Coin Flip", 5);
casino.agregarJuego(coinFlip);
const nombreJuegoCoinFlip = "Coin Flip";
const montoApuestaCoinFlip = 10;
try {
  console.log(`\nApostando en ${nombreJuegoCoinFlip} con $${montoApuestaCoinFlip}...\n`);
  const juegoSeleccionadoCoinFlip = casino.seleccionarJuego(nombreJuegoCoinFlip);
  const resultadoCoinFlip: Resultado = casino.apostar(juegoSeleccionadoCoinFlip, montoApuestaCoinFlip);
  console.log(`Resultado de CoinFlip: ${resultadoCoinFlip.descripcion}`);
  console.log(`Ganancia obtenida: $${resultadoCoinFlip.ganancia}`);
} catch (error) {
  console.error(`Error en CoinFlip: ${(error as Error).message}`);
}


