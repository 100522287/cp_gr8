function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const email = document.getElementById("email").value;

    // 1. Validaciones básicas
    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (pass1.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // 2. Comprobar si el usuario ya existe
    if (localStorage.getItem("user_" + usuario)) {
        alert("El nombre de usuario ya existe. Por favor elige otro.");
        return;
    }

    // 3. Crear objeto usuario
    const nuevoUsuario = {
        nombre: nombre,
        usuario: usuario,
        password: pass1, // En una app real, esto iría encriptado o al backend
        email: email,
        compras: [] // Historial vacío
    };

    // 4. Guardar en LocalStorage
    // Usamos un prefijo "user_" para identificar usuarios fácilmente
    localStorage.setItem("user_" + usuario, JSON.stringify(nuevoUsuario));

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
}