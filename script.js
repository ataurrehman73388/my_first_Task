// --- Dark/Light Mode Logic ---


function changeTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
}

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    changeTheme(savedTheme);

    document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.getAttribute('data-bs-theme-value');
            changeTheme(selectedTheme);
        });
    });
}

// --- Page Load hote hi saari functions chalao ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    // Agay jo bhi JS likhenge, usay yahan call karte rahenge
});
