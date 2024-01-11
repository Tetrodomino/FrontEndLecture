// 자료형 변환
// 강제 변환 (명시적인 형 변환)

console.log(123, String(123)); // 123은 number, String이 붙은 123은 string 타입이 됨

console.log(Number('101'), Number(true), Number(false)) //true는 1, false는 0으로 출력

// ※ 기본 cmd 창에서는 number는 금색, string은 흰색으로 색상 구분이 되어있음

console.log(Number('hello')); // 숫자로 변환시킬 수 없으므로 NaN(not a Number)가 출력
console.log(Number('a')); // 한 글자로 해도 아스키 코드에 따라 변환시켜주지 않음

// Boolean으로 형변환 했을 때 false가 나오는 경우
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN))

// 상기 6가지 경우를 제외한 모든 값은 Boolean으로 형변환시 true 반환

//───────────────────────────────────────────────────────────────//

// 자동 변환

/* + 연산자: boolean → number → string 순서로 전환됨 */
// ex)
console.log(123 + true); //true가 Number로 변환되고 124 가 출력

console.log('123' + true); //true가 string으로 변환되고 123true 가 출력

console.log('integer' + 123); //123이 string으로 변환되고 integer123 이 출력 

/* -, *, / 연산자: string → number 순서로 변환 */
// ex)
console.log(52 - '27', '8' * 8, '4' / 2); //문자열이 숫자로 변환

console.log(52 - 'a'); // 숫자로 변환시킬 수 없으므로 NaN

/* 두 개의 값이 같다는 기준 */
// 1. 변환된 값이 같으면 같다고 취급 (==)
console.log(52 == '52', 52 == 52.0); //둘 다 true
console.log(true == 1, false == 0.0 ); //둘 다 true

// 2. 변환된 값과 자료형이 일치하면 참. (===)
console.log(52 === '52', 52 === 52.0); //false, true
console.log(true === 1, false === 0.0 ); //false, false