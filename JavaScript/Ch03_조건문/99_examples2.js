let a1 = Math.ceil(Math.random() * 6);
let a2 = Math.ceil(Math.random() * 6);
let a3 = Math.ceil(Math.random() * 6);

let coin = 0;
let a = 0;

if (a1 == a2 && a2 == a3)
{
    coin = 10000 + 1000 * a1;
}
else if (a1 != a2 && a1 != a3 && a2 != a3)
{
    // 삼항연산자를 이용한 방식
    let a = a1 > a2 ? a1 : a2;
    a = a > a3 ? a : a3;
    
    // Math.max를 이용한 방식
    a = Math.max(a1, a2, a3);

    coin = a * 100;
}
else
{
    if (a1 == a2 || a1 == a3)
        a = a1
    else
        a = a3;

    coin = a * 100 + 1000;
}

console.log(`${a1}, ${a2}, ${a3} 눈이 나왔으므로 얻은 금액은 ${coin} 입니다`);
