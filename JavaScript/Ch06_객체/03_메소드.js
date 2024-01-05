// 사물을 속성: 속성값 으로 객체화
// method : 객체 안에서 사용되는 함수

let obj = {
    // 속성 (attribute) : 앞서 했던 object의 각 항목
    name: '사과',
    price: 1000,

    // 메소드 (method)
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원`) // obj 본인을 참조할 때는 this를 사용
    }
}

// 메소드 사용
obj.print(); //print 메소드가 사용됨