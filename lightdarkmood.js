// Auto Theme based on PC preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme() {
    if (prefersDark.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

setTheme();

prefersDark.addEventListener('change', setTheme);