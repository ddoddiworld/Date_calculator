function Book(title, auther, volume, price){
    this.title = title;
    this.auther = auther;
    this.volume = volume;
    this.price = price;
}

var html = new Book('웹 표준의 정석', 'Ko', '608', '28,000');
var youtube = new Book('유튜브 영상 만들기', 'Kim', '368', '16,000');
var python = new Book('점프 투 파이썬', 'Park', '352', '18,800');

var bookList = [html, youtube, python];



document.write("<h1>책 제목으로 살펴보기</h1>");

for(var i=0; i<bookList.length; i++){
    //i는 방 번호, bookList.length는 배열의 요소 개수
    document.write("<p>" +  bookList[i].title + "</p>")
    //bookList의 방 배열에서의 title을 <p>태그로 나타내라.
};

for(var i=0; i<bookList.length; i++){
    document.write("<p>" + bookList[i].price + "</p>")
};


