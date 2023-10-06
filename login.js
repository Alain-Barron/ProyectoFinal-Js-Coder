document.addEventListener('DOMContentLoaded', function () {
    const mensajeError = document.querySelector('#mensaje-error');
    const mensajeErrorApellido = document.querySelector('#mensaje-error-apellido');
    const mensajeErrorEmail = document.querySelector('#mensaje-error-email');
    const mensajeErrorPassword = document.querySelector('#mensaje-error-password');
    const contenedorMiCuenta = document.querySelector("#mi-cuenta-id");
    let botonRegistrar = document.querySelector('#registrar');
    let formulario = document.querySelector('#login-container');

    // Se coloca esto para que en otras pestañas no salga un error, y nos aseguremos de que esta ejecutando este codigo cuando este solo en el login.
    if (window.location.pathname.includes("login")) {
        botonRegistrar.addEventListener('click', function () {
            let nombre = document.querySelector('#nombre-id').value;
            let apellido = document.querySelector('#apellido-id').value;
            let mail = document.querySelector('#email-id').value;
            let password1 = document.querySelector('#password-inicial-id').value;
            let password2 = document.querySelector('#password-final-id').value;

            function contieneNumeros(cadena) {
                return /\d/.test(cadena);
            }

            function noContieneArroba(cadena) {
                return !/@/.test(cadena);
            }

            let condicionesCumplidas = true;

            if (contieneNumeros(nombre)) {
                mensajeError.style.display = 'block';
                condicionesCumplidas = false;
            } else {
                mensajeError.style.display = 'none';
            }

            if (contieneNumeros(apellido)) {
                mensajeErrorApellido.style.display = 'block';
                condicionesCumplidas = false;
            } else {
                mensajeErrorApellido.style.display = 'none';
            }

            if (noContieneArroba(mail)) {
                mensajeErrorEmail.style.display = 'block';
                condicionesCumplidas = false;
            } else {
                mensajeErrorEmail.style.display = 'none';
            }

            if (password1.length >= 8 && password1 == password2) {
                mensajeErrorPassword.style.display = 'none';
            } else {
                mensajeErrorPassword.style.display = 'block';
                condicionesCumplidas = false;
            }


            if (condicionesCumplidas) {

                window.location.href = '../index.html';
                localStorage.setItem("nombre-key", JSON.stringify(nombre))

            }
        });
    }


});

