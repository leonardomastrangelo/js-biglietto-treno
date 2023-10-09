// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// variables
let numberKm = parseInt(prompt("Quanti km devi percorrere ?"));
let age = parseInt(prompt("Quanti anni hai?"));
const priceKm = 0.21;
let clientPrice = priceKm * numberKm;

// check
if(isNaN(numberKm) || isNaN(age)){
    document.getElementById("final-price").innerHTML = "Devi inserire numeri !!";
    location.reload();
}

// total price
if(age < 18){
    document.getElementById("final-price").innerHTML = (clientPrice - (clientPrice * 0.2)).toFixed(2);
} else if(age > 65){
    document.getElementById("final-price").innerHTML = (clientPrice - (clientPrice * 0.4)).toFixed(2);
} else{
    document.getElementById("final-price").innerHTML = (clientPrice).toFixed(2);
}