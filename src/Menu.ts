import readline from "readline";
import { Casino } from "./Casino";
import { Resultado } from "./Resultado";
import { Juego } from "./Juego";

export class Menu {
  private casino: Casino;
  private juegos: { nombre: string; minApuesta: number }[] = [];
  private rl: readline.Interface;

  constructor(casino: Casino) {
    this.casino = casino;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public cargarJuegosMenu(juegosCargar: Juego[]) {
    juegosCargar.forEach((juego) => {
      this.juegos.push({ nombre: juego.nombre, minApuesta: juego.minApuesta });
    });
  }

  public mostrarMenu(): void {
    console.log("\n--- Bienvenido al Casino ---");
    this.juegos.forEach((juego, index) => {
      console.log(`${index + 1}. Apostar en ${juego.nombre}`);
    });
    console.log(`${this.juegos.length + 1}. Salir`);
  }

  public async iniciar(): Promise<void> {
    const preguntar = (): Promise<number> => {
      return new Promise((resolve) => {
        this.rl.question("Selecciona una opción del menú: ", (respuesta) => {
          resolve(parseInt(respuesta));
        });
      });
    };

    let continuar = true;
    while (continuar) {
      this.mostrarMenu();
      const opcion = await preguntar();

      if (opcion === this.juegos.length + 1) {
        console.log("¡Gracias por jugar! Hasta luego.");
        continuar = false;
      } else {
        const juegoSeleccionado = this.juegos[opcion - 1];
        if (!juegoSeleccionado) {
          console.log("Opción no válida, por favor selecciona otra opción.");
        } else {
          const monto = await this.pedirMonto();
          try {
            const juego = this.casino.seleccionarJuego(
              juegoSeleccionado.nombre
            );
            const resultado: Resultado = this.casino.apostar(juego, monto);
            console.log(`\n--- ${juegoSeleccionado.nombre} ---`);
            console.log(`Resultado: ${resultado.descripcion}`);
            console.log(`Ganancia obtenida: $${resultado.ganancia}`);
          } catch (error) {
            console.error(`Error: ${(error as Error).message}`);
          }
        }
      }
    }

    this.rl.close();
  }

  private async pedirMonto(): Promise<number> {
    return new Promise((resolve) => {
      this.rl.question("Ingresa el monto que deseas apostar: ", (respuesta) => {
        const monto: number = Number(respuesta);
        if (isNaN(monto) || monto <= 0) {
          console.log(
            "Monto no válido. Por favor, ingresa un número mayor a 0."
          );
          resolve(this.pedirMonto());
        } else {
          resolve(monto);
        }
      });
    });
  }
}
