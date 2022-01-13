export default function test(date,text,author) {
    let context = `
    <section class="board">
    <div class="top">
        <div>자유게시판</div>
        <div class="assign">등록하기</div>
    </div>

    <div class="boardlist">
        <ul class="textul">
            <li class="text"><a href="#a"><p class="date">${date}</p><div class="text">${text}</div><p class="name">${author}</p></a></li>
        </ul>
    </div>
</section>

<footer class="pageindex">
    <ul>
        <li><a href="#a">1</a></li>
        <li><a href="#a">2</a></li>
        <li><a href="#a">3</a></li>
        <li><a href="#a">4</a></li>
        <li><a href="#a">5</a></li>
        <li><a href="#a">6</a></li>
        <li><a href="#a">7</a></li>
        <li><a href="#a">8</a></li>
        <li><a href="#a">9</a></li>
    </ul>
</footer>
    `
    board.innerHTML = context;
}
