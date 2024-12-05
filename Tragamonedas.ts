import { Juego } from "./Juego";
import { Apuesta } from "./Apuesta";
import { Resultado } from "./Resultado";

// import * as readlineSync from "readline-sync";

export abstract class Tragamonedas extends Juego implements Apuesta {
    protected tematica:string;
    protected valorMultiplicador: number;
    protected numeroLineas: string[];

    constructor(nombre:string,minApuesta:number,tematica:string){
        super(nombre,minApuesta)
        this.tematica= tematica;
        this.valorMultiplicador= 2;
        this.numeroLineas= [];
    }

    public getTematica():string{
        return this.tematica;
    }

    public getValorMultiplicador():number{
        return this.valorMultiplicador;
    }

    public getNumeroLineas():string[]{
        return this.numeroLineas;
    }

    private setTematica(nuevaTematica:string):void{
        this.tematica= nuevaTematica;
    }

    private setValorMultiplicador(nuevoValor:number):void{
        this.valorMultiplicador= nuevoValor;
    }

    public abstract jugar(monto: number): Resultado

    // public realizarApuesta(monto: number): Resultado {
    //     if(monto < this.minApuesta){
    //         throw new Error(`Error. El monto debe cumplir con la apuesta minima`)
    //     }else{
    //         return new Resultado(ganancia,descripcion);
    //     }
    // }
}
