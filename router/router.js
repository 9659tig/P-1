import Header from "../public/page/header.js";
import Homepage from "../public/page/home.js";
import Loginpage from "../public/page/login.js";
import Joinpage from "../public/page/join.js";
import Writepage from "../public/page/write.js";

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
    // let text = "";
    // test(text);
    Homepage(main,"date","text","author");

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

        default:
            break;
    }

}


export default function init(){
    const root = document.querySelector('#root');
    Header(root);

    const menu = document.querySelector('.menu');
    menu.innerText = '≡';
    menu.addEventListener("click", showMenu);

    // window.addEventListener('popstate', function () {
    //     // console.log('popstate', history.state);
    //     // console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    //     reload();
    // });

    // window.onload=()=>{
    //     reload();
    // }

    // const textul = document.querySelector('.textul');
    // document.createElement('li');
    // document.createElement('p');
    // document.createElement('div');
    // document.createElement('p');
    reload();

    document.querySelector('.login').addEventListener("click", Login);
    document.querySelector('.home').addEventListener("click", Home);
}
// init();
async function route(){
    const root = document.querySelector('#root');
    Header(root);

    const menu = document.querySelector('.menu');
    menu.innerText = '≡';
    menu.addEventListener("click", showMenu);

    reload();

    document.querySelector('.login').addEventListener("click", Login);
    document.querySelector('.home').addEventListener("click", Home);
}