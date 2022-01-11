import Header from "./page/header.js";
import Homepage from "./page/home.js";
import Loginpage from "./page/login.js";
import Joinpage from "./page/join.js";
import Writepage from "./page/write.js";
import secretboard from "./page/secretboad.js";
import infoboard from "./page/infoboard.js";
import promboard from "./page/promboard.js";
import swboard from "./page/swboard.js";

function showMenu(){
    const sidemenu = document.querySelector('.subMenu');
    sidemenu.classList.toggle('showing');
}

function Login(){
    history.pushState({page : 'login page'}, '', '/login');

    const main = document.querySelector('.main');
    Loginpage(main);

    document.querySelector('.join').addEventListener("click",Join);
}

function prev(){
    window.history.back();
}

function Join(){
    history.pushState({page : 'join page'}, '', '/join');

    const main = document.querySelector('.main');
    Joinpage(main);

    document.querySelector('.exit').addEventListener("click",prev);
}

function Home(){
    history.replaceState(location.origin,'',location.origin)

    const main = document.querySelector('.main');
    Homepage(main);

    document.querySelector('.assign').addEventListener("click",Assign);
}

function Assign(){
    history.pushState({page : 'write page'}, '', '/assignment');

    const main = document.querySelector('.main');
    Writepage(main);
}

function reload(){

    switch (location.pathname) {
        case '/': Home(); break
        case '/login': Login(); break;
        case '/assignment' : Assign(); break;
        case '/join':
            Login();
            Join();
            break;
        case './assignment+create' :
            // const body = '';
            // request.on('data',function(data){
            //     body = body + data;
            // });
            // request.on('end',function(){
            //     const post = qs.parse(body);
            // })

        default:
            break;
    }

}


function init(){
    const root = document.querySelector('#root');
    Header(root);

    const menu = document.querySelector('.menu');
    menu.innerText = '≡';
    menu.addEventListener("click", showMenu);

    window.addEventListener('popstate', function () {
        // console.log('popstate', history.state);
        // console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
        reload();
    });

    reload();

    document.querySelector('.login').addEventListener("click", Login);
    document.querySelector('.home').addEventListener("click", Home);
}

init();