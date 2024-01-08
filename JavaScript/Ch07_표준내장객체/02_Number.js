// Number 객체

let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential()); // 3.14e+00 식으로 표시
console.log(pi.toFixed(5)); // 소숫점 5자리까지 표시
console.log(pi.toPrecision(3)) // 유효 숫자를 3자리까지

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);