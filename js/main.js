document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active__bur');
    document.querySelector('.nav__row').classList.toggle('open__bur');
});

let html = document.querySelector('html');
document.querySelector('.burger').onclick = function() {
    html.classList.toggle('unscroll');
};

const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
}