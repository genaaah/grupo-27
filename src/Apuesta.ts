import { Resultado } from "./Resultado";

export interface Apuesta {
  realizarApuesta(monto: number): Resultado;
}
