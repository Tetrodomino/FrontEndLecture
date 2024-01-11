// 홀수 짝수
let num = Math.ceil(Math.random() * 100); // Math.random()은 0 ~ 1 까지의 랜덤한 값 반환
                                         // Math.ceil() 은 괄호 안의 값을 소숫점 단위에서 올림 처리

if (num % 2 == 0) // 2로 나눈 나머지가 0
{
    console.log(`${num}은/는 짝수입니다.`);
}
else
{
    console.log(`${num}은/는 홀수입니다.`);
}

num = Math.ceil(Math.random() * 100);

// if나 else 안의 실행문이 하나뿐이면 { } 생략 가능
if (num % 2 == 0)
    console.log(`${num}은/는 짝수입니다.`);
else
    console.log(`${num}은/는 홀수입니다.`);

num = Math.ceil(Math.random() * 100);

// 3항 연산자 '?'
//    변수 = (조건) ? 참일 때의 값 : 거짓일 때의 값    으로 작성
let result = (num % 2 == 0) ? '짝수' : '홀수';
console.log(`${num}은/는 ${result}입니다.`);