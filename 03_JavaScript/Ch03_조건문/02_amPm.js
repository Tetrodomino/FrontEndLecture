let today = new Date(); // 현재 시각을 알 수 있는 함수
console.log(today);
let hour = today.getHours(); // 표준시 형태로 변환하여 현재 몇 시인지 반환(24시간 기준)
console.log(hour);
console.log(today.getMonth()); // 현재의 월을 구함. 1월은 0으로 반환하고 12월은 11로 반환

// if만 사용
if (hour < 12)
    console.log(`오전 ${hour} 시입니다.`);
if (hour >= 12)
    console.log(`오후 ${hour - 12} 시입니다.`);

// if-else 사용
if (hour < 12)
    console.log(`오전 ${hour} 시입니다.`);
else if (hour == 12)
    console.log(`오후 ${hour} 시입니다.`);
else
    console.log(`오후 ${hour - 12} 시입니다.`);