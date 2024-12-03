import { Carta } from "./Carta";

export class Mazo {
  private cartas: Carta[];

  constructor() {
    this.cartas = [];
    const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
    for (const palo of palos) {
      for (let valor = 1; valor <= 13; valor++) {
        this.cartas.push(new Carta(valor, palo));
      }
    }
  }

  baraja(): void {
    for (let i = this.cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
  }

  repartir(cantidad: number): Carta[] {
    const mano: Carta[] = [];
    for (let i = 0; i < cantidad && this.cartas.length > 0; i++) {
      mano.push(this.cartas.shift()!);
    }
    return mano;
  }

  toString(): string {
    return this.cartas.map((carta) => carta.toString()).join(", ");
  }
}
