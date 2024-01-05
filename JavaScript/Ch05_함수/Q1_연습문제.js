// 배열에 대한 함수 만들어보기

// 1. 배열을 인수로 받아서, 합을 반환하는 함수
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }

    return sum;
}


// 2. 배열에서 최댓값을 찾아서 반환하는함수
function maxArray(arr) {
    let max = null;

    for (let i of arr)
    {
        max = (max == null) ? i : max;
        max = (max > i) ? max : i;
    }

    if (max == null)
        return '빈 배열입니다';

    return max;
}

// 3. 배열 평균값 구하기 
function avgArray(arr) {
    if (arr.legnth == 0)
        return '빈 배열입니다';

    let avg = 0;
    for (let i of arr)
    {
        avg += i;
    }

    avg /= arr.length;

    return avg;
}

// 4. 제곱의 합 구하기
function powArray(arr) {
    let sum = 0;

    for (let i of arr)
    {
        sum += Math.pow(i, 2);
    }

    return sum;
}

let sample = [43, 17, 25, 36, 98, 73];
//let sample = [-39, -12, 0, -60, -123];

console.log(`sample 배열의 합: ${sumArray(sample)}`);
console.log(`sample 배열의 최댓값: ${maxArray(sample)}`);
console.log(`sample 배열의 평균: ${avgArray(sample)}`);
console.log(`sample 배열의 제곱합: ${powArray(sample)}`);