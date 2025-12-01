document.addEventListener('DOMContentLoaded', () => {
    cargarDatosCompra();
});

// BASE DE DATOS AMPLIADA DE PACKS
const dbPacks = {
    "hungria": {
        titulo: "Europa Imperial (Viena y Budapest)",
        precio: "950€",
        imagen: "images/budapest.jpg",
        descripcion: "Un viaje inolvidable al corazón del antiguo Imperio Austrohúngaro. Este pack está diseñado para amantes de la historia y la arquitectura monumental. Recorreremos las orillas del Danubio, visitaremos palacios donde el tiempo se detuvo y nos relajaremos en los balnearios más famosos de Europa.",
        detalles: [
            "8 días / 7 noches en Hoteles 4* Superior (céntricos).",
            "Tren de Alta Velocidad RailJet entre Viena y Budapest.",
            "Entrada VIP al Parlamento de Budapest y Palacio de Schönbrunn.",
            "Cena crucero con música en vivo por el Danubio.",
            "Pase de 1 día completo en Balneario Széchenyi (masaje incluido).",
            "Guía privado de habla hispana durante todas las visitas."
        ],
        nota: "El precio incluye tasas turísticas locales."
    },
    "italia": {
        titulo: "Renacimiento Italiano (Florencia y Roma)",
        precio: "1.120€",
        imagen: "images/roma.jpg",
        descripcion: "La combinación perfecta entre la cuna del arte y la ciudad eterna. Caminarás por las mismas calles que Miguel Ángel y Da Vinci. Disfruta de la gastronomía más auténtica, el caos encantador de Roma y la elegancia toscana de Florencia en un solo viaje.",
        detalles: [
            "9 días / 8 noches en alojamientos con encanto (B&B seleccionados).",
            "Billete de tren Frecciarossa entre ciudades.",
            "Entrada sin colas al Coliseo, Foro Romano y Palatino.",
            "Acceso prioritario a Museos Vaticanos y Capilla Sixtina.",
            "Visita a la Galería Uffizi con experto en arte.",
            "Cata de vinos y quesos en una enoteca de Florencia."
        ],
        nota: "Se requiere vestimenta apropiada para entrar en las iglesias."
    },
    "japon": {
        titulo: "Magia Asiática (Tokio y Kioto)",
        precio: "2.400€",
        imagen: "images/kioto.jpg",
        descripcion: "El contraste definitivo. Viaja desde los neones futuristas de Akihabara hasta la paz zen de los templos de Kioto. Experimenta la ceremonia del té, duerme en un suelo de tatami y cruza el paso de peatones más famoso del mundo. Japón te cambiará la forma de ver la vida.",
        detalles: [
            "15 días / 14 noches de inmersión total.",
            "Vuelos multidestino (Ida Tokio / Vuelta Osaka).",
            "Alojamiento mixto: Hoteles occidentales y 2 noches en Ryokan tradicional.",
            "JR Pass de 7 días incluido para trenes bala (Shinkansen).",
            "Experiencia de ceremonia del té en Gion.",
            "Pocket WiFi con internet ilimitado durante todo el viaje."
        ],
        nota: "No incluye seguro médico (obligatorio contratar aparte)."
    },
    "peru": {
        titulo: "Aventura Andina (Cuzco y Machu Picchu)",
        precio: "1.850€",
        imagen: "images/cuzco.jpg",
        descripcion: "Sigue los pasos de los Incas en una aventura que te dejará sin aliento. Desde la colonial Cuzco hasta la ciudad perdida entre las nubes. Este viaje combina historia, trekking moderado y una conexión espiritual con la naturaleza de los Andes.",
        detalles: [
            "11 días / 10 noches.",
            "Vuelos internacionales + Vuelo interno Lima-Cuzco.",
            "Tren panorámico Vistadome hacia Aguas Calientes.",
            "Entrada a Machu Picchu turno de mañana (con guía).",
            "Tour completo por el Valle Sagrado y Maras.",
            "Mate de coca y asistencia para el mal de altura."
        ],
        nota: "Recomendamos buena forma física para las caminatas en altura."
    },
    "kenia": {
        titulo: "Safari en Kenia: La llamada de África",
        precio: "2.150€",
        imagen: "images/safari.webp",
        descripcion: "La aventura definitiva para los amantes de la fauna. Adéntrate en la sabana africana en busca de los 'Cinco Grandes'. Dormirás bajo las estrellas escuchando a los leones y verás atardeceres que parecen pintados a mano.",
        detalles: [
            "10 días / 9 noches en régimen de pensión completa.",
            "Transporte en Land Cruiser 4x4 con techo abatible.",
            "Alojamiento en Tented Camps de lujo (Glamping).",
            "Entradas a Parque Nacional Masai Mara y Lago Nakuru.",
            "Visita cultural a una aldea Masai auténtica.",
            "Agua mineral ilimitada durante los safaris."
        ],
        nota: "Vacuna de fiebre amarilla obligatoria."
    },
    "eeuu": {
        titulo: "Costa Oeste USA: Ruta de Película",
        precio: "1.680€",
        imagen: "images/hollywood.jpg",
        descripcion: "Alquila un coche y siente la libertad. Desde el Golden Gate de San Francisco hasta el Paseo de la Fama en Los Ángeles, pasando por los acantilados del Big Sur. Un Road Trip clásico americano lleno de paisajes icónicos.",
        detalles: [
            "12 días / 11 noches de pura carretera.",
            "Alquiler de coche (SUV o Mustang Cabrio según disponibilidad).",
            "Hoteles de categoría turista superior con parking.",
            "Entrada a Universal Studios Hollywood.",
            "Crucero por la bahía de San Francisco.",
            "Ruta detallada km a km con paradas secretas."
        ],
        nota: "Es necesario carnet de conducir internacional y tarjeta de crédito."
    },
    "marruecos": {
        titulo: "La Perla Azul (Chefchaouen y Norte)",
        precio: "720€",
        imagen: "images/chefchaouen.jpg",
        descripcion: "Una escapada cercana pero exótica. Piérdete por las calles azules de Chefchaouen, regatea en los zocos y disfruta del té a la menta. Una inmersión sensorial en colores, olores y sabores del norte de África.",
        detalles: [
            "5 días / 4 noches.",
            "Ferry desde Tarifa o Vuelo a Tánger.",
            "Traslados privados en minivan con aire acondicionado.",
            "Alojamiento en Riads tradicionales con desayuno.",
            "Excursión a las cascadas de Akchour.",
            "Cena tradicional marroquí de despedida."
        ],
        nota: "Pasaporte con vigencia mínima de 6 meses."
    },
    "nueva-zelanda": {
        titulo: "Aventura en las Antípodas (Queenstown)",
        precio: "2.100€",
        imagen: "images/queenstown.jpg",
        descripcion: "El destino soñado para los adictos a la adrenalina. Nueva Zelanda es naturaleza en estado puro: fiordos, montañas alpinas y lagos cristalinos. Este pack se centra en la isla sur y sus actividades extremas.",
        detalles: [
            "8 días / 7 noches (Sin vuelos internacionales).",
            "Alquiler de Campervan o Coche + Motel.",
            "Salto Bungee en el puente Kawarau (Opcional).",
            "Crucero escénico por Milford Sound.",
            "Ticket para el teleférico Skyline Queenstown.",
            "Ruta de senderismo por el Monte Cook."
        ],
        nota: "Se conduce por la izquierda."
    },
    "republica-checa": {
        titulo: "Cuentos de Bohemia (Praga)",
        precio: "1.680€",
        imagen: "images/praga.webp",
        descripcion: "Praga es un museo al aire libre. Sus torres góticas, el puente de Carlos al amanecer y su castillo de cuento te enamorarán. Disfruta de la cerveza más barata y buena de Europa en sus tabernas medievales.",
        detalles: [
            "6 días / 5 noches en el centro histórico.",
            "Vuelos directos desde Madrid/Barcelona.",
            "Hotel 5* con desayuno buffet.",
            "Espectáculo de Teatro Negro.",
            "Excursión de día a Karlovy Vary (ciudad balneario).",
            "Cena medieval con espectáculo en taberna subterránea."
        ],
        nota: "Moneda local: Corona Checa (CZK)."
    }
};

