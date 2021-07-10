const { theme } = require('./theme');

let newArr = [];

const markupAdd = function betterCodeMsg() {
  const newMenuTitle = document.querySelectorAll('.card__name');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === Theme.DARK) {
    newMenuTitle.forEach((title, index) => {
      localStorage.setItem(`h2-backups-${index + 1}`, title.innerHTML);

      const prevTitle = localStorage.getItem(`h2-backups-${index + 1}`);
      newArr.push(prevTitle);

      title.innerHTML = ' Подскажите, как сделать код лучше? ';
      title.style.color = '#f1e919';

      return newArr;
    });
  }
};

module.exports = funqAdd;


//    

import { Theme } from './constants';
const funqAdd = require('./better-code.js');

const body = document.querySelector('body');
const toggle = document.querySelector('#theme-switch-toggle');
toggle.addEventListener('change', onToggleChange);

// установка темы при загрузке страницы

const actualUserTheme = localStorage.getItem('theme');

if (actualUserTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  toggle.checked = localStorage.getItem('chkbx-active');
  funqAdd();
} else {
  body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

// переключение темы через чекбокс
function onToggleChange() {
  const actualUserTheme = localStorage.getItem('theme');
  let chkbxValue = toggle.checked;

  if (actualUserTheme === Theme.LIGHT) {
    localStorage.setItem('chkbx-active', chkbxValue);
    localStorage.removeItem(actualUserTheme);
    localStorage.setItem('theme', Theme.DARK);

    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    // console.log(localStorage.getItem('theme'));
  } else {
    localStorage.setItem('chkbx-active', chkbxValue);
    localStorage.removeItem(actualUserTheme);
    localStorage.setItem('theme', Theme.LIGHT);

    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    // console.log(localStorage.getItem('theme'));
  }
}