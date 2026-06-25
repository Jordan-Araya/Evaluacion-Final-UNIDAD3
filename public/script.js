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

    const valorNombre = nombre.value.trim();
    const valorEmail = email.value.trim();
    const valorAsunto = asunto.value.trim();
    const valorMensaje = mensaje.value.trim();

    function mostrarError(inputElemento, texto) {
        hayErrores = true;

        inputElemento.classList.add('input-error');

        const span = document.createElement('span');
        span.textContent = texto;
        span.className = 'error-texto';

        inputElemento.parentNode.appendChild(span);
    }

    if(valorNombre == '') mostrarError(nombre, 'Este campo no puede estar vacio');
    if(valorEmail == '') mostrarError(email, 'Este campo no puede estar vacio');
    if(valorAsunto == '') mostrarError(asunto, 'Este campo no puede estar vacio');
    if(valorMensaje == '') mostrarError(mensaje, 'Este campo no puede estar vacio');

    if(valorEmail !== '') {
        if(valorEmail.includes('@') == false || valorEmail.includes('.') == false) {
            mostrarError(email, 'Formato invalido, falta @ y el .');
        }
    }

    if(valorAsunto !== '' && valorNombre !== ''){
        if(valorAsunto == valorNombre.toLowerCase()) {
            mostrarError(asunto, 'El asunto no puede ser igual al nombre');
        }
    }

    if(valorMensaje !== '') {
        if(valorMensaje < 18) {
            mostrarError(mensaje, 'Minimo 18 caracteres');
        }
    }

    if(valorAsunto !== ''){
        if(valorAsunto.toLowerCase().includes('prueba')) {
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