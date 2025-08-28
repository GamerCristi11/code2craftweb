const navbarLinks = [
    { name: 'Home', url: '/' },
    { name: 'Posts', url: '/posts.html' },
    { name: 'Contact', url: '/contact.html' },
    //{ name: 'GuestBook', url: 'https://code2craft.atabook.org' }
];

const navbar = document.getElementById('navbar');

// Container for links
const linksContainer = document.createElement('div');
linksContainer.style.display = 'flex';
linksContainer.style.gap = '16px';
linksContainer.style.justifyContent = 'center';
linksContainer.style.flex = '1'; // take full width so links stay centered

// Add navbar links
navbarLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.name;
    a.style.textDecoration = 'none'; // no underline
    a.style.color = 'inherit';       // color handled by CSS
    linksContainer.appendChild(a);
});

navbar.appendChild(linksContainer);

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
