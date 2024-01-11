function ans1() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || num2 < num1 + 4)
    {
        alert('입력값의 범위가 잘못되었습니다');
        return;
    }

    let powerArr = [];
    for (let i = num1; i <= num2; i++)
    {
        powerArr.push(2 ** i);
    }

    let resultStr = '';
    // for (let element of powerArr)
    // {
    //     resultStr += element + '<br>';
    // }
    for (let i = 1; i <= powerArr.length; i++)
    {
        if (i % 5 == 0)
            resultStr += powerArr[i - 1] + '<br>';
        else
        {    
            resultStr += powerArr[i - 1];
            if (i != powerArr.length)
                resultStr += ', ';
        }
    }
    document.getElementById('result1').innerHTML = resultStr;
}

/*
사용 문장
the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, 
whether from the inside or the outside, and devote myself instead to geography, 
history, arithmetic, and grammar. That is why, at the, age of six, I gave up 
what might have been a magnificent career as a painter. I had been disheartened by 
the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand
anything by themselves, and it is tiresome for children to be always and forever explaining 
things to the.
*/
function ans2() {
    let sentence = document.getElementById('sentence').value;
    let search = document.getElementById('search').value;

    // 특수기호 제거, 소문자로 변경
    let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();

    let words = noPunct.split(' ');
    let count = 0;
    for (let word of words) {
        if (word == search)
            count++;
    }
    document.getElementById('result2').innerHTML = `${search}의 수: ${count}`;
}


function ans3() {
    let price = document.getElementById('price').value;
    let priceArr = price.split(';');

    // 스트링 배열을 숫자 배열로 바꾸기 1
    let priceValArr = [];
    for (let i of priceArr)
    {
        priceValArr.push(Number(i));
    }

    // 스트링 배열을 숫자 배열로 바꾸기 2 (priceValArr과 newPrices는 같음)
    let newPrices = priceArr.map(x => Number(x));


    newPrices.sort((a, b) => b - a);
    let resultStr = '';
    for (let element of newPrices)
        resultStr += element + '<br>';
    document.getElementById('result3').innerHTML = resultStr;
}