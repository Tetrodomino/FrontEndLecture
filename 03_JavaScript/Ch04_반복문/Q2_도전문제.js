// 1. 완전수 (perfect number) : 진약수의 합이 자기 자신과 같은 수
// 10000 이하의 수 중에서 완전수 4개를 찾기

let perfectnumber = [];

for (let i = 3; i < 10000; i++)
{
    let sum = 0;

    for (let j = 1; j <= parseInt(i / 2); j++)
    {
        if (i % j == 0) // 나누어 떨어지면 약수이므로 합에 더하기
            sum += j;
    }

    if (sum == i) // 진약수의 합이 같으면 완전수이므로 추가
        perfectnumber.push(i);
}

console.log(perfectnumber);


// 2. a + b + c = 1000을 만족하는 피타고라스 수 (단, a < b < c)

let peter = [];

for (let a = 1; a <= 333; a++)
{
    for (let b = a; b <= 500; b++)
    {
        let c = 1000 - a - b;

        if (a * a + b * b == c * c && a + b + c == 1000 && c > b)
        {
            peter.push(a);
            peter.push(b);
            peter.push(c);
        }
    }
}

console.log(peter);