// 함수 형태

// 1. 매개변수(인수)와 반환값이 있는 함수
function sum(from, to) { // 매개변수 있음
    let result = 0;
    for (let i = from; i <= to; i++)
    {
        result += i;
    }
    return result; // 반환값 있음
}

console.log(sum(50, 500));


// 2. 매개변수 없이 반환값만 있는 함수 (producer)
function dice() {
    return Math.ceil(Math.random() * 6);    // 반환값만 존재
}

console.log(dice(), dice(), dice(), dice(), dice())



// 3. 매개변수만 있고 반환값이 없는 함수 (consumer)
function print(a) {     //매개변수만 존재
    console.log(a);
}

print('반환값이 없는 함수');



// 4. 매개변수도 없고 반환값도 없는 함수
var globalVar = 0;

function increment() {
    globalVar++;
}

increment();
print(globalVar);



// 매개변수(인수)
// 매개변수값을 입력하지 않고 호출하는 경우
function printFruit(name, count) {
    console.log(`${name} 과일이 ${count}개 있습니다`);
}

printdFruit('사과', 10) // 정상 출력
printFruit('귤')        // 오류 발생

function printFruit1(name, count) {
    if (typeof count == undefined) // count매개변수가 없을 때 실행
        count = 0;
    console.log(`${name} 과일이 ${count}개 있습니다`);
}

function printFruit2(name, count) {
    count = count ? count : 0; // 3항연산자로 count 변수가 없을 때 지정
    console.log(`${name} 과일이 ${count}개 있습니다`);
}

function printFruit3(name, count = 0) { //default 값 지정, count를 입력하지 않으면 default 값이 대신 입력
    console.log(`${name} 과일이 ${count}개 있습니다`)
}