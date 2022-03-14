var now = new Date();
//오늘 날짜 정보
var firstDay = new Date(prompt("사귄날 알려줘봐"))
// var firstDay = new Date("2017-01-05");
//new Date("2017-01-05T02:00:00z") 시간까지 적용 가능
//처음 만난 날짜의 정보

var toNow = now.getTime();
//날짜를 밀리초로 변경
var toFirst = firstDay.getTime();
//처음 만날 날을 밀리초로 변경
var passedIime = toNow - toFirst;
//=var passedIime = now.getTime() - firstDat.getTime()

var passedDay = Math.round(passedIime/(1000 * 60 * 60 * 24));
//1일 = 24시간 * 60분 * 60초 * 1000밀리초

document.getElementById("date").innerText = passedDay + "일";



function calcDate(days){
    var future = toFirst + days * (1000 * 60 * 60 * 24);

    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate();
    
    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
    // document.getElementById("date" days).innerText = year + "년 " + month + "월 " + date + "일";
}

// calcDate(100);
// calcDate(200);
// calcDate(365);
// calcDate(500);
// calcDate(700);
// calcDate(900);
// calcDate(1000);


var list = [100,200,365,500,700,900,1000,3000,5000,7000,9000];
for(var i = 0; i <= list.length-1; i++){
    calcDate(list[i]);
}
