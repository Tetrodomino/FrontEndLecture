// 어떤 배열에서 최소값, 최대값 구하기

let numbers = [3, 56, 43, 25, 68, 19];

let max = -9999999;
let min = 9999999;

for (let i = 0; i < numbers.length; i++)
{
    max = max > numbers[i] ? max : numbers[i];
    min = min < numbers[i] ? min : numbers[i];
}

console.log(`최댓값 : ${max}, 최솟값 : ${min}`);