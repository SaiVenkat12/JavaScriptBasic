//UC1- Generate Random Dice Value between 1 to 6
let dice=Math.floor(Math.random() * 6)+1;
console.log("Dice Value:"+dice);

//UC2- Unit Conversion 
// inches to feet 
function InchesToFeet(inches)
{
    return inches/12;
}
console.log("Converting 42 inches into ft : " +InchesToFeet(42)); 
// Rectangular Plot of 60 x 40 feet in meters
let ft1=60; let ft2=40;
let meters1=ft1 /3.28; 
let meters2=ft2 /3.28;
let product=meters1 * meters2; 
console.log("Conversion feet into meter: " + product); 
// Calculate area of 25 such plots in acres
let area=25;
let result1=area / 43560;
console.log("Result : " + result1);