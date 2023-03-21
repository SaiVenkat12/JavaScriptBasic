//UC1- Generate Random Dice Value between 1 to 6
let dice=Math.floor(Math.random() * 6)+1;
//console.log("Dice Value:"+dice);

//UC2- Unit Conversion 
// inches to feet 
function InchesToFeet(inches)
{
    return inches/12;
}
//console.log("Converting 42 inches into ft : " +InchesToFeet(42)); 
// Rectangular Plot of 60 x 40 feet in meters
let ft1=60; let ft2=40;
let meters1=ft1 /3.28; 
let meters2=ft2 /3.28;
let product=meters1 * meters2; 
//console.log("Conversion feet into meter: " + product); 
// Calculate area of 25 such plots in acres
let area=25;
let result1=area / 43560;
//console.log("Result : " + result1);
//UC3 LeapYear or not
function LeapYear(year){
if(year % 400 == 0 || year % 4 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 100 == 0)
{
   console.log(year+" is Not a Leap year");
}
else
{
   console.log(year+" is Not a Leap year");
} 
}
//console.log(LeapYear(2014));
//UC4- Random Week Day
let day = Math.floor(Math.random()*7);
function WeekDay(day)
{
    
    switch(day)
    {
    case 0:
            console.log("Sunday");
            break;
    case 1:
            console.log("Monday");
            break;
    case 2:
            console.log("Tuesday");
            break;
    case 3:
            console.log("Wednesday");
            break;
    case 4:
            console.log("Thrusday");
            break;
    case 5:
            console.log("Friday");
            break;
    case 6:
            console.log(" Saturday");
            break;
    }
}
WeekDay(day);
function PowerOfTwo(num) {
        if (num < 2 || num > 32) {
            console.log("Invalid input");
        }
        else {
            let val = 1;
            let i=0;
            console.log("2 power of ",num);
            while (i < num) {
                val = val * 2;
                console.log(val);
                i++;
            }
            console.log("Result: "+val);
            
        }
    }
    PowerOfTwo(5);
