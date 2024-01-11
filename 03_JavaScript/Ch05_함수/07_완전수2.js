// 완전수 구하기

// 자기 자신을 제외한 약수의 합 구하는 함수
function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= parseInt(num / 2); i++ )
    {
        if (num % i == 0)
            sum += i;
    }

    return sum;
}


let perfectnum = [];

// 2에서부터 10000 사이의 완전수 구하기
for (let j = 2; j <= 10000; j++)
{
    if (sumOfDivisors(j) == j)
        perfectnum.push(j);
}

console.log(`2 ~ 10000까지의 완전수 : ${perfectnum}`);