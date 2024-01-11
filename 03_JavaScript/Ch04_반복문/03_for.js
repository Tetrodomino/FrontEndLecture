// for 반복문
// 1~100까지의 합 구하기
let sum = 0;
for( let i = 1; i < 101; i++)
{
    sum += i;
}
console.log(`${sum}`);

// 1 ~ 1000까지 홀수 합 구하기
let sum2 = 0;
for (let i = 1; i <= 1000; i += 2) // 반복문은 ++, -- 외에 이런 식으로 작성
{
    sum2 += i;
}
console.log(`${sum2}`);

// 1에서 10까지 곱 구하기
let sum3 = 1;
for (let i  = 1; i <= 10; i++)
{
    sum3 *= i;
}
console.log(`${sum3}`);

// array의 요소 출력
// element1, element2, ...
let fruits = ['사과', '감', '귤', '배'];
let fruitStr = '';
for (let fruit of fruits)
{
    fruitStr += fruit + ', ';
}

console.log(fruitStr);