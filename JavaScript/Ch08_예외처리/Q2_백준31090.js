// N + 1의 년도가 N의 끝 두 자리로 나누어 떨어지는 경우 찾기

function isDivisible(year) {
    let year2 = year + 1;
    let year_nn = year % 100;

    if (year2 % year_nn == 0)
        return true;

    return false;
}

for (let i = 2023; i <= 2040; i++)
{
    if (isDivisible(i))
        console.log('Good');
    else
        console.log('bye');
}

