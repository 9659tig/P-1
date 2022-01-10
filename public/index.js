import Homepage from "./page/home.js";

function showMenu(){
    const sidemenu = document.querySelector('.subMenu');
    sidemenu.classList.toggle('showing');
}

function Login(){
    history.pushState({page : 'login page'}, '', '/login')
    document.querySelector('.board').classList.add('showing');
    document.querySelector('.pageindex').classList.add('showing');
    document.querySelector('.assignment').classList.add('showing');
    document.querySelector('.loginPage').classList.remove('showing');
}

function Join(){
    const join = document.querySelector('.join');
    const realLogin = document.querySelector('.realLogin');

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
    document.querySelector('.board').classList.remove('showing');
    document.querySelector('.pageindex').classList.remove('showing');
    document.querySelector('.assignment').classList.add('showing');
    document.querySelector('.loginPage').classList.add('showing');

    history.replaceState(location.origin,'',location.origin)
}

function Assign(){
    history.pushState({page : 'write page'}, '', '/assignment')

    document.querySelector('.board').classList.add('showing');
    document.querySelector('.pageindex').classList.add('showing');
    document.querySelector('.assignment').classList.remove('showing');
    document.querySelector('.loginPage').classList.add('showing');
}

function reload(){
    switch (location.pathname) {
        case '/login': Login(); break;
        case '/assignment' : Assign(); break;
        case '/join':
            Login();
            Join();
            break;
        // case './assignment+create' :
        //     const body = '';
        //     request.on('data',function(data){
        //         body = body + data;
        //     });
        //     request.on('end',function(){
        //         const post = qs.parse(body);
        //     })


        default:
            break;
    }

}


function init(){
    const write = document.querySelector('.write');
    const assignment = document.querySelector('.assignment');
    const root = document.querySelector('#root');

    Homepage(root);

    const menu = document.querySelector('.menu');
    const login = document.querySelector('.login');
    const home = document.querySelector('.home');
    const assign = document.querySelector('.assign');
    const join = document.querySelector('.join');

    menu.innerText = '≡';

    menu.addEventListener("click", showMenu);
    login.addEventListener("click", Login);
    home.addEventListener("click", Home);
    assign.addEventListener("click",Assign);
    join.addEventListener("click",Join);


    reload();
}

init();