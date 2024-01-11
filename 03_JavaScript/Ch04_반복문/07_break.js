// break : 반복문을 탈출

// 주사위를 정해지지 않은 횟수로 던져 눈의 합이 21 이상이 되면 탈출

// break 미사용 버전
let sum = 0;
while ( sum <= 21)
{
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    sum += dice;
}
console.log(sum);

// break 사용 버전 (더 보편적임)
sum = 0;
while (1) {
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    sum += dice;

    if (sum > 21)
        break;
}
console.log(sum);


for (let i = 0; i < 5; i++)
{
    for (let k = 0; k < 5; k++)
    {
        if (k == 2)
            break; // k 를 사용한 for 문만 벗어남
    }
    console.log('point A');
}
console.log('point B');