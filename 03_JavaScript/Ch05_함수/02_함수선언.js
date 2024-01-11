// 선언적 함수

// a + b를 리턴하는 함수
function add(a, b) {    // 입력되는 a, b를 매개변수(parameter, argument)라고 함
    return a + b;       // 반환값
}

console.log(add(3, 4)); // 3 + 4인 7을 출력
console.log(add(8, 9));


// 익명(Annoymous) 함수 : 함수의 이름 부분이 없음
const annoymousSum = function (a, b) { // (a, b) 옆에 함수 이름이 없이 annoymousSum이 대체
    return a + b;
}

console.log(annoymousSum(3, 4)); // 위의 add 랑 동일 



// 화살표 함수, 람다 함수
const arrowSum = (a, b) => a + b; // =>을 통해 선언, ( ) 안에 매개변수, => 뒤에 반환값

console.log(arrowSum(3, 4)); // 역시 위랑 동일