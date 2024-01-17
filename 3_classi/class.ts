// definizione di una classe in TypeScript
class Persona {
    nome: string;
    cognome: string;
    constructor(nome:string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
    }
    visualizzaNomeCognome () {
        return this.nome + ' ' + this.cognome;
    }
}
// devo dichiarare i tipi di dati

class Car {
    // field
    engine:string;

    // constructor -> una funzione speciale delal classe che ci permette di inizializzare le variabili della classe
    constructor(engine:string) {
        this.engine = engine    // this si riferisce all'istanza corrente della classe
    }

    // function
    disp():void {               // funzione che restituisce non un tipo di dato specifico quindi void
        console.log("Engine is : "+this.engine);
    }
}

// creo un oggetto per accedere ai valori
var obj = new Car("XXSY1")                                          // creo l'oggetto
console.log("Leggo l'attributo del valore engine: " + obj.engine)   // accedo
obj.disp()                                                          // invoco

// le proprietà di una classe sono pubbliche (cioè sono accessibili dall'esterno) (salvo che dichiaro qualcosa di diverso)
class Persona2 {
    nome2:string;
    cognome2:string;
    visualizzaNomeCognome () {
        return this.nome2 + ' ' + this.cognome2;
    }
}
var marioRossi = new Persona2();
marioRossi.nome2 = "Mario";
marioRossi.cognome2 = "Rossi";
console.log(marioRossi.visualizzaNomeCognome()); // Mario Rossi

// private -> se la uso i componenti di questa classe non sono accessibili all'esterno

class Persona3 {
    nome3: string;
    cognome3: string;
    constructor(nome3:string, cognome3:string) {
        this.nome3 = nome3;
        this.cognome3 = cognome3;
    }
   // private visualizzaNomeCognome3() {
    visualizzaNomeCognome3() {
        return this.nome3 + ' ' + this.cognome3;
    }
}
var marioRossi2 = new Persona3("luca", "paolo");
marioRossi2.visualizzaNomeCognome3();

// static è un metodo (o una proprietà) che possono essere usati senza necessità di creare un'istanza della classe
/*
class Persona4 {
    nome4: string,
    cognome4:string,
    constructor(nome4, cognome4) {
        this.nome4 = nome4;
        this.cognome4 = cognome4;
     }
     static concatena(a:string, b:string) {
        return a + " " + b;
     }
}
*/
// ereditarietà (extends, super) cioè la possibilità di creare classi da classi esistenti
// la classe che viene estesa per creare la nuova classe è genitore o super classe
// una classe eredita da un'altra classe grazie alla parola chiave "extends"
// le classi generate ereditano tutte le proprietà e i metodi ad eccezione di quelli private

enum Materie {Html, Css, Javascript, TypeScript, React}
class Studente extends Persona {        // invocando il costruttore della classe base
    materie: Materie[];                 // dalla classe base Persona deriva Studente
    constructor(nome, cognome) {
        super(nome, cognome);           // con super un'istanza di Studente inizializza nome e cognome che eredita da persona
    }
}
// ereditarietà può essere di diversi tipi
// 1.single        -> una classe si può estendere da una classe genitore
// 2.multiple      -> una classe eredita da più classi (TypeScript non supporta)
// 3.multi-livello -> una classe eredita da più livelli

class Root {
    str:string;
}

class Child extends Root {}
class Mariline extends Child {}     // indirettamente eredita anche da Root -> è una ereditarietà multi-livello

var obje = new Mariline();
obje.str = "Ciao"
console.log(obje.str)