// 중첩 조건문 (nested if)

// 윤년 판별하기

let year = 2024;
let str = '';

// 중첩 조건문 사용
if (year % 4 == 0)
{
    if (year % 100 == 0)
    {
        if (year % 400 == 0)
            console.log(`${year}년은 윤년입니다.`);
        else
            console.log(`${year}년은 평년입니다.`);
    }
    else
    console.log(`${year}년은 윤년입니다.`);
}
else {
    console.log(`${year}년은 평년입니다.`);
}

// 사실 가장 편한 방법은 우선도가 높은 것 순서대로 쓰기 (400, 100, 4의 배수가 서로 부분집합 관계라 가능)
if (year % 400 == 0)
    str = '윤년';
else if (year % 100 == 0)
    str = '평년';
else if (year % 4  == 0 )
    str = '윤년';
else
    str = '평년';

console.log(`${year}년은 ${str}입니다.`);