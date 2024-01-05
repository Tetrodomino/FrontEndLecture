// 만 나이 계산하기
let birthday = {year: 1990, month: 6, day: 20};

let d = new Date();
let current = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDay()};

let age = current.year - birthday.year;
if (current.month < birthday.month || current.day < birthday.day)
    age -= 1;

console.log(`현재 날짜 : ${current.year}-${current.month}-${current.day}`);
console.log(`생년월일 : ${birthday.year}-${birthday.month}-${birthday.day}`);
console.log(`만 나이 : ${age}`);