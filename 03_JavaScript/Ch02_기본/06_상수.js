// 상수 (constant)
const a = 'Hello';
console.log(a);

//a += ' World';      // 상수에 더할 수 없으므로 에러(runtime error)가 발생

const obj = {x: 1, y: 2};
//obj = {x:1, y:3};     //obj 자체를 바꾸는 것은 에러

obj.x = 10;
console.log(obj.x, obj.y); //obj 내의 항목을 바꾸는 것은 에러 나오지 않음 (obj가 참조형 변수라서 가능)