const formulario = document.getElementById("formularioRegistro");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    let hayErrores = false;
    
    const erroresViejos = document.querySelectorAll('.error-texto');
    for (let i = 0; i < erroresViejos.length; i++) {
        erroresViejos[i].remove();
    }

    const inputs = [nombre, email, asunto, mensaje];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('input-error', 'input-activo');
    }

    function mostrarError(inputElemento, texto) {
        hayErrores = true;

        inputElemento.classList.add('input-error');

        const span = document.createElement('span');
        span.textContent = texto;
        span.className = 'error-texto';

        inputElemento.parentNode.appendChild(span);
    }

    if(nombre.value.trim() != '') mostrarError(nombre, 'Este campo no puede estar vacio');
    if(email.value.trim() != '') mostrarError(email, 'Este campo no puede estar vacio');
    if(asunto.value.trim() != '') mostrarError(asunto, 'Este campo no puede estar vacio');
    if(mensaje.value.trim() != '') mostrarError(mensaje, 'Este campo no puede estar vacio');

    if(email.value.trim() != '') {
        if(email.value.includes('@') == false || email.value.includes('.') == false) {
            mostrarError(email, 'Formato invalido, falta @ y el .');
        }
    }

    if(asunto.value.trim() != '' && nombre.value.trim() != ''){
        if(asunto.value.toLowerCase() == nombre.value.toLowerCase()) {
            mostrarError(asunto, 'El asunto no puede ser igual al nombre');
        }
    }

    if(mensaje.value.trim() != '') {
        if(mensaje.value.length < 18) {
            mostrarError(mensaje, 'Minimo 18 caracteres');
        }
    }

    if(asunto.value.trim() != ''){
        if(asunto.value.toLowerCase().includes('prueba')) {
            mostrarError(asunto, 'No puedes usar o mencionar la palabra prueba');
        }
    }

    if(hayErrores == false) {
        formulario.submit();
    }
});

email.addEventListener('input', function() {
    email.classList.remove('input-error');
    email.classList.add('input-activo');
});

mensaje.addEventListener('keyup', function() {
    console.log('Caracteres redactados: ' + mensaje.value.length);
});