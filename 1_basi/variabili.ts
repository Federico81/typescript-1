let nome:string = "Federico" // la variabile memorizza un valore di tipo stringa
let nome2:string             // la variabile è una stringa ma il valore è undefined
let nome3 = "Totò"           // type inferred -> deduce il tipo di dato dal valore ("Totò")
let nome4;                   // la variabile ha tipo di dato any, e valore undefined   

// digitazione dedotta
// typeScript è fortemente tipizzato, posso scrivere variabili senza tipo di dato, il compilatore lo deduce dal valore
// typeScript trova il primo utilizzo della variabile -> determina il tipo di dato -> assume lo stesso tipo di dato per il resto del codice

var num = 2; // type inferred -> number
console.log("value of num "+num)
//num = "12";
//console.log(num);

// type assertion
// typeScript ci consente di modificare una variabile da un tipo a un altro
// sintassi che prevede di inserire il tipo di destinazione tra <> e metterlo davanti alla variabile
let code:any = 123
let employeeCode = <number> code;
console.log(typeof(employeeCode)); // output: number
// 1. abbiamo un codice che ha tipo di dato any
// 2. lo assegnamo a un'altra variabile (sappiamo che è un numero anche se è dichiarato come qualsiasi) con <>
// 3. verifichiamo che il nuovo tipo di valore è number

// ambito della variabile
var global_num = 12     // globale
class numbers {
    num_val = 13;        // class
    storeNumber():void {
        var local_number = 14; // variabile locale
    }
}