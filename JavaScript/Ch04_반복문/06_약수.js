// 임의 자연수의 약수 구하기

let num = 45123
let str = '1';
let divisors = [1];

for (let i = 2; i <= parseInt(num / 2); i++)
{
    if (num % i == 0)
    {
        str += ', ' + i;
        divisors.push(i);
    }
}

str += ', ' + num;
divisors.push(num);

console.log(str);
console.log(divisors);

// 두 수의 공약수 구하기
let num1 = 24; let num2 = 60;
let commondivisor = [];

for (let i = 1; i <= Math.min(num1, num2); i++)
{
    if (num1 % i == 0 && num2 % i == 0)
        commondivisor.push(i);
}

console.log(commondivisor);