function cargarDatosCompra() {
    // 1. Obtener el ID del pack desde la URL (ej: compra.html?id=japon)
    const params = new URLSearchParams(window.location.search);
    const idPack = params.get('id'); // "japon", "italia", etc.

    // 2. Elementos del DOM a rellenar
    const imgElement = document.getElementById('img-pack');
    const precioElement = document.getElementById('precio-pack');
    const tituloElement = document.getElementById('titulo-pack');
    const descElement = document.getElementById('desc-pack');
    const listaElement = document.getElementById('lista-detalles');
    const notaElement = document.getElementById('nota-pack');

    // 3. Validar si el pack existe
    if (idPack && dbPacks[idPack]) {
        const pack = dbPacks[idPack];

        // 4. Inyectar datos
        imgElement.src = pack.imagen;
        precioElement.textContent = pack.precio;
        tituloElement.textContent = pack.titulo;
        descElement.textContent = pack.descripcion;
        notaElement.textContent = pack.nota;

        // Limpiar lista y rellenar
        listaElement.innerHTML = '';
        pack.detalles.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaElement.appendChild(li);
        });

        // Cambiar título de la pestaña
        document.title = "Comprar - " + pack.titulo;

    } else {
        // Si no hay ID o no existe, mostrar error o redirigir
        tituloElement.textContent = "Pack no encontrado";
        descElement.textContent = "Por favor, vuelve a la página de Packs y selecciona uno.";
        document.querySelector('.btn-comprar-final').disabled = true;
        document.querySelector('.btn-comprar-final').style.backgroundColor = '#ccc';
    }
}

