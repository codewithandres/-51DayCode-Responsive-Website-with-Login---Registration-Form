import {
    formPopup,
    showPopupBtn,
    closePopupBtn,
    email,
    password,
    loginSiginLink,
    menuBtn,
    navBarMEnu,
    closeMenuBtn,
    formualrioLogin
} from './variables.js'

import { validarEmail, validarPassword } from "./validateForm.js";

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