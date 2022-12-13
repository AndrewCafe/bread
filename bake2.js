/*
This programs takes the user's system time as the start time. It takes user input
to determine the desired end time. 

Since the bread machine displays 1 hour 30 minutes when starting immediately, following calculations were done:
-The 1 hour is disregarded since the machine starts with 1 hour on the display and only runs for 1 hour.
-The 30 minutes is added to the result when the the total timer is greater than 1 hour and 30 minutes.
*/

//Getting Current Date/Time From System
//Used to create a time object
var start = new Date();
start.setSeconds(0); //set seconds to 0 for simplicity sake
var end = new Date(start.getTime()); 

//For Testing Purposes, manually sets time
start.setHours(16);
start.setMinutes(46);

/*
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
*/
//For Testing Purposes
let endH = 21;
let endM = 0;

//Amount of minutes that are listed on machine timers
let workTimeM = 30;

//console.info('Current Time:  ' + end);
console.info('Start Time:  ' + start);

//Calculate Timer

//Sets the time of endTime to match the user's input
end.setHours(endH);
end.setMinutes(endM);
console.info('End Time:  ' + end);

let testTimeDiff = end -start;
console.info('Time Difference (standard time): ' + testTimeDiff);

//Finds difference of time in milliseconds
let msTime = end -start;
console.info('Modded Time Difference (including extra): ' + msTime);

//Converts time difference into hours and minutes
let actualSeconds = msTime/1000;

//Finding actual time, without the timer's 30 minutes
let actualMinutes = (actualSeconds/60);
let actualHours = (actualMinutes/60);

//Generates Modified Time Amount that Factors in 30 minutes of Timer (workTimeM)
let modMinutes = (actualSeconds/60) + workTimeM;
//Uses modified minutes
let timerHours = parseInt(modMinutes/60);
let timerMinutes = modMinutes % 60;


//Testing
console.info('actual hours: ' + actualHours);
console.info("timer hours: " + timerHours);
console.info("timer minutes: " + timerMinutes);


//If actual hours is less than 1, no time to bake
if ((actualHours < 1)){
  console.info('Not enough time to make dough.')
}

//If timer is less than 1.5 hours but more than 1 hour, set timer for 1 hour 30 (the minimum clock)
else if (timerHours == 1 && timerMinutes < 30){
console.info('Set Timer For: '+ timerHours +' Hours' +' and 30 Minutes');
}

//Otherwise, show modified timer that factors in the 30 minutes of the minimum clock
else {
  console.info('Set Timer For: '+ timerHours +' Hours' +' and ' + timerMinutes + ' Minutes');
} 


