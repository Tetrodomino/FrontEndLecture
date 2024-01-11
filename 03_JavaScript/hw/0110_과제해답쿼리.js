// jQuery로 바꾸기

$(document).ready(() => {
    $('<h3></h3>').text('2의 거듭제곱 배열 생성').appendTo('body');
    $('<input></input>')
        .attr({type: 'text', placeholder: '1 ~ 20 사이의 정수', id: 'num1'})
        .appendTo('body');
    $('<input></input>')
        .attr({type: 'text', placeholder: '10 ~ 30 사이의 정수', id: 'num2'})
        .appendTo('body');
    $('<button></button>')
        .text('생성')
        .attr('id', 'ans1')
        .appendTo('body');
    $('<br></br>')
        .appendTo('body');
    $('<hr></hr>')
        .appendTo('body');
    $('<div></div>')
        .attr('id', 'result1')
        .appendTo('body');
    $('<br></br>')
        .appendTo('body');

    $('<h3></h3>').text('특정 단어의 수 세기').appendTo('body');
    $('<textarea></textarea>')
        .attr({id: 'sentence', cols: 80, rows: 8})
        .appendTo('body');
    $('<br></br>')
        .appendTo('body');
    $('<input></input>')
        .attr({type: 'text', placeholder: '찾을 단어', id: 'search'})
        .appendTo('body');
    $('<button></button>')
        .text('확인')
        .attr('id', 'ans2')
        .appendTo('body');
    $('<br></br>')
        .appendTo('body');
    $('<hr></hr>')
        .appendTo('body');
    $('<div></div>')
        .attr('id', 'result2')
        .appendTo('body');
    $('<br></br>')
        .appendTo('body');

    $('<h3></h3>').text('내림차순 정렬').appendTo('body');
    $('<input></input>')
        .attr({type: 'text', placeholder: '가격을 ; 로 분리해서 입력', id: 'price'})
        .css('width', '500px')
        .appendTo('body');
    $('<button></button>')
        .text('확인')
        .attr('id', 'ans3')
        .appendTo('body');
    $('<br></br>')
        .appendTo('body');
    $('<hr></hr>')
        .appendTo('body');
    $('<div></div>')
        .attr('id', 'result3')
        .appendTo('body');
    $('<br></br>')
        .appendTo('body');

    $('#ans1').click(function(e) {
        let num1 = Number($('#num1').val());
        let num2 = Number($('#num2').val());
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

        $('#result1').html(resultStr);
    });

    $('#ans2').click(function(e) {
        let sentence = $('#sentence').val();
        let search = $('#search').val();
    
        // 특수기호 제거, 소문자로 변경
        let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();
    
        let words = noPunct.split(' ');
        let count = 0;
        for (let word of words) {
            if (word == search)
                count++;
        }
        $('#result2').html(`${search}의 수: ${count}`);
    });


    $('#ans3').click(function(e) {
        let price = $('#price').val();
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

        $('#result3').html(resultStr);
    });
})
