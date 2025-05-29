document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("kMv1VxnMgh40Jjbye"); // Reemplaza con tu Public Key de Email.js

    const formulario = document.getElementById("formulario");
    const btn = document.getElementById("btn-enviar"); // Asegúrate de tener un botón con este ID

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); // Evita el envío tradicional del formulario

        btn.value = 'Enviando...';

        const serviceID = 'lucianita13081'; // Reemplaza con tu Service ID de Email.js
        const templateID = 'template_1is0cja'; // Reemplaza con tu Template ID de Email.js

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar mensaje';
                alert('Mensaje enviado correctamente');
                formulario.reset();
            }, (err) => {
                btn.value = 'Enviar mensaje';
                alert("Error al enviar: " + JSON.stringify(err));
            });
    });

    // Validación de campos
    formulario.addEventListener("submit", function(evento) {
        let valido = true;

        document.querySelectorAll("input, textarea").forEach(campo => {
            if (campo.value.trim() === "") {
                campo.style.border = "2px solid red";
                showError(campo, "Completa este campo");
                valido = false;
            } else {
                campo.style.border = "";
                hideError(campo);
            }
        });

        if (!valido) {
            evento.preventDefault(); // Evita que el formulario se envíe si hay errores
        }
    });

    function showError(campo, mensaje) {
        let error = campo.nextElementSibling;
        if (!error || !error.classList.contains("mensaje-error")) {
            error = document.createElement("span");
            error.classList.add("mensaje-error");
            error.style.color = "red";
            error.style.fontSize = "12px";
            campo.parentNode.insertBefore(error, campo.nextSibling);
        }
        error.textContent = mensaje;
    }

    function hideError(campo) {
        let error = campo.nextElementSibling;
        if (error && error.classList.contains("mensaje-error")) {
            error.remove();
        }
    }
});

