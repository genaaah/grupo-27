import { Juego } from "./Juego"
import { Resultado } from "./Resultado"

export class CoinFlip extends Juego{
    constructor(nombre:string,minApuesta:number){
    super(nombre,minApuesta)
    }



jugar(monto:number): Resultado{ 
    const resultadoLanzamiento = Math.random() < 0.5 ? 'Cara' : 'Cruz';
    const esCara = resultadoLanzamiento === "Cara";
    const ganancia = esCara ? monto * 2 : 0;

    return new Resultado(
        ganancia,
        `El resultado del lanzamiento fue: ${resultadoLanzamiento}. ${esCara ? "¡Felicidades! Ganaste." : "Mejor suerte la próxima vez."}`
      );

}
}
