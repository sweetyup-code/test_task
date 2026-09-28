const modal = document.getElementById('modal');
const openBtn = document.querySelector('.open_modal_btn');

openBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

// Закрытие по клику на затемнённый фон
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
});

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
});

const closeBtn = document.querySelector('.modal_close');

closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
});