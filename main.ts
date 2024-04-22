function MakeChcikenFriedRice(freidchicken:number,vegetbale:number,rice:number){
    const chickenPortion :number = freidchicken 
    const veggiePortion :number=vegetbale 
    const ricePortion:number= rice 
    // combine all ingredients 
    const ingredients =[chickenPortion,veggiePortion,ricePortion].filter(Boolean).join(',')
const sesaoning :string= 'add seasoning and sauces as desired'
const cook:string= 'cook every thing together untill well combined'

return `to make chicken fried rice ,you will need:${ingredients}.${sesaoning} ${cook}`


}
console.log(MakeChcikenFriedRice(120,250,150))