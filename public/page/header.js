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
                    <li>자유 게시판</li>
                    <li>비밀 게시판</li>
                    <li>정보 게시판</li>
                    <li>홍보 게시판</li>
                    <li>sw 게시판</li>
                </ul>
            </div>
        </section>

        <div class="main"></div>
        <section class="loginPage"></section>
        <section class="assignment"></section>
        `;
}