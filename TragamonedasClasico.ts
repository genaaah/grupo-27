import { Resultado } from "./Resultado";
import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasClasico extends Tragamonedas{
    private probabilidadPromedio: number;

    constructor(nombre:string,minApuesta:number,tematica:string){
        super(nombre,minApuesta,tematica)
        this.probabilidadPromedio= this.setProbabilidad();
    }

    public getProbabilidad():number{
        return this.probabilidadPromedio;
    }

    private setProbabilidad():number{
         return this.probabilidadPromedio= 0.5;
    }

    private setNumeroLineas():void{
        this.numeroLineas.push("🍒","🍋","🍎","🍐","🍉");
    }

    public frutasAleatorias():void{
        this.numeroLineas[Math.floor(Math.random()*3)];
    }

    // public jugar(monto: number): Resultado {
    //     if(!this.realizarApuesta(monto)){
    //         throw new Error("Error");
    //     }

    //     let fruta1= this.frutasAleatorias()
    //     let fruta2= this.frutasAleatorias()
    //     let fruta3= this.frutasAleatorias()

    //     if((fruta1==fruta2 && fruta2==fruta3)&&(this.probabilidadPromedio>=0.5 && this.probabilidadPromedio<=1)){
    //         let ganancia= monto * this.valorMultiplicador;
    //         return new Resultado(ganancia,"Ganaste");
    //     }else{
    //         return new Resultado(0,`Perdiste: ${monto}`);
    //     }
    // }
}
