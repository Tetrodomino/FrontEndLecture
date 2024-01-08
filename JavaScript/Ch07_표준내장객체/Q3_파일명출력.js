// 특정 경로 내에서 마지막 파일명만 출력시키기

let filename = 'C:Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js';

let filenameArr = filename.split('/');
console.log(`${filenameArr.pop()}`);