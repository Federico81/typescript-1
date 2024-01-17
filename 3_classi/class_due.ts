// TypeScript supporta l'ereditarietà delle classi
// extends estende una classe "base"
// usiamo super() nel costruttore per invocare il costruttore della classe base
class Veicolo {
    modello:string;
    marca:string;
    tipoVeicolo:string;
    constructor(marca:string, modello:string, tipoVeicolo:string) {
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;
    }
    dettagliVeicolo():string {
        return `${this.tipoVeicolo} - ${this.marca} - ${this.modello}`;
    }
}
class Macchine extends Veicolo {
    constructor(marca:string, modello:string) {
        super (marca, modello, 'auto')
    }
}
class Moto extends Veicolo {
    constructor(marca:string, modello:string) {
        super (marca, modello, 'moto')
    }
}
const jaguar = new Macchine('Jaguar', 'di qualche tipo');
const ducati = new Moto('Ducati', 'Panigale');

console.log(jaguar instanceof Macchine); // true
console.log(ducati instanceof Moto);     // true
console.log(ducati instanceof Macchine); // false