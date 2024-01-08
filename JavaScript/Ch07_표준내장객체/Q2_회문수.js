// 두 개의 세 자리 수를 곱해서 가장 큰 회문수 구하기

let numArr = new Array();

for (let i = 100; i<= 999; i++)
{
    for (let k = 100; k <= 999; k++)
    {
        let num = i * k;
        let numArr2 = [];

        if (isPalindrome(String(num)))
        {
            numArr2.push(num);
            numArr2.push(i);
            numArr2.push(k);
            numArr.push(numArr2);
        } 
    }
}

function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
} 

numArr.sort((a, b) => a[0] + a[1] + a[2] - (b[0] + b[1] + b[2])); // 2차원 배열 정렬하는 법(오름차순)
//numArr.sort((a, b) => b[0] + b[1] + b[2] - (a[0] + a[1] + a[2]));
let max = numArr.pop();
console.log(`${max[1]} × ${max[2]} = ${max[0]}`);