// 점수에 따른 학점
// 90 ~ 100 : A
// 80 ~ 89 : B
// 70 ~ 79 : C
// 60 ~ 69 : D
// ~ 59 : F

let score = Math.ceil(Math.random() * 60) + 40 //41 ~ 100 사이의 랜덤 정수 반환
let grade = '';

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`점수 : ${score}, 학점 : ${grade}`);

// Fizz Buzz 게임
// 5의 배수면 Fizz, 7의 배수면 Buzz, 5와 7의 공배수면 FizzBuzz, 아니면 숫자
let fb = '';

if (score % 5 == 0)
    fb += 'Fizz';
if (score % 7 == 0)
    fb += 'Buzz';

if (fb == '')
    console.log(`${score}`);
else
    console.log(`'${fb}'입니다.`);