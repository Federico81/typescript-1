var alphas:string[];                // dichiaro il tipo di dato
alphas = ["uno", "due", "tre"]      // inizializzo il dato
console.log(alphas[0])              // come in .js uso l'indice per accedere all'elemento dell'array

var numeri:number[] = [1,2,3]       // dichiaro e inizializzo il dato contemporaneamente

// destrutturare gli array
var arr:number[] = [12,13]
var[x,y] = arr
console.log(x)
console.log(y)

////////// enumerazioni o enums
enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// console.log(StatusCode.NotFound)
/*
enum CardinalDirections {
    Nord,
    Est,
    Sud,
    Ovest
}
*/
//let currentDirection = CardinalDirections.Est;
// console.log(currentDirection);

// funzione con parametri
// struttura -> con typeScript dobbiamo dichiarare il tipo di dato
function dettagli (id:number, name:string, email:string) {      // nelle funzioni passo al parametro il tipo di dato
//
}

// parametri opzionali
function dettagli2 (id:number, name:string, email?:string) {      // il parametro email è opzionale 
                                                                  // se il parametro opzionale non viene passato -> undefined
        console.log("ID:", id);
        console.log("Name:", name);
        if(email!=undefined) {
            console.log("Email:", email)
        }
    }

    // parametri rest
// i parametri rest non limitano il numero di valori che posso passare a una funzione
// però i valori passati devono essere tutti dello stesso tipo
// i parametri rest fanno da segnaposto a più argomenti tutti dello stesso tipo
function addNumbers(...nums:number[]) {         // la dichiarazione accetta un parametro rest nums -> tipo di dato -> stesso tipo!
    var i;
    var sum:number = 0;
    
    for(i=0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    console.log("somma dei numeri", sum)
}
addNumbers (1,2,3)                              // invoco la funzione più volte passando dei valori diversi
addNumbers (10, 10, 10)                         // invoco la funzione più volte passando dei valori diversi

// parametri predefiniti
function calcola_sconto(price:number,rate:number = 0.2) {
    var sconto = price * rate;
    console.log("Sconto:", sconto);
}
calcola_sconto(100)         // inizializzo il primo parametro
calcola_sconto(100, 0.3)    // anche il secondo (e lo ricalcola)

// funzioni anonime non abbiamo novità particolare rispetto a .js
// funzioni che costruiamo con new

////////////// oggetti
var person = {
    firstname:"Federico",
    lastname:"De Ambrosis",
    // sayHello:function() {}      // type template
};
/* person.sayHello = function() {
    console.log("hello "+person.firstname)
}*/
 // uso dei parametri di funzione
 var invokeperson = function(obj: { firstname:string, lastname:string}) {
    console.log("first name: "+obj.firstname)
    console.log("last name: "+obj.lastname)
 }