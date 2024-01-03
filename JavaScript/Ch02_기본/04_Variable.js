// 식별자 (identifier) : 변수를 나타내는 것
/* 
    식별자의 규칙 
    1. 영문, 숫자, $, _ 만 사용 가능

    2. 대소문자는 구분

    3. 식별자의 맨 앞에는 영문이나 _ 으로만 시작 가능

    4. 예약어(keyword, 미리 다른 함수나 명령어가 할당된 단어 ex-console) 사용 금지

    5. 어떤 변수인지 명확하게 밝히는 방식으로 사용 권장
    ex) a, b, c - 비권장
        personnel_number, password, character_name_default - 권장

    6. 변수, 상수, 함수명 등은 소문자로 시작 권장

    7. 클래스명은 대문자로 시작하는 것을 권장
*/

// 변수(Variable)
let pi = 3.1415926535;      // 현재는 let을 주로 씀
var radius = 10;            // 과거에는 var을 썼음
console.log(`둘레는 ${2 * pi * radius}, 면적은 ${pi * radius * radius} 입니다.` );

// 복합 대입 연산자
let a = 1, str = '';
a += 2;                 // += : 해당 값 더하기
str += 'A quick brown box';
str += 'jump over the lazy dog.';
console.log(a, str);

// 증감 연산자
let x = 0, y = 0;

console.log(x++, ++y);  //x++은 해당 문구가 실행된 다음 x에 1 더하기 (post-increment)
                        //++y는 실행되기 전에 y에 1 더하고 실행 (pre-increment)
                        //따라서 0 1 이 출력

console.log(x, y);      //이제 더했으니까 둘 다 1 1 나옴

console.log(x--, --y);  //post-decrement, pre-decrement, 1 0이 출력
console.log(x, y);      //0 0 출력

/*********************************************/

// 나머지 자료형
// 함수 (function)
console.log(typeof function() {}); // function이라 출력
console.log(typeof(() => {}));      // => : 화살표 함수, 람다 함수, 익명 함수 등으로 불림

// 객체 (object)
let obj = {x: 1, y: 2};
console.log(typeof obj); // object로 출력
console.log(obj.x, obj.y); // obj 안의 하위 항목을 출력
console.log(obj); //obj 전체가 출력 : {x: 1, y: 2}

// undefined 
let alpha; // 값을 주지 않고 변수만 선언하면 undefined 타입이 됨

console.log(typeof alpha, typeof beta); //alpha는 초기화하지 않은 값이고, beta는 선언하지 않았으므로
                                        //둘 다 undefined 로 나옴