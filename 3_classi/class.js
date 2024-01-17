var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// definizione di una classe in TypeScript
var Persona = /** @class */ (function () {
    function Persona(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Persona.prototype.visualizzaNomeCognome = function () {
        return this.nome + ' ' + this.cognome;
    };
    return Persona;
}());
// devo dichiarare i tipi di dati
var Car = /** @class */ (function () {
    // constructor -> una funzione speciale delal classe che ci permette di inizializzare le variabili della classe
    function Car(engine) {
        this.engine = engine; // this si riferisce all'istanza corrente della classe
    }
    // function
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return Car;
}());
// creo un oggetto per accedere ai valori
var obj = new Car("XXSY1"); // creo l'oggetto
console.log("Leggo l'attributo del valore engine: " + obj.engine); // accedo
obj.disp(); // invoco
// le proprietà di una classe sono pubbliche (cioè sono accessibili dall'esterno) (salvo che dichiaro qualcosa di diverso)
var Persona2 = /** @class */ (function () {
    function Persona2() {
    }
    Persona2.prototype.visualizzaNomeCognome = function () {
        return this.nome2 + ' ' + this.cognome2;
    };
    return Persona2;
}());
var marioRossi = new Persona2();
marioRossi.nome2 = "Mario";
marioRossi.cognome2 = "Rossi";
console.log(marioRossi.visualizzaNomeCognome()); // Mario Rossi
// private -> se la uso i componenti di questa classe non sono accessibili all'esterno
var Persona3 = /** @class */ (function () {
    function Persona3(nome3, cognome3) {
        this.nome3 = nome3;
        this.cognome3 = cognome3;
    }
    // private visualizzaNomeCognome3() {
    Persona3.prototype.visualizzaNomeCognome3 = function () {
        return this.nome3 + ' ' + this.cognome3;
    };
    return Persona3;
}());
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
var Materie;
(function (Materie) {
    Materie[Materie["Html"] = 0] = "Html";
    Materie[Materie["Css"] = 1] = "Css";
    Materie[Materie["Javascript"] = 2] = "Javascript";
    Materie[Materie["TypeScript"] = 3] = "TypeScript";
    Materie[Materie["React"] = 4] = "React";
})(Materie || (Materie = {}));
var Studente = /** @class */ (function (_super) {
    __extends(Studente, _super);
    function Studente(nome, cognome) {
        return _super.call(this, nome, cognome) || this;
    }
    return Studente;
}(Persona));
// ereditarietà può essere di diversi tipi
// 1.single        -> una classe si può estendere da una classe genitore
// 2.multiple      -> una classe eredita da più classi (TypeScript non supporta)
// 3.multi-livello -> una classe eredita da più livelli
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Mariline = /** @class */ (function (_super) {
    __extends(Mariline, _super);
    function Mariline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mariline;
}(Child)); // indirettamente eredita anche da Root -> è una ereditarietà multi-livello
var obje = new Mariline();
obje.str = "Ciao";
console.log(obje.str);
