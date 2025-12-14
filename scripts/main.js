document.addEventListener("DOMContentLoaded", function () {
    // 1. Verificar Sesión Globalmente (Header)
    actualizarHeaderSesion();

    // 2. Cargar los packs más populares
    cargarPacksHome();

    // 3. Personalizar la portada si estamos en Inicio
    actualizarHero();

    // 4. Iniciar Carrusel (si existe en la página)
    carrusel();

    // 5. Resaltar menú activo automáticamente
    resaltarMenuActivo();

    
});

// ============================================
// BASE DE DATOS SIMULADA PARA LA HOME (PACKS POPULARES)
// ============================================
const dbPacksHome = [
    {
        id: "hungria",
        titulo: "Europa Imperial",
        precio: "950€",
        imagen: "images/budapest.jpg",
        detalles: ["8 días / 7 noches", "Tren alta velocidad", "Hoteles 4* céntricos"]
    },
    {
        id: "italia",
        titulo: "Renacimiento Italiano",
        precio: "1.120€",
        imagen: "images/roma.jpg",
        detalles: ["9 días / 8 noches", "Bed & Breakfast", "Museos Vaticanos"]
    },
    {
        id: "japon",
        titulo: "Magia Asiática",
        precio: "2.400€",
        imagen: "images/kioto.jpg",
        detalles: ["15 días / 14 noches", "Vuelos multidestino", "Ryokan en Kioto"]
    },
    {
        id: "peru",
        titulo: "Aventura Andina",
        precio: "1.850€",
        imagen: "images/cuzco.jpg",
        detalles: ["11 días / 10 noches", "Vuelos incluidos", "Machu Picchu"]
    },
    {
        id: "kenia",
        titulo: "Safari en Kenia",
        precio: "2.150€",
        imagen: "images/safari.webp",
        detalles: ["10 días / 9 noches", "Rutas en 4x4 privado", "Camping de lujo"]
    }
];

