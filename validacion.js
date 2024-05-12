function validarFormulario() {
    // Capturar los elementos del formulario
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var telefono = document.getElementById('telefono');
    var consulta = document.getElementById('consulta');
    var motivo = document.querySelectorAll('input[name="motivo"]');
    var pago = document.getElementById('pago');
    var adjuntar = document.getElementById('adjuntar');

    // Variable para controlar si hay errores
    var hayErrores = false;

    // Validar el campo Nombre
    if (nombre.value.trim() === '') {
        mostrarError(nombre, 'Por favor, introduce tu nombre');
        hayErrores = true;
    }

    // Validar el campo Correo electrónico
    if (email.value.trim() === '') {
        mostrarError(email, 'Por favor, introduce tu correo electrónico');
        hayErrores = true;
    } else if (!validarEmail(email.value.trim())) {
        mostrarError(email, 'Por favor, introduce un correo electrónico válido');
        hayErrores = true;
    }

    // Validar el campo Teléfono
    if (telefono.value.trim() === '') {
        mostrarError(telefono, 'Por favor, introduce tu teléfono');
        hayErrores = true;
    }

    // Validar el campo Consulta
    if (consulta.value.trim() === '') {
        mostrarError(consulta, 'Por favor, escribe tu consulta');
        hayErrores = true;
    }

    // Validar el campo Motivo de contacto
    var motivoSeleccionado = false;
    motivo.forEach(function (checkbox) {
        if (checkbox.checked) {
            motivoSeleccionado = true;
        }
    });
    if (!motivoSeleccionado) {
        mostrarError(document.getElementById('pedido'), 'Por favor, selecciona al menos un motivo');
        hayErrores = true;
    }

    // Validar el campo Método de pago
    if (pago.value === '') {
        mostrarError(pago, 'Por favor, selecciona un método de pago');
        hayErrores = true;
    }

    // Validar el campo Adjuntar imagen (solo si se ha seleccionado un archivo)
    if (adjuntar.value !== '') {
        var extension = adjuntar.value.split('.').pop().toLowerCase();
        if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
            mostrarError(adjuntar, 'El archivo debe ser una imagen (JPG, JPEG o PNG)');
            hayErrores = true;
        }
    }

    // Si hay errores, detener el envío del formulario
    if (hayErrores) {
        return false;
    }

    // Si no hay errores, el formulario se puede enviar
    return true;
}

// Función para mostrar mensajes de error
function mostrarError(elemento, mensaje) {
    // Crear un elemento para mostrar el mensaje de error
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = mensaje;

    // Insertar el mensaje de error después del elemento proporcionado
    elemento.parentNode.insertBefore(errorDiv, elemento.nextSibling);
}

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    // Expresión regular para validar el correo electrónico
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
