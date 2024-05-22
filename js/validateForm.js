//validar correor 
export const validarEmail = email => {
    const exprecionEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!exprecionEmail.test(email.value)) return email.classList.add('invalid');
    email.classList.replace('invalid', 'correact');
}

//validar crear contraseña
export const validarPassword = password => {
    const exprecionPaassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!exprecionPaassword.test(password.value)) return password.classList.add('invalid');
    password.classList.replace('invalid', 'correact');
};
