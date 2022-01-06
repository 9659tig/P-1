const menu = document.querySelector('.menu'),
sidemenu = document.querySelector('.subMenu');

menu.innerText = '≡';

function showMenu(){
    sidemenu.classList.toggle('showing');
}

function init(){
    menu.addEventListener("click", showMenu);
}

init();