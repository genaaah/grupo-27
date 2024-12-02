import { Resultado } from "./Resultado";

export abstract class Juego {
  nombre: string;
  minApuesta: number;

  constructor(nombre: string, minApuesta: number) {
    this.nombre = nombre;
    this.minApuesta = minApuesta;
  }

  abstract jugar(monto: number): Resultado;

  getMinApuesta(): number {
    return this.minApuesta;
  }

  getTipoJuego(): string {
    return this.constructor.name;
  }
}
