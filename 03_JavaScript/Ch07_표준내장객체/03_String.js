// String 객체

let hello = '안녕하세요';

console.log(hello.length); // 길이 속성

// 메소드
console.log(hello[1], hello.charAt(1)) // 2번째 문자 반환하는 메소드
console.log(hello, ' 여러분!', hello.concat(' 여러분!')); // 문자열 추가
console.log(hello.indexOf('하')); // 앞에서부터 세어서 '하'가 나타나는 위치 찾기
console.log('pineapple'.lastIndexOf('p')); //뒤에서부터 세어서 'p'가 나타나는 위치 찾기

// 문자열을 분리하여 배열을 반환
let fruits = '사과, 배, 감, 포도';
let fruitsArray = fruits.split(','); // ',' 를 기준으로 분할
console.log(fruitsArray);



/*********************문자열 일부분*********************/
const today = new Date().toISOString(); // 현재 시간(2024-01-08T시:분:초)을 반환
console.log(today);

// 위 today에서 날짜만 추출하기 
console.log(today.substring(0, 10)); // 11번째 문자 "전" 까지의 문자열 반환 (1번재에서 10번째까지)
console.log(today.substring(0, today.indexOf('T'))); // T가 나오기 전까지 반환
console.log(today.split('T')[0]); // T를 기준으로 분할하고 첫 번째 T 앞에 나오는 문자열을 반환

// 만약 substring의 두 번째 인수를 생략하면 시작지점에서 문자열 끝까지 반환

// today에서 시간 추출
console.log(today.substring(11, 19)) // 12번째에서 19번째까지 문자열 반환
console.log(today.substring(today.indexOf('T')+1, today.indexOf('.'))) // T의 뒤부터 .이 나오기 전까지



// 현재 위치의 시간 구하기
console.log(new Date().toLocaleString()); // YYYY. M. D. 등으로 출력

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
// 1. 한 자리 숫자는 앞에 0을 붙여주기
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num); 
}
// 2. Date의 형식을 맞춰주기
function myDateTime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} `+
            `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}

console.log(myDateTime());



// 공백 제거
let space = '   Hello   ';
console.log(space.trim(), ':',  space.trimStart(), ':', space.trimEnd());
// trim은 모든 공백 제거, trimStart는 공백 제외 문자열 앞의 공백 제거, trimEnd는 공백 제외 문자열 뒤의 공백 제거



// method chain - 여러 개의 메소드 연결
console.log(space.trim().toUpperCase()); // 공백을 제거하고 대문자로 변경


// 문자열 변환
const sample = 'A quic brown fox jumps over the lazy dog.';
console.log(sample.replace('A', 'a')); // 가장 앞에 나오는 A만 변환
console.log(sample.replace('o', 'O')); // 가장 앞에 나오는 o만 변환

// 정규 표현식 이용
console.log(sample.replace(/o/g, 'O')); // 모든 o 변환, /o/ 뒤의 g는 모든 o에 대해 적용하라는 의미


const str = 'A quick brown fox - 3 - the lazy dog = 5 = 게으른 개';

// 영문자와 공백을 제외한 모든 문자를 지우는 정규식
let eng = str.replace(/[^A-Z a-z]/g, '');
console.log(eng);

// 한글과 공백을 제외한 모든 문자를 지우는 정규식
let kor = str.replace(/[^ㄱ-ㅎ ㅏ-ㅣ가-힣]/g, '') 
console.log(kor);

// 숫자만 남기는 정규식
let num = str.replace(/[^0-9]/g, '');
console.log(num);

// -, = 만 남기는 정규식
let spe = str.replace(/[^-=]/g, '');
console.log(spe);





// 문자열 찾기
console.log(hello.indexOf('안녕'));     // 결과값이 0 이상이면 찾는 문자열이 있다는 의미
let search = '안녕'

if (hello.indexOf('안녕') >= 0)
    console.log(`찾고싶은 단어: ${search}이 문장 안에 있습니다`);
else
    console.log(`찾고싶은 단어: ${search}이 문장 안에 없습니다`);