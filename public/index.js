const menu = document.querySelector('.menu'),
sidemenu = document.querySelector('.subMenu'),
login = document.querySelector('.login'),
board = document.querySelector('.board'),
pageindex = document.querySelector('.pageindex'),
loginpage = document.querySelector('.loginPage'),
home = document.querySelector('.home'),
join = document.querySelector('.join'),
realLogin = document.querySelector('.realLogin');


menu.innerText = '≡';

function showMenu(){
    sidemenu.classList.toggle('showing');
}

function Login(){
    history.pushState({page : 'login page'}, '', '/login')
    board.classList.add('showing');
    pageindex.classList.add('showing');
    loginpage.classList.remove('showing');
}

function Join(){
    if(join.innerText === '회원가입'){
        history.pushState({page : 'join page'}, '', '/join')
        join.innerText='나가기';
        realLogin.innerText = "회원가입";
    }
    else {
        history.back();
        join.innerText='회원가입';
        realLogin.innerText = "로그인";
    }
}

function Home(){
    board.classList.remove('showing');
    pageindex.classList.remove('showing');
    loginpage.classList.add('showing');
    history.replaceState(location.origin,'',location.origin)
}

function reload(){
    switch (location.pathname) {
        case '/login': Login(); break;
        case '/join': Join(); break;

        default:
            break;
    }

}

function init(){
    menu.addEventListener("click", showMenu);
    login.addEventListener("click", Login);
    home.addEventListener("click", Home);
    reload();
}

init();