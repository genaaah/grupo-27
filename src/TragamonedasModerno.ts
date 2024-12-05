import { Resultado } from "./Resultado";
import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasModerno extends Tragamonedas {
  private tieneBonus: boolean;
  private jackpot: number;

  constructor(nombre: string, minApuesta: number, tematica: string) {
    super(nombre, minApuesta, tematica);
    this.setNumeroLineas();
    this.tieneBonus = true;
    this.jackpot = this.valorMultiplicador * 5;
  }

  private setNumeroLineas(): void {
    this.numeroLineas = ["🚗", "🚌", "🚑", "🚒", "🚜"];
  }

  private vehiculosAleatorios(): string {
    return this.numeroLineas[Math.floor(Math.random() * this.numeroLineas.length)];
  }

  public jugar(monto: number): Resultado {
    this.realizarApuesta(monto);

    const vehiculo1 = this.vehiculosAleatorios();
    const vehiculo2 = this.vehiculosAleatorios();
    const vehiculo3 = this.vehiculosAleatorios();

    if (vehiculo1 === vehiculo2 && vehiculo2 === vehiculo3) {
      const ganancia = monto * this.jackpot;
      return new Resultado(ganancia, `¡Ganaste con ${vehiculo1}!`);
    } else {
      return new Resultado(0, `Perdiste: ${monto}. Los vehículos fueron: ${vehiculo1}, ${vehiculo2}, ${vehiculo3}`);
    }
  }
}
