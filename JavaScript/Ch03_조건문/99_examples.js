//알람 문제

let hour = Math.ceil(Math.random() * 24) - 1;
let minute = Math.ceil(Math.random() * 60) - 1;

console.log(`${hour} : ${minute}`);

minute -= 45;

if (minute < 0)
{
    minute += 60;
    hour -= 1; 
}

if (hour < 0)
    hour += 24;

console.log(`${hour} : ${minute}`);