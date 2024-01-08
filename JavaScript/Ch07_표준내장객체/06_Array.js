// Array 객체

// 1. 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 2. 배열 속성
console.log(cars.length); // 배열의 길이(항목 갯수)

// 3. 배열 메소드
// 3-1. concat() : 기존 배열에 추가로 항목 붙이기
let newFruits = fruits.concat('mango', 'orange'); // fruits에 mango랑 orange를 붙인 것을 newFruits에 대입
console.log(fruits); //fruits에는 붙지 않음
console.log(newFruits);

// 3-2. join() : ( ) 안의 인자를 각각의 항목 사이에 넣기
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다`); // Audi, Benz, BMW 로 출력



// * 를 붙인 건 자기 파괴적 메소드라는 의미, 즉 원본 배열에도 변경사항이 그대로 적용

// 3-3. pop()* : 맨 뒤의 것을 추출
console.log(cars.pop()); // 맨 뒤에 있는 BMW를 추출해서 출력
console.log(cars) // BMW가 빠진채로 출력

// 3-4. push()* : 맨 뒤에 새 항목 붙이기
cars.push('Volkswagen');
console.log(cars);

// 3-5. reverse()* : 배열 순서를 뒤집기
cars.reverse();
console.log(cars);

// 3-6. sort()* : 배열 정렬
let numbers = [1, 5, 6, 2, 3, 7, 4, 9, 8];

// 오름차순(기본값), 문자열의 경우 문자순으로 정렬
numbers.sort();
console.log(numbers);

// 내림차순
numbers.sort((a, b) => b - a); // 이것도 되고 이 아래의 것도 똑같은 의미
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers);

cars.sort(function(a, b) {
    if (a < b)
        return 1;
    else if (a > b)
        return -1;

    return 0;      // cars 역시 내림차순으로 정렬됨
})
console.log(cars);




let person = [
    {name: 'James', age: 27, job: "programmer"},
    {name: 'maria', age: 24, job:'student'},
    {name: 'nrian', age: 30, job:  'teacher'}
];

// 이름의 오름차순 정렬
person.sort((a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
    
})
console.log(person)

// 나이의 내림차순 정렬
person.sort((a, b) => b.age - a.age);
console.log(person);

// 3-7. slice
console.log(fruits.slice(0, 2));
console.log(fruits)



// 4. 응용
// 4-1 문자열 뒤집기
let str = 'Hello Javascript';
console.log(str.split('').reverse().join('')); // 문자열을 하나하나 나누고, 뒤집은 다음 다시 문자열로

// 4-2. 어떤 문자열이 회문인가
function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr; //뒤집은 문자열이 같으면 회문이므로 true
} 

console.log(isPalindrome('우영영영영영우')); 