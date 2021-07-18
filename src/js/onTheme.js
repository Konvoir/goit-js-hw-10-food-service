const changeTheme = document.querySelector('#theme-switch-toggle');
changeTheme.addEventListener('click', toggleTheme);


function setTheme(newThemeName) {
    localStorage.setItem('theme', newThemeName);
    document.body.className = newThemeName;
};

function toggleTheme() {
    if (localStorage.getItem('theme') === 'light-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
};


(function () {
    if (localStorage.getItem('theme') === 'light-theme') {
        setTheme('light-theme');
        document.getElementById('theme-switch-toggle').checked = false;
    } else {
        setTheme('dark-theme');
      document.getElementById('theme-switch-toggle').checked = true;
    }
})();  
