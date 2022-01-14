import Header from "./page/header.js";
import Homepage from "./page/home.js";
import Loginpage from "./page/login.js";
import Joinpage from "./page/join.js";
import Writepage from "./page/write.js";
// import test from "../router/router.js";
// const Header = require("./page/header.js");
// const Homepage = require("./page/home.js");
// const Loginpage = require("./page/login.js");
// const Joinpage = require("./page/join.js");
// const Writepage = require("./page/write.js");

// function temp(){
//     const ul = document.querySelector('textul');
//     let li = document.createElement('li');
//     let when = document.createElement('p');
//     let what = document.createElement('div');
//     let who = document.createElement('p');

//     test(when,what,who);
//     // when.innerText = date;
//     // what.innerText = text;
//     // who.innerText = author;
//     li.appendChild(when);
//     li.appendChild(what);
//     li.appendChild(who);
//     ul.appendChild(li);
// }


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

function load(){
    const root = document.querySelector('#root');
    Header(root);

    const menu = document.querySelector('.menu');
    menu.innerText = '≡';
    menu.addEventListener("click", showMenu);

    reload();

    document.querySelector('.login').addEventListener("click", Login);
    document.querySelector('.home').addEventListener("click", Home);
}

function init(){
    window.addEventListener('popstate',route);
    console.log("test");

    window.onload = () => {
        const root = document.querySelector('#root');
        root.innerText="Hello";
        load();
    }
    // const root = document.querySelector('#root');
    // Header(root);

    // const menu = document.querySelector('.menu');
    // menu.innerText = '≡';
    // menu.addEventListener("click", showMenu);

    // document.querySelector('.login').addEventListener("click", Login);
    // document.querySelector('.home').addEventListener("click", Home);
}

init();