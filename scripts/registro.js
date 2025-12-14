function validarRegistro() {
    // 1. Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const email = document.getElementById("email").value.trim();

    // --- VALIDACIÓN 1: CAMPOS VACÍOS ---
    if (!nombre || !apellidos || !usuario || !pass1 || !pass2 || !email) {
        alert("Por favor, rellena todos los campos obligatorios.");
        return;
    }

    // --- VALIDACIÓN 2: CORREO ELECTRÓNICO (Igual que en compra) ---
    // Regex: Empieza con letras/números/puntos/guiones + @ + letras/números + . + letras (2 o más)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido. Debe ser formato 'usuario@dominio.com'.");
        return;
    }

    // --- VALIDACIÓN 3: CONTRASEÑA SEGURA ---
    // Requisitos: 1 Mayúscula, 1 Número, 1 Especial, Mínimo 8 chars
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passRegex.test(pass1)) {
        alert("La contraseña debe tener:\n- Mínimo 8 caracteres\n- Al menos una mayúscula\n- Al menos un número\n- Al menos un carácter especial (ej: @, #, $, .)");
        return;
    }

    // --- VALIDACIÓN 4: COINCIDENCIA DE CONTRASEÑAS ---
    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // --- VALIDACIÓN 5: USUARIO EXISTENTE ---
    if (localStorage.getItem("user_" + usuario)) {
        alert("El nombre de usuario '" + usuario + "' ya existe. Por favor elige otro.");
        return;
    }

    // 3. Crear objeto usuario
    // Guardamos "nombre" concatenado para que la Home siga saludando correctamente ("Hola, Juan Pérez")
    const nuevoUsuario = {
        nombre: nombre + " " + apellidos, 
        nombrePila: nombre, // Guardamos por separado por si acaso
        apellidos: apellidos,
        usuario: usuario,
        password: pass1,
        email: email,
        compras: []
    };

    // 4. Guardar en LocalStorage
    localStorage.setItem("user_" + usuario, JSON.stringify(nuevoUsuario));

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
}