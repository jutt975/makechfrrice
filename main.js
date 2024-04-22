"use strict";
function MakeChcikenFriedRice(freidchicken, vegetbale, rice) {
    const chickenPortion = freidchicken;
    const veggiePortion = vegetbale;
    const ricePortion = rice;
    // combine all ingredients 
    const ingredients = [chickenPortion, veggiePortion, ricePortion].filter(Boolean).join(',');
    const sesaoning = 'add seasoning and sauces as desired';
    const cook = 'cook every thing together untill well combined';
    return `to make chicken fried rice ,you will need:${ingredients}.${sesaoning} ${cook}`;
}
console.log(MakeChcikenFriedRice(120, 250, 150));
