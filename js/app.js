import { validarEmail, validarPassword } from "./validateForm.js";

const formPopup = document.querySelector('.form-popup');
const showPopupBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');
const loginSiginLink = document.querySelectorAll('.form-box .bottom-links a');
const menuBtn = document.querySelector('.navbar .menu-btn');
const navBarMEnu = document.querySelector('.navbar .links');
const closeMenuBtn = document.querySelector('.links .close-btn');

const formualrioLogin = document.querySelector('#formulario-login');
const email = formualrioLogin.querySelector('#email');
const password = formualrioLogin.querySelector('#password');

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
});

formualrioLogin.addEventListener('keyup', event => {
    const { target } = event;
    if (target.id === 'email') validarEmail(email);
    if (target.id === 'password') validarPassword(password);
});

formualrioLogin.addEventListener('submit', e => {
    e.preventDefault();

    validarEmail(email);
    validarPassword(password);
});