// 배열(Array)과 객체(Object)

// 배열은 객체의 특수한 형태
let fruitArray = ['감', '귤', '밤', '배'];
console.log(typeof fruitArray);

let fruitObject = {0: '감', 1: '귤', 2: '밤', 3: '배'}; // 항목이 달려있는 배열
console.log(fruitArray[0], fruitObject[1]);



// 객체 (Object) - 자료구조로서 객체는 파이썬의 딕셔너리, 자바의 map과 유사
let personArray = ['James', 27, '남', '프로그래머', 175.3]; // 그냥 배열

// 각 항목에 대해 정의함으로서 객체 성향을 추가
// name, age 등을 key라 하는데 key는 문자열로 적어도 무방
let personInfo = {name: 'James', age: 27, gender: '남', job: '프로그래머', height: 175.3};
let car = {manufacturer: '현대', model: 'casper', color: '카키'};

console.log(personInfo);
console.log(car);


// 객체에 대한 접근
console.log(personInfo['name']); 
console.log(personInfo.name);
// 둘 다 name key의 값을 반환하지만 아래쪽 방식이 더 보편적

let key = 'job';
console.log(personInfo[key]); // 이런 방식으로도 접근 가능