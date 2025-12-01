document.addEventListener("DOMContentLoaded", function () {
    // 1. Verificar Sesión Globalmente (Header)
    actualizarHeaderSesion();

    // 2. Personalizar la portada si estamos en Inicio
    actualizarHero();

    // 3. Iniciar Carrusel (si existe en la página)
    carrusel();
});

// --- GESTIÓN DEL HEADER (NAVBAR) ---
function actualizarHeaderSesion() {
    const panelUsuario = document.getElementById("panel-usuario-nav");
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");

    if (panelUsuario && usuarioActivo) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));

        if (datosUsuario) {
            // Imagen por defecto si no tiene una
            const imagenPerfil = datosUsuario.avatar || "images/tiktok_r.png";

            // Reemplazar el botón "Iniciar Sesión" por la foto y nombre
            panelUsuario.innerHTML = `
                <div class="info-usuario-nav" style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-weight: 600; color: #003049;">${datosUsuario.usuario}</span>
                    <img src="${imagenPerfil}" alt="Perfil" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #FFB703;">
                    <button onclick="cerrarSesion()" style="background:none; border:none; color: #d00000; cursor: pointer; font-size: 0.8rem; font-weight: bold;">(Salir)</button>
                </div>
            `;
        }
    }
}

// --- GESTIÓN DE LA PORTADA (HERO) ---
function actualizarHero() {
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");

    // Buscamos los elementos del Hero (Título y subtítulo)
    const heroTitle = document.querySelector(".hero-content h1");
    const heroDesc = document.querySelector(".hero-content p");
    const heroBtn = document.querySelector(".hero-content .btn-negro");

    // Solo ejecutamos esto si estamos en la home (si existen esos elementos) y hay usuario
    if (usuarioActivo && heroTitle) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));

        if (datosUsuario) {
            // Cambiamos el texto
            heroTitle.textContent = "¡Hola de nuevo, " + datosUsuario.nombre + "!";
            heroDesc.textContent = "El mundo sigue esperándote. ¿Cuál es tu próximo destino?";

            if (heroBtn) {
                heroBtn.textContent = "Ver mis ofertas";
            }
        }
    }
}

function cerrarSesion() {
    if (confirm("¿Seguro que quieres cerrar sesión?")) {
        sessionStorage.removeItem("usuarioActivo");
        window.location.href = "home_no_session.html"; // Recarga la página limpia
    }
}

// --- FUNCIÓN CARRUSEL (Sin cambios) ---
function carrusel() {
    const track = document.getElementById("track-articulos");
    const botonIzq = document.getElementById("boton_izq_articulos");
    const botonDer = document.getElementById("boton_der_articulos");

    if (!track || !botonIzq || !botonDer) return;

    if (!window.datosArticulos) return;

    try {
        const articulosCarrusel = window.datosArticulos;
        let htmlContent = "";

        articulosCarrusel.forEach(art => {
            htmlContent += `
                <a href="articulo_detalle.html?id=${art.id}&from=home" style="text-decoration:none; display:block; height:100%;">
                    <div class="tarjeta-articulo">
                        <div class="articulo-img"><img src="${art.imagen}" alt="${art.titulo}"></div>
                        <div class="articulo-info"><h4>${art.titulo}</h4><p>${art.descripcion}</p></div>
                    </div>
                </a>`;
        });
        track.innerHTML = htmlContent;

        function obtenerAncho() {
            const enlace = track.querySelector('a');
            return enlace ? enlace.offsetWidth + 30 : 300;
        }
        botonDer.addEventListener("click", () => { track.scrollBy({ left: obtenerAncho(), behavior: 'smooth' }); });
        botonIzq.addEventListener("click", () => { track.scrollBy({ left: -obtenerAncho(), behavior: 'smooth' }); });

    } catch (error) {
        console.error("Error carrusel:", error);
    }
}