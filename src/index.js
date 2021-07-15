// import './sass/main.scss';
import './menu.json';

// 
import './js/Theme';
import './js/onTheme';

import menu from './menu.json';

import { classBody } from 'babel-types';

const menuBoard = document.querySelector('.js-menu');
menuBoard.innerHTML = menuTemplates(menu);