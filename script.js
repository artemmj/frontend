window.addEventListener('load', () => {
    document.body.style.opacity = 1;
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.scroll-top');

    // Показать/скрыть кнопку
    window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 400) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
    });

    // Плавный скролл
    scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    });
});
