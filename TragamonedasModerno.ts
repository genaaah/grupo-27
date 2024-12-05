import { Resultado } from "./Resultado";
import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasModerno extends Tragamonedas{
    private tieneBonus: boolean;
    private jackpot: number;

    constructor(nombre:string,minApuesta:number,tematica:string){
        super(nombre,minApuesta,tematica)
        this.tieneBonus= this.setBonus();
        this.jackpot= this.setJackpot();
    }

    public getBonus():boolean{
        return this.tieneBonus;
    }

    public getJackpot():number{
        return this.jackpot;
    }

    private setBonus():boolean{
        return this.tieneBonus= true;
    }

    private setJackpot():number{
        return this.jackpot= this.valorMultiplicador*5;
    }

    private setNumeroLineas():void{
        this.numeroLineas.push("🚗","🚌","🚑","🚒","🚜");
    }

    public vehiculosAleatorias():void{
        this.numeroLineas[Math.floor(Math.random()*3)];
    }

    // public jugar(monto: number): Resultado {
    //     if(!this.realizarApuesta(monto)){
    //         throw new Error("Error");
    //     }

    //     let vehiculo1= this.vehiculosAleatorias()
    //     let vehiculo2= this.vehiculosAleatorias()
    //     let vehiculo3= this.vehiculosAleatorias()

    //     if(vehiculo1==vehiculo2 && vehiculo2==vehiculo3){
    //         let ganancia= monto * this.jackpot;
    //         return new Resultado(ganancia,"Ganaste");
    //     }else{
    //         return new Resultado(0,`Perdiste: ${monto}`);
    //     }
    // }
}
