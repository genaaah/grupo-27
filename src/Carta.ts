export class Carta {
  private valor: number;
  private palo: string;

  constructor(valor: number, palo: string) {
    this.valor = valor;
    this.palo = palo;
  }

  getValor(): number {
    return this.valor;
  }

  getPalo(): string {
    return this.palo;
  }

  toString(): string {
    return `${this.valor} de ${this.palo}`;
  }
}
