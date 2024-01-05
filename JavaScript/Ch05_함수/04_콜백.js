// Call Back 함수
// 함수의 파라메터로 함수를 넣기
// 자바스크립트(node.js)의 특수한 함수로 다른 언어에서는 잘 쓰지 않음

function callFiveTime(callback) { // callback에는 함수 넣기 가능
    for (let i = 0; i < 5; i++)
    {
        callback(); // 넣은 함수 실행
    }
}

// 익명 함수
// 함수를 호출할 때 익명 함수를 만들어 주는 것이 일반적
const cb = function() {
    console.log('함수가 호출되었습니다.');
}

callFiveTime(cb); // cb 함수가 5번 호출됨
// callFiveTime은 아래와 같이 실행한 것이 됨
callFiveTime(function() {
    console.log('함수가 호출되었습니다.');
});

// 익명 함수로는 화살표 함수를 사용하는 것이 더 보편적
callFiveTime(() => {
    console.log('함수가 호출되었습니다.');
});