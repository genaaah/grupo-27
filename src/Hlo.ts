import { Carta } from "./Carta";
import { Juego } from "./Juego";
import { Resultado } from "./Resultado";

export class Hilo extends Juego {
  private cartas: Carta[];

  constructor(nombre: string, minApuesta: number) {
    super(nombre, minApuesta);
    this.cartas = [];
    this.generarCartas();
  }

  private generarCartas(): void {
    const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
    for (const palo of palos) {
      for (let valor = 1; valor <= 13; valor++) {
        this.cartas.push(new Carta(valor, palo));
      }
    }
  }

  jugar(monto: number): Resultado {
    if (this.cartas.length === 0) {
      throw new Error("No hay cartas");
    }

    const siguienteCarta =
      this.cartas[Math.floor(Math.random() * this.cartas.length)];

    const cartaActual =
      this.cartas[Math.floor(Math.random() * this.cartas.length)];

    let ganancia: number = 0;
    let descripcion: string;

    const esMayor = Math.random() > 0.5

    if (esMayor) {
      if (siguienteCarta.getValor() > cartaActual.getValor()) {
        descripcion = "Ganaste, era mayor";
        ganancia = monto * 2;
      } else {
        descripcion = "Perdiste";
        ganancia = 0;
      }
    } else {
      if (siguienteCarta.getValor() < cartaActual.getValor()) {
        descripcion = "Ganaste, la siguiente carta era menor";
        ganancia = monto * 2;
      } else {
        descripcion = "Perdiste";
        ganancia = 0;
      }
    }

    return new Resultado(ganancia, descripcion);
  }
}