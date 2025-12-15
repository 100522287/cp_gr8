function iniciarSesion() {
    // 1. DETECTAR IDIOMA
    const lang = localStorage.getItem('idioma') || 'es';

    // Diccionario de mensajes
    const mensajes = {
        es: {
            noUsuario: "Usuario no encontrado. Por favor regístrate.",
            bienvenida: "¡Bienvenido de nuevo, {nombre}!",
            passIncorrecta: "Contraseña incorrecta."
        },
        en: {
            noUsuario: "User not found. Please register.",
            bienvenida: "Welcome back, {nombre}!",
            passIncorrecta: "Incorrect password."
        }
    };

    const msgs = mensajes[lang];

    const usuarioInput = document.getElementById("usuario").value;
    const passInput = document.getElementById("password").value;

    // 2. Buscar usuario en LocalStorage
    const usuarioGuardado = localStorage.getItem("user_" + usuarioInput);

    if (!usuarioGuardado) {
        alert(msgs.noUsuario);
        return;
    }

    const usuarioObj = JSON.parse(usuarioGuardado);

    // 3. Verificar contraseña
    if (usuarioObj.password === passInput) {
        // Guardar sesión activa
        sessionStorage.setItem("usuarioActivo", usuarioInput);

        // Usamos replace para insertar el nombre en el mensaje
        alert(msgs.bienvenida.replace("{nombre}", usuarioObj.nombrePila || usuarioObj.nombre));

        // REDIRECCIÓN A LA HOME ÚNICA
        window.location.href = "home_no_session.html";
    } else {
        alert(msgs.passIncorrecta);
    }
}