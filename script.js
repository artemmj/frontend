window.addEventListener('load', () => {
    document.body.style.opacity = 1;
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.collapsible-code').forEach(pre => {
        const toggle = document.createElement('button');
        toggle.className = 'code-toggle';
        toggle.textContent = 'Свернуть';

        // Вставляем кнопку ПЕРЕД блоком <code>
        const codeBlock = pre.querySelector('code');
        pre.insertBefore(toggle, codeBlock);

        toggle.addEventListener('click', () => {
            pre.classList.toggle('collapsed');
            toggle.classList.toggle('collapsed');
        });
    });
});
