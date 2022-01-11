import Header from "./page/header.js";
import Homepage from "./page/home.js";
import Loginpage from "./page/login.js";
import Writepage from "./page/write.js";

function showMenu(){
    const sidemenu = document.querySelector('.subMenu');
    sidemenu.classList.toggle('showing');
}

function Login(){
    history.pushState({page : 'login page'}, '', '/login')
    const login = document.querySelector('.loginPage');
    Loginpage(login);

    document.querySelector('.join').addEventListener("click",Join);

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

    const write = document.querySelector('.assignment');
    Writepage(write);

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
    const root = document.querySelector('#root');
    Header(root);

    const main = document.querySelector('.main');
    Homepage(main);

    const menu = document.querySelector('.menu');
    menu.innerText = '≡';
    menu.addEventListener("click", showMenu);

    document.querySelector('.login').addEventListener("click", Login);
    document.querySelector('.home').addEventListener("click", Home);
    document.querySelector('.assign').addEventListener("click",Assign);

    window.addEventListener('popstate', function () {
        // console.log('popstate', history.state);
        console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
        reload();
    });

    reload();
}

init();