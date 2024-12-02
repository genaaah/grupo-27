import { Juego } from "./Juego";
import { Resultado } from "./Resultado";

export class Casino {
  private juegos: Juego[] = [];

  agregarJuego(juego: Juego): void {
    this.juegos.push(juego);
  }

  seleccionarJuego(nombre: string): Juego {
    const juego = this.juegos.find((j) => j.nombre === nombre);
    if (!juego) {
      throw new Error(`El juego con el nombre "${nombre}" no fue encontrado.`);
    }
    return juego;
  }

  apostar(juego: Juego, monto: number): Resultado {
    if (monto < juego.getMinApuesta()) {
      throw new Error(
        `La apuesta mínima para "${juego.nombre}" es ${juego.getMinApuesta()}`
      );
    }
    return juego.jugar(monto);
  }
}
