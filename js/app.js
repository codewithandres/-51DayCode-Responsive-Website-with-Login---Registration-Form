
const formPopup = document.querySelector('.form-popup');
const showPopupBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');
const loginSiginLink = document.querySelectorAll('.form-box .bottom-links a');
const menuBtn = document.querySelector('.navbar .menu-btn');
const navBarMEnu = document.querySelector('.navbar .links');
const closeMenuBtn = document.querySelector('.links .close-btn');

showPopupBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-popup');
});

closeMenuBtn.addEventListener('click', () => menuBtn.click());

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

menuBtn.addEventListener('click', () => {
    navBarMEnu.classList.toggle('show-menu')
})