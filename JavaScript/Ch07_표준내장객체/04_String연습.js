// 연습문제
// 1. 1에서 1000 사이의 0은 몇 번, 1은 몇 번,  ..., 9는 몇 번 사용되는지 

let numStr = ''; // 숫자를 넣을 스트링
for (let i = 1; i <= 1000; i++)
{
    numStr += i;
}
console.log(numStr.length);
console.log(numStr.replace(/[^0]/g, '').length);
console.log(numStr.replace(/[^1]/g, '').length);
console.log(numStr.replace(/[^2]/g, '').length);
console.log(numStr.replace(/[^3]/g, '').length);
console.log(numStr.replace(/[^4]/g, '').length);
console.log(numStr.replace(/[^5]/g, '').length);
console.log(numStr.replace(/[^6]/g, '').length);
console.log(numStr.replace(/[^7]/g, '').length);
console.log(numStr.replace(/[^8]/g, '').length);
console.log(numStr.replace(/[^9]/g, '').length);


for (let k = 0; k <= 9; k++)
{
    let pattern = new RegExp('[^' + k + ']', 'g'); // 정규식에 변수 넣는 방법
    count = numStr.replace(pattern, '').length; // 만들어진 정규식을 넣어서 사용 가능
    console.log(`${k}: ${count}`);
}