import {route} from '../router/router.js';
import "core-js/stable";
import "regenerator-runtime/runtime";

window.addEventListener('popstate',route);

window.onload = () => {
    route();
}
