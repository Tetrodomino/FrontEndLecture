// 중첩 반복문
// 1. 별 다섯 개를 다섯 줄 그리기

for (let i = 0; i < 5; i++)
{
    let star = '';
    for (let k = 0; k < 5; k++)
    {
        star += (k + i) % 2 == 0 ? '★' : '☆';
    }
    console.log(star);
}

// 다이아몬드 그리기
// 1사분면
for (let i = 0; i < 5; i++)
{
    let star = '';
    for (let k = 0; k < i + 1; k++)
    {
        star += (k + i) % 2 == 0 ? '★' : '☆';
    }
    console.log(star);
}

// 4사분면(우하)
for (let i = 0; i < 5; i++)
{
    let star = '';
    for (let k = 0; k < 5 - i; k++)
    {
        star += (k + i) % 2 == 0 ? '★' : '☆';
    }
    console.log(star);
}

// 2사분면(좌상)
for (let i = 0; i < 5; i++)
{
    let star = '';
    for (let k = 0; k < 5; k++)
    {
        if (i + k < 4)
            star += '　';
        else
            star += (k + i) % 2 == 0 ? '★' : '☆';
    }
    console.log(star);
}

// 3사분면
for (let i = 0; i < 5; i++)
{
    let star = '';
    for (let k = 0; k < 5; k++)
    {
        if (i - k > 0)
            star += '　';
        else
            star += (k + i) % 2 == 0 ? '★' : '☆';
    }
    console.log(star);
}

// 다이아몬드 만들기
for (let i = 0; i < 7; i++)
{
    let star = '';
    let n = 3 - i;
    n = n < 0 ? n * -1 : n;
    for (let k = 0; k < 7; k++)
    {
        let p = 3 - k;
        p = p < 0 ? p * -1 : p;
        if (n + p <= 3)
            star += (k + i) % 2 == 0 ? '★' : '☆';
        else
            star += '　';
    }
    console.log(star);
}