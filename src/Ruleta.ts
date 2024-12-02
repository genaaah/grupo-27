import { Juego } from "./Juego";
import { Resultado } from "./Resultado";

export class Ruleta extends Juego {
  private numeros: number[];

  constructor(nombre: string, minApuesta: number) {
    super(nombre, minApuesta);
    this.numeros = Array.from({ length: 37 }, (_, i) => i);
  }

  jugar(monto: number): Resultado {
    const numeroGanador = this.numeros[Math.floor(Math.random() * this.numeros.length)];
    const esPar = numeroGanador % 2 === 0;
    const ganancia = esPar ? monto * 2 : 0;
  
    return new Resultado(
      ganancia,
      `El número ganador es ${numeroGanador}. ${esPar ? "¡Felicidades! Ganaste." : "Mejor suerte la próxima vez."}`
    );
  }
}
