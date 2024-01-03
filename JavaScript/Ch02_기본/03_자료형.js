// 자바스크립트의 자료형
// 1. Number
console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2); // 5 / 2도 정상적으로 소숫점 출력 (정수형 실수형 구분 없음)
console.log(5 % 2); // 나머지(modulo)

console.log(5 / 3); //소숫점 약 15자리 정도까지 출력

console.log(5 / 0); // 0으로 나눌 경우 infinity가 뜸

console.log( 2 ** 10); // 2의 10제곱 2^10 

console.log(1.3e-8); // 1.3 * 10^(-8)

// 2. 문자열(string)
console.log('He said i love you');
console.log("i'll be back"); // '' 도 "" 도 사용 가능
console.log("he said \"I love you\""); //"" 안에 ""을 문자열로 출력하고 싶으면 \ 사용
console.log("\\"); //그냥 \을 출력하고 싶으면 \\ 사용

let hello = '안녕하세요?';
console.log(hello[0], hello[2], hello[5]); // hello 문자열의 0번째, 2번째, 5번째 출력 (안 하 ?)

// template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '은', 2 + 3, '입니다'); // 2 더하기 3 은 5 입니다 (기본 방식)

console.log(`${a} 더하기 ${b}은 ${a+b}입니다`); // ``(template literal)을 사용한 표기 방식
// , 을 쓸 필요 없이 더 편하게 표기 가능

// ${ } 안에 다양한 것을 넣어 편하게 표기 가능. 변수 뿐만이 아닌 함수도 가능

console.log(`올해는 ${new Date().getFullYear()}년입니다`); //현재 연도 출력시키기

/*
    full year의 표기
    fullYear : camel case 방식. javascript에서 사용     → Getter method     → getFullYear
    full_Year : snake case 방식. python에서 사용
*/

// 3. 논리형(bollean)
console.log(typeof(true), typeof(false)); //boolean이 출력
console.log(2 == 2.0, 5 >= 4, !('가나다' > '마바사')); //셋 모두 true
// ==, >=, > 등을 관계 연산자라고 함

let x = 10;
console.log(x < 3 || x > 8 ); // ||은 논리 연산자라고 하며 &&(and)와 ||(or) 등이 존재
console.log(x < 12 && x > 8); // && = and
console.log(true > 2) //true를 그냥 변수처럼 쓰면 1로 판정 (false 는 0)