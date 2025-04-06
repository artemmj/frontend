// Анимация при загрузке
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
});

// function applyTheme(isDark) {
//     document.body.classList.toggle('dark-theme', isDark);
//     const themeToggle = document.querySelector('.theme-toggle');
//     themeToggle.textContent = isDark ? '🌞 Светлая тема' : '🌓 Темная тема';
// }

// function toggleTheme() {
//     const isDark = !document.body.classList.contains('dark-theme');
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     applyTheme(isDark);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         applyTheme(savedTheme === 'dark');
//     } else {
//         const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//         applyTheme(systemDark);
//     }
//     document.body.style.opacity = 1;
// });
