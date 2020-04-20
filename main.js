//chiedo all'utente quanti km vuole percorrere e quanti anni ha
var km = prompt("Quanti km vuoi percorrere?");
var age = prompt("Quanti anni hai?");
//imposto il prezzo del biglietto
var price = (km * 0.21);
console.log(price);

//imposto lo sconto per passeggero minorenne
var discountUnderAge = (price * 20) / 100;
console.log(discountUnderAge);
//imposto lo sconto per passeggero anziano
var discountOldAge = (price * 40) / 100;
console.log(discountOldAge);



if (age < 18) {
    console.log(price - discountUnderAge);
    document.writeln(price - discountUnderAge);
} else if (age > 65) {
    console.log(price - discountUnderAge);
    document.writeln(price - discountOldAge);
} else {
    document.writeln(price);
}
