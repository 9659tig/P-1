export default function Join(joinPage) {
    joinPage.innerHTML = `
    <section class="loginPage">
        <div>
            <input type="text" placeholder="ID를 입력하세요.">
            <button class="exit">나가기</button>
            <button class="realLogin">회원가입</button>
        </div>
    </section>

    `;
}