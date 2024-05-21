
const showPopupBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');


showPopupBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-popup');
});

closePopupBtn.addEventListener('click', () => showPopupBtn.click());