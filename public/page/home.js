export default function Header(root) {

    root.innerHTML  =
        `<header>
    <div class="head">
        <button type="button" class="menu"></button>
        <h2 class="home">AJOU Memo</h2>
        <h2 class="login">Log in</h2>
    </div>
</header>
<section class="board">
    <div class="top">
        <div>자유게시판</div>
        <div class="assign">등록하기</div>
    </div>


    <div class="boardlist">
        <ul>
            <li><a href="#a"><p class="date">01/04</p><div>아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플</div><p class="name">익명</p></a></li>
            <li><a href="#a"><p class="date">01/04</p><div>아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플</div><p class="name">익명</p></a></li>
            <li><a href="#a"><p class="date">01/04</p><div>아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플</div><p class="name">익명</p></a></li>
            <li><a href="#a"><p class="date">01/04</p><div>아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플</div><p class="name">익명</p></a></li>
            <li><a href="#a"><p class="date">01/04</p><div>아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플</div><p class="name">익명</p></a></li>
            <li><a href="#a"><p class="date">01/04</p><div>아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플아주비기너샘플</div><p class="name">익명</p></a></li>
        </ul>
    </div>
</section>
<section class="subMenu showing">
    <div>
        <ul>
            <li>자유 게시판</li>
            <li>비밀 게시판</li>
            <li>정보 게시판</li>
            <li>홍보 게시판</li>
            <li>sw 게시판</li>
        </ul>
    </div>
</section>

<section class="loginPage showing">
    <div>
        <input type="text" placeholder="ID를 입력하세요.">
        <button class="join" onclick='Join()'>회원가입</button>
        <button class="realLogin">로그인</button>
    </div>
</section>

<section class="assignment showing">
    <form action="http://localhost:3000/assignment_create" method="post">
        <select name="boardlist" aria-placeholder="게시판을 선택하세요">
            <option value="">게시판을 선택해주세요</option>
            <option value="free">자유게시판</option>
            <option value="secret">비밀게시판</option>
            <option value="info">정보게시판</option>
            <option value="pro">홍보게시판</option>
            <option value="sw">sw게시판</option>
        </select>
        <input type="text" placeholder="제목을 입력하세요">
        <textarea name="description" placeholder="내용"></textarea>
        <input type="submit" class="submit">
    </form>
    <span class="write">글쓰기</span>
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
</footer>;
        `;
}