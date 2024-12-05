import { Juego } from "./Juego";
import { Apuesta } from "./Apuesta";
import { Resultado } from "./Resultado";

export abstract class Tragamonedas extends Juego implements Apuesta {
  protected tematica: string;
  protected valorMultiplicador: number;
  protected numeroLineas: string[];

  constructor(nombre: string, minApuesta: number, tematica: string) {
    super(nombre, minApuesta);
    this.tematica = tematica;
    this.valorMultiplicador = 2;
    this.numeroLineas = [];
  }

  private getTematica(): string {
    return this.tematica;
  }

  private getValorMultiplicador(): number {
    return this.valorMultiplicador;
  }

  private getNumeroLineas(): string[] {
    return this.numeroLineas;
  }

  public abstract jugar(monto: number): Resultado;

  public realizarApuesta(monto: number): Resultado {
    if (monto < this.minApuesta) {
      throw new Error(`La apuesta mínima es ${this.minApuesta}.`);
    }
    const ganancia= monto * this.valorMultiplicador;
    const descripcion= "Apuesta realizada correctamente"
    return new Resultado(ganancia,descripcion);
  }
}
