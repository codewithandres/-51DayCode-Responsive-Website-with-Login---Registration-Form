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

export {
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
}