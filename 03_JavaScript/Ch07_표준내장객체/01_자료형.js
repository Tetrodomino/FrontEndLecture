// 기본 자료형 - primitive type
let number = 273.15;
let string = 'Hello';
let boolean = true;
console.log(typeof(number), typeof(string), typeof(boolean));

// 객체 자료형 - 기본 자료형을 객체로 만든 것, Wrapper class
let numObj = new Number(273.15);
let strObj = new String('Hello');
let boolObj = new Boolean(true);
console.log(typeof(numObj), typeof(strObj), typeof(boolObj)); // 셋 모두 Object
console.log(number == numObj, number === numObj); // 왼쪽은 값만 비교, 오른쪽은 타입까지 비교