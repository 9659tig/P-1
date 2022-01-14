export default function Homepage(board,title,list) {
    let context = `
    <section class="board">
        <div class="top">
            <div>${title}</div>
            <div class="assign">등록하기</div>
        </div>

        <div class="boardlist">${list}</div>
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