document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active__bur');
    document.querySelector('.nav__row').classList.toggle('open__bur');
});

let html = document.querySelector('html');
document.querySelector('.burger').onclick = function() {
    html.classList.toggle('unscroll');
};

const btnDarkMode = document.querySelector('.dark-mode-btn');
const main = document.querySelector('.main');
const dark = document.querySelector('.dark');


// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    main.classList.add('dark');
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    main.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    main.classList.remove('dark');
}

// 3. Если меняются системные настройки, меняем тему
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn--active');
        main.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active');
        main.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})

// Включение ночного режима по кнопке
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = main.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}