export default function Header(root) {
    root.innerHTML  =
        `<header>
            <div class="head">
                <button type="button" class="menu"></button>
                <h2 class="home">AJOU Memo</h2>
                <h2 class="login">Log in</h2>
            </div>
        </header>

        <section class="subMenu showing">
            <div>
                <ul>
                    <li class="free">자유 게시판</li>
                    <li class="secret">비밀 게시판</li>
                    <li class="info">정보 게시판</li>
                    <li class="prom">홍보 게시판</li>
                    <li class="sw">sw 게시판</li>
                </ul>
            </div>
        </section>

        <div class="main"></div>
        `;
}