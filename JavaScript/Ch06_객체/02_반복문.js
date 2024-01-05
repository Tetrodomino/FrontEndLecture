// 객체에 대한 반복문

let maria = {name: '마리아', age: 25, job: '학생'};

let name = '제임스', age = 27, job = '프로그래머';
let james = {name:name, age:age, job:job}; // 이런 방식으로도 가능

console.log(maria, james);


for (let key in james) {
    console.log(key, ':', james[key]);
}

// ES-6(ECMA script - 6 : 2015년에 제정된 표준)
// 'key'와 'value를 가리키는 변수'의 이름이 동일하면 변수명 생략 가능
let james2 = {name, age, job};


// JSON(JavaScript Object Notation)
// - 외부와 데이터를 주고받을 때 사용
// - 업계 표준
let externalForm = JSON.stringify(james); // JSON 방식으로 저장
console.log(externalForm);

let person = JSON.parse(externalForm); // 다시 object 방식으로 저장
console.log(person);

console.log(person.name == james.name && person.age == james.age && person.job == james.job);
// person과 james의 속성값은 각각 같으므로 true 출력 


// Object로 구성된 배열도 가능
let personArray = [james, maria];
console.log(personArray);