// Función para renderizar los packs en la home
function cargarPacksHome() {
    const contenedor = document.getElementById("contenedor-packs-home");
    
    // Si no existe el contenedor (por ejemplo, estamos en otra página), no hacemos nada
    if (!contenedor) return;

    let htmlContent = "";

    dbPacksHome.forEach(pack => {
        // Generamos los <li> de la lista dinámicamente
        let listaDetalles = "";
        pack.detalles.forEach(detalle => {
            listaDetalles += `<li>${detalle}</li>`;
        });

        htmlContent += `
            <div class="tarjeta-pack">
                <div class="imagen-pack">
                    <img src="${pack.imagen}" alt="${pack.titulo}">
                    <span class="etiqueta-precio">Desde ${pack.precio}</span>
                </div>
                <div class="contenido-pack">
                    <h3>${pack.titulo}</h3>
                    <ul>
                        ${listaDetalles}
                    </ul>
                    <a href="compra.html?id=${pack.id}" class="btn-comprar">Comprar</a>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;
}

// ============================================
// BASE DE DATOS SIMULADA PARA ARTÍCULOS (GLOBAL)
// ============================================
const dbArticulosGlobal = [
    {
        id: 1,
        titulo: "Copenhague sobre dos ruedas: Guía ciclista definitiva",
        descripcion: "Descubre la capital danesa de la forma más auténtica: en bicicleta. Rutas y consejos.",
        imagen: "images/copenhagen.jpg"
    },
    {
        id: 2,
        titulo: "El embrujo azul de Chefchaouen: La joya del Rif",
        descripcion: "Piérdete en la medina más fotogénica de Marruecos y descubre sus secretos.",
        imagen: "images/chefchaouen.jpg"
    },
    {
        id: 3,
        titulo: "Sevilla: Tapas, Flamenco y Pasión en el sur",
        descripcion: "Una ruta sensorial por el corazón de Andalucía. Dónde comer y sentir el duende.",
        imagen: "images/sevilla.jpg"
    },
    {
        id: 4,
        titulo: "París Bohemio: Más allá de la Torre Eiffel",
        descripcion: "Descubre el lado más auténtico, artístico y menos turístico de la ciudad de la luz.",
        imagen: "images/paris.jpg"
    },
    {
        id: 5,
        titulo: "Kioto y la esencia del Japón tradicional",
        descripcion: "Guía para tu primer viaje: templos dorados, geishas y etiqueta japonesa.",
        imagen: "images/kioto.jpg"
    },
    {
        id: 6,
        titulo: "Safari en Kenia: La Gran Aventura Africana",
        descripcion: "Todo lo que necesitas saber para vivir la experiencia de tu vida en la sabana.",
        imagen: "images/safari.webp"
    },
    {
        id: 7,
        titulo: "Los secretos de Budapest: La Perla del Danubio",
        descripcion: "Descubre la perla del Danubio: baños termales, ruin bars y arquitectura monumental.",
        imagen: "images/budapest.jpg"
    },
    {
        id: 8,
        titulo: "Cuzco y la magia de los Andes Peruanos",
        descripcion: "La puerta de entrada a Machu Picchu. Historia inca, aclimatación y aventura.",
        imagen: "images/cuzco.jpg"
    },
    {
        id: 9,
        titulo: "Roma Eterna: Un museo al aire libre",
        descripcion: "Camina por la historia. Guía para disfrutar del caos, el arte y la comida romana.",
        imagen: "images/roma.jpg"
    },
    {
        id: 10,
        titulo: "Bali: Espiritualidad entre arrozales",
        descripcion: "Una ruta espiritual y fotográfica por el corazón verde de Indonesia. Templos, monos y cascadas.",
        imagen: "images/bali.jpg"
    },
    {
        id: 11,
        titulo: "Nueva York: La ciudad que nunca duerme",
        descripcion: "La guía definitiva para no perderte nada en la Gran Manzana sin gastar una fortuna.",
        imagen: "images/newyork.jpg"
    },
    {
        id: 12,
        titulo: "Patagonia: Aventura en el Fin del Mundo",
        descripcion: "Senderismo extremo, glaciares y montañas. Prepárate para la aventura de tu vida en el sur.",
        imagen: "images/patagonia.jpg"
    }
];

// Asignamos estos datos a la variable global que usa el carrusel
// Solo si no existe ya (para no sobrescribir articulos.js si estuviéramos en esa página)
if (!window.datosArticulos) {
    window.datosArticulos = dbArticulosGlobal;
}

// --- GESTIÓN DEL HEADER (NAVBAR) ---
function actualizarHeaderSesion() {
    const panelUsuario = document.getElementById("panel-usuario-nav");
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");

    if (panelUsuario && usuarioActivo) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));

        if (datosUsuario) {
            // Imagen por defecto si no tiene una
            const imagenPerfil = datosUsuario.avatar || "images/foto_perfil.png";

            // Reemplazar el contenido manteniendo el selector de idioma
            panelUsuario.innerHTML = `
                <select id="selector-idioma" class="selector-idioma" style="margin-right: 15px;">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
                
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

// función para resaltar los títulos del header
function resaltarMenuActivo() {
    // 1. Obtener el nombre del archivo actual de la URL
    const path = window.location.pathname;
    const paginaActual = path.split("/").pop() || "home_no_session.html"; // Si es raíz, asume home

    // 2. Seleccionar todos los enlaces del menú y del login
    const enlaces = document.querySelectorAll('.menu-header-footer a, .idioma-login a');

    enlaces.forEach(link => {
        // Limpiamos cualquier clase 'active' que viniera hardcodeada en el HTML
        link.classList.remove('active');

        // Obtenemos el destino del enlace
        const href = link.getAttribute('href');

        // 3. Comparar: Si el enlace lleva a donde estamos ahora...
        // (Usamos endsWith para evitar problemas con rutas relativas "./")
        if (href && (href === paginaActual || href.endsWith("/" + paginaActual))) {
            
            // 4. EXCEPCIÓN: No marcar el Logo (mochila)
            if (!link.classList.contains('logo-nav')) {
                link.classList.add('active');
            }
        }
    });
}