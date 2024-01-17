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
// TypeScript supporta l'ereditarietà delle classi
// extends estende una classe "base"
// usiamo super() nel costruttore per invocare il costruttore della classe base
var Veicolo = /** @class */ (function () {
    function Veicolo(marca, modello, tipoVeicolo) {
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;
    }
    Veicolo.prototype.dettagliVeicolo = function () {
        return this.tipoVeicolo + " - " + this.marca + " - " + this.modello;
    };
    return Veicolo;
}());
var Macchine = /** @class */ (function (_super) {
    __extends(Macchine, _super);
    function Macchine(marca, modello) {
        return _super.call(this, marca, modello, 'auto') || this;
    }
    return Macchine;
}(Veicolo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modello) {
        return _super.call(this, marca, modello, 'moto') || this;
    }
    return Moto;
}(Veicolo));
var jaguar = new Macchine('Jaguar', 'di qualche tipo');
var ducati = new Moto('Ducati', 'Panigale');
console.log(jaguar instanceof Macchine); // true
console.log(ducati instanceof Moto); // true
console.log(ducati instanceof Macchine); // false
