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


// 다른 방법
let display = 0;
for (let hour = 0; hour < 24; hour++)
{
    for (let minute = 0; minute < 60; minute++)
    {
        let clock = hour + ':' + minute;
        if (clock.indexOf('3') >= 0)
            display += 60;
    }
}
console.log(`3이 표시되는 시간 2 : ${display}`);