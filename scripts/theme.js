

// Add theme switch button (right side)
const themeButton = document.createElement('button');
themeButton.id = 'theme-button';
themeButton.textContent = '🌙';
themeButton.style.cursor = 'pointer';
themeButton.style.padding = '5px 10px';
navbar.appendChild(themeButton);

// Theme toggle
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
        themeButton.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = '🌙';
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeButton.textContent = '☀️';
} else {
    themeButton.textContent = '🌙';
}
