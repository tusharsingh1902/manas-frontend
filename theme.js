/* theme.js - The "Smart Injector" */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Create the Button Programmatically
    const btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.className = 'theme-switch-btn'; // We'll style this class
    btn.innerHTML = '🌙'; // Icon only to save space
    btn.title = "Toggle Dark Mode"; // Tooltip

    // 2. Find the best place to put it
    // We look for a Navbar, a Header, or just the Body
    const navbar = document.querySelector('nav ul') || document.querySelector('nav') || document.querySelector('header');

    if (navbar) {
        // If we found a navbar, add it as a list item (li) or direct child
        if (navbar.tagName === 'UL') {
            const li = document.createElement('li');
            li.appendChild(btn);
            navbar.appendChild(li);
        } else {
            navbar.appendChild(btn);
        }
    } else {
        // Fallback: If no navbar, put it at the very top-right (Static, not floating)
        btn.style.position = 'absolute';
        btn.style.top = '10px';
        btn.style.right = '10px';
        document.body.prepend(btn);
    }

    // 3. Logic (Same as before)
    const currentTheme = localStorage.getItem('theme');
    const body = document.body;

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        btn.innerHTML = '☀️';
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Stop it from acting like a link
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            btn.innerHTML = '🌙';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            btn.innerHTML = '☀️';
        }
    });
});
