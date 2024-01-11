// 배열(Array) : 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형

// 여러 타입의 항목을 넣은 배열 생성
let person = ['James', 27, '남', '프로그래머', 175.3];

console.log(person); // 배열 내의 항목 그대로 출력 : ['James', 27, '남', '프로그래머', 175.3]
console.log(typeof person); // object가 출력됨 - array는 object의 한 형태
console.log(person.length); // 배열의 길이(개수)를 출력하는 속성
console.log(person[0], person[1], person[person.length-1]); // 마지막 항목을 출력하려면 [.length - 1]로도 가능

// 같은 항목을 object랑 array로 선언하기
// object = {0: val1, 1: val2, 2: val3, ...}
// array = [val1, val2, val3 ...]

/***************************************************/

// 배열을 효율적으로 사용하려면 반복문 사용
// while 반복문 - 반복 횟수가 정해지지 않은 반복문
// for 반복문 - 반복 횟수가 정해진 반복문

for (let i = 0; i < person.length; i++) //for (시작값, 조건문, 반복시 변화시킬 값)
{
    console.log(person[person.length - i - 1]);
}

// Enhanced for-loop
console.log('Enhanced for-loop');
for (let item of person) //person 내의 항목을 순서대로 반복
{
    console.log(item);
}