// import './sass/main.scss';
import './menu.json';

//
// import './js/Theme';
import './js/onTheme';
import menuTemplates from './templates/menu.hbs';

import menu from './menu.json';

import { classBody } from 'babel-types';

const menuBoard = document.querySelector('.js-menu');
menuBoard.innerHTML = menuTemplates(menu);