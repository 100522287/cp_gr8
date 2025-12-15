
// Función para validar el formulario de registro
function validarRegistro() {
    // 1. DETECTAR IDIOMA
    const lang = localStorage.getItem('idioma') || 'es';

    // Diccionario de mensajes de error/éxito
    const mensajes = {
        es: {
            vacios: "Por favor, rellena todos los campos obligatorios.",
            email: "El correo electrónico no es válido. Debe ser formato 'usuario@dominio.com'.",
            passRequisitos: "La contraseña debe tener:\n- Mínimo 8 caracteres\n- Al menos una mayúscula\n- Al menos un número\n- Al menos un carácter especial (ej: @, #, $, .)",
            passNoCoincide: "Las contraseñas no coinciden.",
            usuarioExiste: "El nombre de usuario '{usuario}' ya existe. Por favor elige otro.",
            exito: "¡Registro exitoso! Ahora puedes iniciar sesión."
        },
        en: {
            vacios: "Please fill in all required fields.",
            email: "Invalid email address. Format must be 'user@domain.com'.",
            passRequisitos: "Password must have:\n- Minimum 8 characters\n- At least one uppercase letter\n- At least one number\n- At least one special character (e.g., @, #, $, .)",
            passNoCoincide: "Passwords do not match.",
            usuarioExiste: "The username '{usuario}' already exists. Please choose another one.",
            exito: "Registration successful! You can now log in."
        }
    };

    // Obtener mensajes según el idioma
    const msgs = mensajes[lang];

    // 2. Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const email = document.getElementById("email").value.trim();

    // --- VALIDACIÓN 1: CAMPOS VACÍOS ---
    if (!nombre || !apellidos || !usuario || !pass1 || !pass2 || !email) {
        alert(msgs.vacios);
        return;
    }

    // --- VALIDACIÓN 2: CORREO ELECTRÓNICO ---
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert(msgs.email);
        return;
    }

    // --- VALIDACIÓN 3: CONTRASEÑA SEGURA ---
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passRegex.test(pass1)) {
        alert(msgs.passRequisitos);
        return;
    }

    // --- VALIDACIÓN 4: COINCIDENCIA DE CONTRASEÑAS ---
    if (pass1 !== pass2) {
        alert(msgs.passNoCoincide);
        return;
    }

    // --- VALIDACIÓN 5: USUARIO EXISTENTE ---
    if (localStorage.getItem("user_" + usuario)) {
        alert(msgs.usuarioExiste.replace("{usuario}", usuario));
        return;
    }

    // 3. Crear objeto usuario
    const nuevoUsuario = {
        nombre: nombre + " " + apellidos, 
        nombrePila: nombre,
        apellidos: apellidos,
        usuario: usuario,
        password: pass1,
        email: email,
        compras: []
    };

    // 4. Guardar en LocalStorage
    localStorage.setItem("user_" + usuario, JSON.stringify(nuevoUsuario));

    alert(msgs.exito);
    window.location.href = "login.html";
}

// Función para actualizar el texto del input file personalizado
function actualizarNombreArchivo() {
    const input = document.getElementById('foto');
    const textoSpan = document.getElementById('texto-nombre-archivo');
    
    if (input.files && input.files.length > 0) {
        // Si hay archivo, mostramos su nombre
        textoSpan.textContent = input.files[0].name;
        // Quitamos el data-lang para que el traductor no sobrescriba el nombre del archivo
        textoSpan.removeAttribute('data-lang');
        textoSpan.style.fontStyle = "normal";
    } else {
        // Si no hay archivo, volvemos al texto por defecto
        const lang = localStorage.getItem('idioma') || 'es';
        // Recuperamos el texto del diccionario global 'traducciones' (de main.js)
        if (typeof traducciones !== 'undefined') {
            textoSpan.textContent = traducciones[lang]['text_no_file'];
        }
        textoSpan.setAttribute('data-lang', 'text_no_file');
        textoSpan.style.fontStyle = "italic";
    }
}