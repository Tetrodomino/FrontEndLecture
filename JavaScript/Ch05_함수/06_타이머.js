// 타이머 내장 함수

// 일정 시간이 지난 후 실행
setTimeout(function() {
    console.log('3초 경과');
}
, 3000); // 시간 지정(ms 단위)


// 일정 텀을 두고 반복 실행
setInterval(function() {
    console.log(new Date()); //현재 시간을 나타내는 new Date()
}
, 1000); // 반복할 텀 지정 (cmd창에서 멈추고 싶으면 ctrl + c)



// 일정 시간이 지난 후 setInterval 정지시키기
const si = setInterval(function() {
    console.log(new Date()); //현재 시간을 나타내는 new Date()
}
, 1000);

setTimeout( () => {
    console.log('5초 경과 후 초시계 정지')
    clearInterval(si); // si를 정지시킴
}, 5000);