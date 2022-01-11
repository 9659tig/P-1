export default function Login(loginPage) {
    loginPage.innerHTML = `
        <div>
            <input type="text" placeholder="ID를 입력하세요.">
            <button class="join">회원가입</button>
            <button class="realLogin">로그인</button>
        </div>
    `;
}