// 디지털 시계
// 하루 동안 3이 표시되는 시간(초) 구하기

let hour = '';
let minute = '';

for (let k = 0; k < 24; k++ )
{
    hour += k + ' ';
}

for (let i = 0; i < 60; i++)
{
    minute += i + ' ';
}

let hourcount = hour.replace(/[^3]/g, '').length;
minute = minute.replace(/3{2}/g, '3');
let minutecount = minute.replace(/[^3]/g, '').length;

let count = hourcount * 60 * 60 + (24 - hourcount) * 60 * minutecount;

console.log(`3이 표시되는 시간(초): ${count}`);