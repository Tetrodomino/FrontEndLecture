function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num); 
}

function myDateTime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} `+
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}

function disp(num) {
    $('<img></img>')
        .attr('src', `../Ch13_문서객체모델/img/${num}.svg`)
        .attr('width', 100)
        .attr('class', 'second')
        .css('margin', '5px')
        .appendTo($('body'));
}

function colon() {
    $('<img></img>')
        .attr('src', `../Ch13_문서객체모델/img/Colon.jpg`)
        .attr('width', 100)
        .attr('class', 'second')
        .css('margin', '5px')
        .appendTo($('body'));
}

function hide() {
    $('.second').remove(); // 위에서 만든 second class가 달린 태그 삭제
}

$(document).ready(() => {
    $('<h2></h2>')
        .attr('id', 'date')
        .appendTo('body');
    
    $('<br></br>')
        .appendTo('body');    

    setInterval(function() {
        const now = new Date();
        const week = '일월화수목금토'.split('');

        let dateStr = myDateTime(now).substring(0, 10);
        dateStr += '(' + week[now.getDay()] + ')'
        const timeStr = myDateTime(now).substring(11);
        $('#date').text(dateStr);

        hide();

        disp(timeStr[0]);
        disp(timeStr[1]);
        colon();
        disp(timeStr[3]);
        disp(timeStr[4]);
        colon();
        disp(timeStr[6]);
        disp(timeStr[7]);
        
    }, 1000);
})