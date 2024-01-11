// array에 대한 합의 제곱과 제곱의 합 차 구하기

function calArray(arr) {
    return addpowArray(arr) - powaddArray(arr);
}

function addpowArray(arr) {
    let sum = 0;
    for (let i of arr)
    {
        sum += i;
    }

    return Math.pow(sum, 2);
}

function powaddArray(arr) {
    let sum = 0;

    for (let i of arr)
    {
        sum += Math.pow(i, 2);
    }

    return sum;
}  

numArray = [24, 67, 45, 97, 43]

console.log(`합의 제곱 : ${addpowArray(numArray)}`);
console.log(`제곱의 합 : ${powaddArray(numArray)}`);
console.log(`둘의 차 : ${calArray(numArray)}`);