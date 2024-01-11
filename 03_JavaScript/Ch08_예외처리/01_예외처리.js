// 에러가 발생하면 프로그램 실행이 중지가 됨

//error.error.error() //error가 정의되지 않았으므로 주석을 지우면 에러 발생

try { // try 안에 있는 것을 실행했을 때

    error.error.error() // 에러가 발생할 것 같으 코드를 작성

} catch (e) { // 발생하는 에러에 관한 정보를 출력
    console.log(e.name);
    console.log(e.message);
}

console.log('여기가 끝'); // try를 쓰면 실제로 중지되진 않아서 이것도 실행됨