import Home from "/home.js";

const menu = document.querySelector('.menu'),
sidemenu = document.querySelector('.subMenu'),
login = document.querySelector('.login'),
board = document.querySelector('.board'),
pageindex = document.querySelector('.pageindex'),
loginpage = document.querySelector('.loginPage'),
home = document.querySelector('.home'),
join = document.querySelector('.join'),
realLogin = document.querySelector('.realLogin'),
write = document.querySelector('.write'),
assign = document.querySelector('.assign'),
assignment = document.querySelector('.assignment'),
root = document.querySelector('#root');

menu.innerText = '≡';

function showMenu(){
    sidemenu.classList.toggle('showing');
}

function Login(){
    history.pushState({page : 'login page'}, '', '/login')
    board.classList.add('showing');
    pageindex.classList.add('showing');
    loginpage.classList.remove('showing');
    assignment.classList.add('showing');
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
    assignment.classList.add('showing');
    history.replaceState(location.origin,'',location.origin)
}

function Assign(){
    history.pushState({page : 'write page'}, '', '/assignment')
    board.classList.add('showing');
    pageindex.classList.add('showing');
    loginpage.classList.add('showing');
    assignment.classList.remove('showing');
}

function reload(){
    switch (location.pathname) {
        case '/login': Login(); break;
        case '/assignment' : Assign(); break;
        case '/join':
            Login();
            Join();
            break;
        case './assignment+create' :
            var body = '';
            request.on('data',function(data){
                body = body + data;
            });
            request.on('end',function(){
                var post = qs.parse(body);
            })


        default:
            break;
    }

}


function init(){
    Home(root);

    menu.addEventListener("click", showMenu);
    login.addEventListener("click", Login);
    home.addEventListener("click", Home);
    assign.addEventListener("click",Assign);


    reload();
}

init();