
const formPopup = document.querySelector('.form-popup');
const showPopupBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');
const loginSiginLink = document.querySelectorAll('.form-box .bottom-links a');

showPopupBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-popup');
});

closePopupBtn.addEventListener('click', () => showPopupBtn.click());

[...loginSiginLink].map(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        formPopup.classList[link.id === 'login-link'
            ?
            'add'
            :
            'remove']('show-signup');
    });
});