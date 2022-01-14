import {route} from '../router/router.js';

window.addEventListener('popstate',route);

window.onload = () => {
    route();
}
