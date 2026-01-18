// bijli bill
let prompt = require('prompt-sync')();

let unit = Number(prompt("enter unit"))
let amount = 0;

if(unit>0 && unit<=100){

console.log(unit*4.2);

}
else if (unit >100 && unit<=200){
 console.log((100*4.2) + (unit-100)*6);
 
}
else if (unit>200 && unit<=400){
    console.log((100*4.2) + (100*6) + (200*8) + (unit-200)*8);
    
}
else(unit>=400){
      
}