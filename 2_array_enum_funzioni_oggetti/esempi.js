var alphas; // dichiaro il tipo di dato
alphas = ["uno", "due", "tre"]; // inizializzo il dato
console.log(alphas[0]); // come in .js uso l'indice per accedere all'elemento dell'array
var numeri = [1, 2, 3]; // dichiaro e inizializzo il dato contemporaneamente
// destrutturare gli array
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
////////// enumerazioni o enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["Nord"] = 0] = "Nord";
    CardinalDirections[CardinalDirections["Est"] = 1] = "Est";
    CardinalDirections[CardinalDirections["Sud"] = 2] = "Sud";
    CardinalDirections[CardinalDirections["Ovest"] = 3] = "Ovest";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.Est;
console.log(currentDirection);
