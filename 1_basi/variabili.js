var nome = "Federico"; // la variabile memorizza un valore di tipo stringa
var nome2; // la variabile è una stringa ma il valore è undefined
var nome3 = "Totò"; // type inferred -> deduce il tipo di dato dal valore ("Totò")
var nome4; // la variabile ha tipo di dato any, e valore undefined   
// digitazione dedotta
// typeScript è fortemente tipizzato, posso scrivere variabili senza tipo di dato, il compilatore lo deduce dal valore
// typeScript trova il primo utilizzo della variabile -> determina il tipo di dato -> assume lo stesso tipo di dato per il resto del codice
var num = 2; // type inferred -> number
console.log("value of num " + num);
num = "12";
console.log(num);
// type assertion
//  
