import { Resultado } from "./Resultado";
import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasClasico extends Tragamonedas {
  private probabilidadPromedio: number;

  constructor(nombre: string, minApuesta: number, tematica: string) {
    super(nombre, minApuesta, tematica);
    this.setNumeroLineas();
    this.probabilidadPromedio = 0.5;
  }

  private setNumeroLineas(): void {
    this.numeroLineas = ["🍒", "🍋", "🍎", "🍐", "🍉"];
  }

  private frutasAleatorias(): string {
    return this.numeroLineas[Math.floor(Math.random() * this.numeroLineas.length)];
  }

  public jugar(monto: number): Resultado {
    this.realizarApuesta(monto);

    const fruta1 = this.frutasAleatorias();
    const fruta2 = this.frutasAleatorias();
    const fruta3 = this.frutasAleatorias();

    if (fruta1 === fruta2 && fruta2 === fruta3) {
      const ganancia = monto * this.valorMultiplicador;
      return new Resultado(ganancia, `¡Ganaste con ${fruta1}!`);
    } else {
      return new Resultado(0, `Perdiste: ${monto}. Las frutas fueron: ${fruta1}, ${fruta2}, ${fruta3}`);
    }
  }
}
