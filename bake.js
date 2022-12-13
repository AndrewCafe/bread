//Getting Current Date/Time From System
var start = new Date();
var end = new Date(); //used as a shell

//Remove Seconds
end.setSeconds(0);
start.setSeconds(0);

//For Testing Purposes
//start.setHours(10);
//start.setMinutes(0);

//Getting User Input On Time: prompts are returned as strings
let whichDay = prompt("Baking today?", "ie: yes or no");
let x = prompt("Which hour do you need the dough at?", "ie: 10:30AM = 10");
let y = prompt("Which minute?", "ie: 10:30AM = 30");

//converts the prompt from string to integer
let endH = parseInt(x);
let endM = parseInt(y);

if(whichDay == 'no'){
  end.setDate(end.getDate()+ 1); //sets date for tomorrow
}

//For Testing Purposes
//let endH= 11;
//let endM= 0;

/* Not in use with calculation
error in calculation, the 1 hour of work is cancelled by the early start time

//Calculating Work Time, ie: dough needs to spend 1 hour
let workH = 1;

//bakeTimeH includes actual mix time
let bakeTimeH = 1 + workH;
*/

//For time adjustment of minutes
let bakeTimeM = 30;

//console.info('Current Time:  ' + end);
console.info('Start Time:  ' + start);

//Calculate Timer

//Sets the time of endTime to match the user's input
end.setHours(endH);
end.setMinutes(endM);
console.info('End Time:  ' + end);

//Difference of end time and start time
end.setHours(end.getHours() - start.getHours());
console.info('Modified Hrs  ' + end);

end.setMinutes(end.getMinutes()- start.getMinutes() + bakeTimeM);
console.info('Modified Min ' + end);

//Getting variables
let timerH = end.getHours();
let timerM = end.getMinutes();

//For Testing Purposes
console.info('H: ' +timerH);
console.info('M: ' +timerM);

//If Else to deterine if there is enough time
//If less than 1 hour, not enough time
if ((timerH < 1)){
  console.info('Not enough time to make dough.')
}
else{
console.info('Set Timer For: '+ timerH +' Hours' +' and ' + timerM + ' Minutes');
}
