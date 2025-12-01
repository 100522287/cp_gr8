function iniciarSesion() {
    const usuarioInput = document.getElementById("usuario").value;
    const passInput = document.getElementById("password").value;

    // 1. Buscar usuario en LocalStorage
    const usuarioGuardado = localStorage.getItem("user_" + usuarioInput);

    if (!usuarioGuardado) {
        alert("Usuario no encontrado. Por favor regístrate.");
        return;
    }

    const usuarioObj = JSON.parse(usuarioGuardado);

    // 2. Verificar contraseña
    if (usuarioObj.password === passInput) {
        // Guardar sesión activa
        sessionStorage.setItem("usuarioActivo", usuarioInput);

        alert("¡Bienvenido de nuevo, " + usuarioObj.nombre + "!");

        // REDIRECCIÓN A LA HOME ÚNICA
        // (El JS de esa página se encargará de mostrar tu foto)
        window.location.href = "home_no_session.html";
    } else {
        alert("Contraseña incorrecta.");
    }
}