// Añadimos esto al inicio para cargar datos del usuario si existe
document.addEventListener('DOMContentLoaded', () => {
    cargarDatosCompra();
    prellenarDatosUsuario();
});

function prellenarDatosUsuario() {
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    if (usuarioActivo) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
        if (datosUsuario) {
            document.getElementById("nombre_cliente").value = datosUsuario.nombre;
            document.getElementById("email_cliente").value = datosUsuario.email;
        }
    }
}

function validarCompra() {
    const tarjeta = document.getElementById("num_tarjeta").value;
    const cvv = document.getElementById("cvv").value;
    const fechaCaducidad = document.getElementById("fecha_caducidad").value; // Formato YYYY-MM

    // 1. Validar longitud tarjeta (simulada)
    if (tarjeta.length < 13 || isNaN(tarjeta.replace(/\s/g, ''))) {
        alert("Número de tarjeta inválido.");
        return;
    }

    // 2. Validar CVV
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("CVV inválido (debe ser 3 dígitos).");
        return;
    }

    // 3. REQUISITO: Validar fecha no menor a Diciembre 2025
    if (!fechaCaducidad) {
        alert("Introduce la fecha de caducidad.");
        return;
    }

    const [anio, mes] = fechaCaducidad.split('-').map(Number);

    if (anio < 2025 || (anio === 2025 && mes < 12)) {
        alert("La tarjeta debe tener una fecha de caducidad posterior a Noviembre 2025.");
        return;
    }

    // 4. Guardar compra en el usuario (Simulación de backend)
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");

    if (usuarioActivo) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));

        // Obtenemos el pack actual
        const params = new URLSearchParams(window.location.search);
        const idPack = params.get('id');
        const infoPack = dbPacks[idPack] || { titulo: "Pack Desconocido", precio: "0€" };

        const nuevaCompra = {
            pack: infoPack.titulo,
            precio: infoPack.precio,
            fechaCompra: new Date().toLocaleDateString(),
            metodo: document.getElementById("metodo_pago").value
        };

        // Añadir al historial
        if (!datosUsuario.compras) datosUsuario.compras = [];
        datosUsuario.compras.push(nuevaCompra);

        // Guardar actualización
        localStorage.setItem("user_" + usuarioActivo, JSON.stringify(datosUsuario));

        alert("¡Compra realizada con éxito! Se ha guardado en tu perfil de " + datosUsuario.nombre);
    } else {
        alert("¡Compra realizada con éxito! (Usuario invitado)");
    }

    // Redirigir a inicio
    window.location.href = "home_no_session.html";
}