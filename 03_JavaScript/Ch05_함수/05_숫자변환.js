// 숫자 변환 내장(built-in) 함수

const a = '123.65', b = '0xff', c = '23';

// a, b, c 를 숫자 값으로 변경하는 함수 Number()
console.log(Number(a), Number(b), Number(c)); // 123.65, 255, 23

// 정수 - integer, 실수 - floating point
// 정수의 숫자값으로 변경(소숫점 버림)하는 parseInt, 실수 숫자값으로 변경하는 parseFlaot
console.log(parseInt(a), parseFloat(a));
console.log(parseInt(b), parseFloat(b), parseFloat(c)); // 255, 0, 23 - parseFloat는 16진수 값을 읽지 못함


// parseInt와 Number의 비교
console.log(parseInt('1401호'), Number('1401호')); // 1401, NaN - Number는 문자열 부분이 섞일 경우 못 읽음

// parseInt의 읽는 범위
console.log(parseInt('1,400원'), parseInt('503동 1401호')); // 1, 503
// , 가 들어가거나 숫자가 나뉘어 있으면 처음 나오는 것만 읽음

