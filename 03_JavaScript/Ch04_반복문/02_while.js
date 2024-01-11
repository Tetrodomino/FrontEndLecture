// while
let person = ['James', 27, '남', '프로그래머', 175.3];

let i = 0;

//while로 for랑 똑같이 반복시키기
while (i < person.length) {
    console.log(person[i]);
    i++;
}

let sum = 0;

// 주사위를 정해지지 않은 횟수로 던져 눈의 합이 21 이상이 되면 탈출
while ( sum <= 21)
{
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    sum += dice;
}
console.log(sum);