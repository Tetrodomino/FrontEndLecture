// continue : for 문에서 한 번만 루프를 넘기기

// 1 ~ 10 홀수의 합 구하기
let sum = 0;
for (let i = 1; i <= 10; i += 2)
{
    sum += i;
}
console.log(sum);

sum = 0;
for (let i = 0; i <= 10; i++)
{
    if (i % 2 == 0)
        continue;
    sum += i;
}
console.log(sum);