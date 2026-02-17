/* theme.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Create the button element using JavaScript
    const btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.innerText = '🌙 Dark Mode'; 
    document.body.appendChild(btn); // Adds button to the page automatically

    // 2. Check for saved preference
    const currentTheme = localStorage.getItem('theme');
    const body = document.body;

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        btn.innerText = '☀️ Light Mode';
    }

    // 3. Add Click Event
    btn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            btn.innerText = '🌙 Dark Mode';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            btn.innerText = '☀️ Light Mode';
        }
    });
});
