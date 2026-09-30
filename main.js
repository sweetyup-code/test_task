// открытие/закрытие popup
const modal = document.getElementById('modal');
const openBtn = document.querySelector('.open_modal_btn');

openBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
});

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

//валидность данных формы
const form = document.querySelector('.modal_form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    const nameRegex = /^[А-Яа-яЁёA-Za-z\s-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.querySelectorAll('.error_message').forEach(error => {
        error.textContent = '';
    });

    if (name === '') {
        nameInput.nextElementSibling.textContent = 'Введите имя';
        return;
    }

    if (!nameRegex.test(name)) {
        nameInput.nextElementSibling.textContent = 'Введите корректное имя';
        return;
    }

    if (email === '') {
        emailInput.nextElementSibling.textContent = 'Введите e-mail';
        return;
    }

    if (!emailRegex.test(email)) {
        emailInput.nextElementSibling.textContent = 'Введите корректный e-mail';
        return;
    }
    //отправка формы
    try {
        const response = await fetch('index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        const data = await response.json();

        alert(data.message);

        if (data.success) {
            form.reset();
        }

    } catch (error) {
        alert('Ошибка отправки формы');
    }
});

//открытие и закрытие второго popup
const menuButton = document.getElementById('menu_button');
const loginButton = document.getElementById('login_button');
const upsModal = document.getElementById('ups_modal');

menuButton.addEventListener('click', () => {
    upsModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

loginButton.addEventListener('click', () => {
    upsModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

const upsCloseBtn = upsModal.querySelector('.modal_close');

upsCloseBtn.addEventListener('click', () => {
    upsModal.classList.remove('is-open');
    document.body.style.overflow = '';
});

upsModal.addEventListener('click', (e) => {
    if (e.target === upsModal) {
        upsModal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
});