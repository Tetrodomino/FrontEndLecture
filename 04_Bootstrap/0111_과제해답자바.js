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

function ans1_r () {
    document.getElementById('num1').value = null;
    document.getElementById('num2').value = null;
    document.getElementById('result1').innerHTML = '결과창';
}

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

function ans2_r1 () {
    document.getElementById('search').value = null;
    document.getElementById('result2').innerHTML = '결과창';
}

function ans2_r2 () {
    sentence = document.getElementById('sentence').value = null;
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

function ans3_r() {
    let remove = '';
    document.getElementById('price').value = remove;
    document.getElementById('result3').innerHTML = '결과';
}

function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num); 
}
function myDateTime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} `+
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}

window.onload = function() {
    setInterval(function() {
        // 현재 시간 받기
        const now = new Date();
        const week = '일월화수목금토'.split('');
        
        let dateStr = myDateTime(now).substring(0, 10);
        dateStr += '(' + week[now.getDay()] + ')'
        const timeStr = myDateTime(now).substring(11);
        document.getElementById('date').innerHTML = dateStr;

        document.getElementById('h1').src = `img/${timeStr[0]}.svg`;
        document.getElementById('h2').src = `img/${timeStr[1]}.svg`;
        document.getElementById('m1').src = `img/${timeStr[3]}.svg`;
        document.getElementById('m2').src = `img/${timeStr[4]}.svg`;
        document.getElementById('s1').src = `img/${timeStr[6]}.svg`;
        document.getElementById('s2').src = `img/${timeStr[7]}.svg`;
    }, 1000)
}