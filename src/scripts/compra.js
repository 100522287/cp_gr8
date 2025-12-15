document.addEventListener('DOMContentLoaded', () => {
    cargarDatosCompra();
});

// ============================================
// BASE DE DATOS DE PACKS (Versión Detallada para Compra)
// ============================================
// Nota: Mantenemos la estructura de OBJETO { "clave": {datos} } para acceso rápido por ID
const dbPacks = {
    "hungria": {
        titulo: { es: "Europa Imperial (Viena y Budapest)", en: "Imperial Europe (Vienna & Budapest)" },
        precio: "950€",
        imagen: "images/budapest.jpg",
        descripcion: {
            es: "Un viaje inolvidable al corazón del antiguo Imperio Austrohúngaro. Este pack está diseñado para amantes de la historia y la arquitectura monumental. Recorreremos las orillas del Danubio, visitaremos palacios donde el tiempo se detuvo y nos relajaremos en los balnearios más famosos de Europa.",
            en: "An unforgettable journey to the heart of the old Austro-Hungarian Empire. Designed for history and monumental architecture lovers. We will travel along the banks of the Danube, visit palaces where time stood still, and relax in Europe's most famous spas."
        },
        detalles: {
            es: [
                "8 días / 7 noches en Hoteles 4* Superior (céntricos).",
                "Tren de Alta Velocidad RailJet entre Viena y Budapest.",
                "Entrada VIP al Parlamento de Budapest y Palacio de Schönbrunn.",
                "Cena crucero con música en vivo por el Danubio.",
                "Pase de 1 día completo en Balneario Széchenyi (masaje incluido).",
                "Guía privado de habla hispana durante todas las visitas."
            ],
            en: [
                "8 days / 7 nights in 4* Superior Hotels (central).",
                "RailJet High-Speed Train between Vienna and Budapest.",
                "VIP entry to Budapest Parliament and Schönbrunn Palace.",
                "Dinner cruise with live music on the Danube.",
                "Full day pass at Széchenyi Spa (massage included).",
                "Private English/Spanish speaking guide during all visits."
            ]
        },
        nota: { es: "El precio incluye tasas turísticas locales.", en: "Price includes local tourist taxes." }
    },
    "italia": {
        titulo: { es: "Renacimiento Italiano (Florencia y Roma)", en: "Italian Renaissance (Florence & Rome)" },
        precio: "1.120€",
        imagen: "images/roma.jpg",
        descripcion: {
            es: "La combinación perfecta entre la cuna del arte y la ciudad eterna. Caminarás por las mismas calles que Miguel Ángel y Da Vinci. Disfruta de la gastronomía más auténtica, el caos encantador de Roma y la elegancia toscana de Florencia en un solo viaje.",
            en: "The perfect combination of the cradle of art and the Eternal City. Walk the same streets as Michelangelo and Da Vinci. Enjoy authentic gastronomy, the charming chaos of Rome, and the Tuscan elegance of Florence in one trip."
        },
        detalles: {
            es: [
                "9 días / 8 noches en alojamientos con encanto (B&B seleccionados).",
                "Billete de tren Frecciarossa entre ciudades.",
                "Entrada sin colas al Coliseo, Foro Romano y Palatino.",
                "Acceso prioritario a Museos Vaticanos y Capilla Sixtina.",
                "Visita a la Galería Uffizi con experto en arte.",
                "Cata de vinos y quesos en una enoteca de Florencia."
            ],
            en: [
                "9 days / 8 nights in charming accommodations (selected B&Bs).",
                "Frecciarossa train ticket between cities.",
                "Skip-the-line entry to Colosseum, Roman Forum, and Palatine.",
                "Priority access to Vatican Museums and Sistine Chapel.",
                "Uffizi Gallery tour with an art expert.",
                "Wine and cheese tasting in a Florence wine bar."
            ]
        },
        nota: { es: "Se requiere vestimenta apropiada para entrar en las iglesias.", en: "Appropriate attire is required to enter churches." }
    },
    "japon": {
        titulo: { es: "Magia Asiática (Tokio y Kioto)", en: "Asian Magic (Tokyo & Kyoto)" },
        precio: "2.400€",
        imagen: "images/kioto.jpg",
        descripcion: {
            es: "El contraste definitivo. Viaja desde los neones futuristas de Akihabara hasta la paz zen de los templos de Kioto. Experimenta la ceremonia del té, duerme en un suelo de tatami y cruza el paso de peatones más famoso del mundo. Japón te cambiará la forma de ver la vida.",
            en: "The ultimate contrast. Travel from the futuristic neons of Akihabara to the Zen peace of Kyoto's temples. Experience the tea ceremony, sleep on a tatami floor, and cross the world's most famous pedestrian crossing. Japan will change the way you see life."
        },
        detalles: {
            es: [
                "15 días / 14 noches de inmersión total.",
                "Vuelos multidestino (Ida Tokio / Vuelta Osaka).",
                "Alojamiento mixto: Hoteles occidentales y 2 noches en Ryokan tradicional.",
                "JR Pass de 7 días incluido para trenes bala (Shinkansen).",
                "Experiencia de ceremonia del té en Gion.",
                "Pocket WiFi con internet ilimitado durante todo el viaje."
            ],
            en: [
                "15 days / 14 nights of total immersion.",
                "Multi-destination flights (In Tokyo / Out Osaka).",
                "Mixed accommodation: Western hotels and 2 nights in traditional Ryokan.",
                "7-day JR Pass included for bullet trains (Shinkansen).",
                "Tea ceremony experience in Gion.",
                "Pocket WiFi with unlimited internet throughout the trip."
            ]
        },
        nota: { es: "No incluye seguro médico (obligatorio contratar aparte).", en: "Health insurance not included (mandatory to purchase separately)." }
    },
    "peru": {
        titulo: { es: "Aventura Andina (Cuzco y Machu Picchu)", en: "Andean Adventure (Cusco & Machu Picchu)" },
        precio: "1.850€",
        imagen: "images/cuzco.jpg",
        descripcion: {
            es: "Sigue los pasos de los Incas en una aventura que te dejará sin aliento. Desde la colonial Cuzco hasta la ciudad perdida entre las nubes. Este viaje combina historia, trekking moderado y una conexión espiritual con la naturaleza de los Andes.",
            en: "Follow in the footsteps of the Incas on an adventure that will leave you breathless. From colonial Cusco to the lost city in the clouds. This trip combines history, moderate trekking, and a spiritual connection with the nature of the Andes."
        },
        detalles: {
            es: [
                "11 días / 10 noches.",
                "Vuelos internacionales + Vuelo interno Lima-Cuzco.",
                "Tren panorámico Vistadome hacia Aguas Calientes.",
                "Entrada a Machu Picchu turno de mañana (con guía).",
                "Tour completo por el Valle Sagrado y Maras.",
                "Mate de coca y asistencia para el mal de altura."
            ],
            en: [
                "11 days / 10 nights.",
                "International flights + Internal flight Lima-Cusco.",
                "Vistadome panoramic train to Aguas Calientes.",
                "Morning shift entry to Machu Picchu (with guide).",
                "Complete tour of the Sacred Valley and Maras.",
                "Coca tea and assistance for altitude sickness."
            ]
        },
        nota: { es: "Recomendamos buena forma física para las caminatas en altura.", en: "Good physical condition recommended for high-altitude hikes." }
    },
    "kenia": {
        titulo: { es: "Safari en Kenia: La llamada de África", en: "Safari in Kenya: The Call of Africa" },
        precio: "2.150€",
        imagen: "images/safari.webp",
        descripcion: {
            es: "La aventura definitiva para los amantes de la fauna. Adéntrate en la sabana africana en busca de los 'Cinco Grandes'. Dormirás bajo las estrellas escuchando a los leones y verás atardeceres que parecen pintados a mano.",
            en: "The ultimate adventure for wildlife lovers. Venture into the African savannah in search of the 'Big Five'. You will sleep under the stars listening to lions and see sunsets that look hand-painted."
        },
        detalles: {
            es: [
                "10 días / 9 noches en régimen de pensión completa.",
                "Transporte en Land Cruiser 4x4 con techo abatible.",
                "Alojamiento en Tented Camps de lujo (Glamping).",
                "Entradas a Parque Nacional Masai Mara y Lago Nakuru.",
                "Visita cultural a una aldea Masai auténtica.",
                "Agua mineral ilimitada durante los safaris."
            ],
            en: [
                "10 days / 9 nights on full board basis.",
                "Transport in 4x4 Land Cruiser with pop-up roof.",
                "Accommodation in Luxury Tented Camps (Glamping).",
                "Entry fees to Masai Mara National Reserve and Lake Nakuru.",
                "Cultural visit to an authentic Masai village.",
                "Unlimited mineral water during safaris."
            ]
        },
        nota: { es: "Vacuna de fiebre amarilla obligatoria.", en: "Yellow fever vaccination mandatory." }
    },
    "eeuu": {
        titulo: { es: "Costa Oeste USA: Ruta de Película", en: "USA West Coast: A Movie Road Trip" },
        precio: "1.680€",
        imagen: "images/hollywood.jpg",
        descripcion: {
            es: "Alquila un coche y siente la libertad. Desde el Golden Gate de San Francisco hasta el Paseo de la Fama en Los Ángeles, pasando por los acantilados del Big Sur. Un Road Trip clásico americano lleno de paisajes icónicos.",
            en: "Rent a car and feel the freedom. From the Golden Gate in San Francisco to the Walk of Fame in Los Angeles, passing through the cliffs of Big Sur. A classic American Road Trip full of iconic landscapes."
        },
        detalles: {
            es: [
                "12 días / 11 noches de pura carretera.",
                "Alquiler de coche (SUV o Mustang Cabrio según disponibilidad).",
                "Hoteles de categoría turista superior con parking.",
                "Entrada a Universal Studios Hollywood.",
                "Crucero por la bahía de San Francisco.",
                "Ruta detallada km a km con paradas secretas."
            ],
            en: [
                "12 days / 11 nights of pure road.",
                "Car rental (SUV or Mustang Convertible depending on availability).",
                "Superior tourist class hotels with parking.",
                "Entry to Universal Studios Hollywood.",
                "San Francisco Bay Cruise.",
                "Detailed km-by-km route with secret stops."
            ]
        },
        nota: { es: "Es necesario carnet de conducir internacional y tarjeta de crédito.", en: "International driving license and credit card required." }
    },
    "marruecos": {
        titulo: { es: "La Perla Azul (Chefchaouen y Norte)", en: "The Blue Pearl (Chefchaouen & North)" },
        precio: "720€",
        imagen: "images/chefchaouen.jpg",
        descripcion: {
            es: "Una escapada cercana pero exótica. Piérdete por las calles azules de Chefchaouen, regatea en los zocos y disfruta del té a la menta. Una inmersión sensorial en colores, olores y sabores del norte de África.",
            en: "A close but exotic getaway. Get lost in the blue streets of Chefchaouen, haggle in the souks, and enjoy mint tea. A sensory immersion in the colors, smells, and flavors of North Africa."
        },
        detalles: {
            es: [
                "5 días / 4 noches.",
                "Ferry desde Tarifa o Vuelo a Tánger.",
                "Traslados privados en minivan con aire acondicionado.",
                "Alojamiento en Riads tradicionales con desayuno.",
                "Excursión a las cascadas de Akchour.",
                "Cena tradicional marroquí de despedida."
            ],
            en: [
                "5 days / 4 nights.",
                "Ferry from Tarifa or Flight to Tangier.",
                "Private transfers in air-conditioned minivan.",
                "Accommodation in traditional Riads with breakfast.",
                "Excursion to Akchour waterfalls.",
                "Traditional Moroccan farewell dinner."
            ]
        },
        nota: { es: "Pasaporte con vigencia mínima de 6 meses.", en: "Passport with minimum 6 months validity." }
    },
    "nueva-zelanda": {
        titulo: { es: "Aventura en las Antípodas (Queenstown)", en: "Adventure Down Under (Queenstown)" },
        precio: "2.100€",
        imagen: "images/queenstown.jpg",
        descripcion: {
            es: "El destino soñado para los adictos a la adrenalina. Nueva Zelanda es naturaleza en estado puro: fiordos, montañas alpinas y lagos cristalinos. Este pack se centra en la isla sur y sus actividades extremas.",
            en: "The dream destination for adrenaline junkies. New Zealand is nature in its purest state: fjords, alpine mountains, and crystal-clear lakes. This pack focuses on the South Island and its extreme activities."
        },
        detalles: {
            es: [
                "8 días / 7 noches (Sin vuelos internacionales).",
                "Alquiler de Campervan o Coche + Motel.",
                "Salto Bungee en el puente Kawarau (Opcional).",
                "Crucero escénico por Milford Sound.",
                "Ticket para el teleférico Skyline Queenstown.",
                "Ruta de senderismo por el Monte Cook."
            ],
            en: [
                "8 days / 7 nights (International flights not included).",
                "Campervan or Car + Motel rental.",
                "Bungee Jumping at Kawarau Bridge (Optional).",
                "Scenic cruise on Milford Sound.",
                "Ticket for Skyline Queenstown Gondola.",
                "Hiking route on Mount Cook."
            ]
        },
        nota: { es: "Se conduce por la izquierda.", en: "Driving is on the left side." }
    },
    "republica-checa": {
        titulo: { es: "Cuentos de Bohemia (Praga)", en: "Bohemian Tales (Prague)" },
        precio: "1.680€",
        imagen: "images/praga.webp",
        descripcion: {
            es: "Praga es un museo al aire libre. Sus torres góticas, el puente de Carlos al amanecer y su castillo de cuento te enamorarán. Disfruta de la cerveza más barata y buena de Europa en sus tabernas medievales.",
            en: "Prague is an open-air museum. Its Gothic towers, Charles Bridge at sunrise, and fairytale castle will make you fall in love. Enjoy the cheapest and best beer in Europe in its medieval taverns."
        },
        detalles: {
            es: [
                "6 días / 5 noches en el centro histórico.",
                "Vuelos directos desde Madrid/Barcelona.",
                "Hotel 5* con desayuno buffet.",
                "Espectáculo de Teatro Negro.",
                "Excursión de día a Karlovy Vary (ciudad balneario).",
                "Cena medieval con espectáculo en taberna subterránea."
            ],
            en: [
                "6 days / 5 nights in the historic center.",
                "Direct flights included.",
                "5* Hotel with buffet breakfast.",
                "Black Light Theatre Show.",
                "Day trip to Karlovy Vary (spa town).",
                "Medieval dinner with show in underground tavern."
            ]
        },
        nota: { es: "Moneda local: Corona Checa (CZK).", en: "Local currency: Czech Koruna (CZK)." }
    }
};

// Función para cargar los datos del pack en la página de compra
function cargarDatosCompra() {
    // OBTENER ID DEL PACK DESDE LA URL
    const params = new URLSearchParams(window.location.search);
    const idPack = params.get('id');

    // DETECTAR IDIOMA
    const lang = localStorage.getItem('idioma') || 'es';
    // ELEMENTOS DEL DOM A RELLENAR
    const imgElement = document.getElementById('img-pack');
    const precioElement = document.getElementById('precio-pack');
    const tituloElement = document.getElementById('titulo-pack');
    const descElement = document.getElementById('desc-pack');
    const listaElement = document.getElementById('lista-detalles');
    const notaElement = document.getElementById('nota-pack');
    // Para cambiar el texto del botón si no usamos data-lang en este específico
    const btnComprar = document.querySelector('.btn-comprar-final');

    if (idPack && dbPacks[idPack]) {
        const pack = dbPacks[idPack];

        //INYECTAR DATOS SEGÚN IDIOMA
        imgElement.src = pack.imagen;
        precioElement.textContent = pack.precio;
        // Títulos y descripciones
        tituloElement.textContent = pack.titulo[lang] || pack.titulo.es;
        descElement.textContent = pack.descripcion[lang] || pack.descripcion.es;
        notaElement.textContent = pack.nota[lang] || pack.nota.es;

        // Lista de detalles
        listaElement.innerHTML = '';
        const detalles = pack.detalles[lang] || pack.detalles.es;
        detalles.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaElement.appendChild(li);
        });

        // Títulos de pestañas
        document.title = (lang === 'es' ? "Comprar - " : "Buy - ") + (pack.titulo[lang] || pack.titulo.es);

    } else {
        // Error handling en dos idiomas
        tituloElement.textContent = lang === 'es' ? "Pack no encontrado" : "Pack not found";
        descElement.textContent = lang === 'es' ? "Por favor, vuelve a la página de Packs y selecciona uno." : "Please return to the Packs page and select one.";
        if(btnComprar) {
            btnComprar.disabled = true;
            btnComprar.style.backgroundColor = '#ccc';
        }
    }
}

// Función para validar el formulario de compra
function validarCompra(event) {
    event.preventDefault();

    // 1. DETECTAR IDIOMA PARA ALERTAS
    const lang = localStorage.getItem('idioma') || 'es';

    // Diccionario de mensajes de error/éxito
    const mensajes = {
        es: {
            email: "El correo electrónico no es válido. Debe ser formato 'usuario@dominio.com'.",
            fechaVacia: "Introduce la fecha de caducidad.",
            tarjetaCaducada: "La tarjeta está caducada. Por favor usa una tarjeta válida.",
            cvv: "El CVV es inválido. Debe contener exactamente 3 números.",
            tarjetaNum: "El número de tarjeta parece incorrecto.",
            exitoUsuario: "¡Compra realizada con éxito, {nombre}! Disfruta de tu viaje.",
            exitoInvitado: "¡Compra realizada con éxito! (Modo Invitado)"
        },
        en: {
            email: "Invalid email address. Format must be 'user@domain.com'.",
            fechaVacia: "Please enter the expiration date.",
            tarjetaCaducada: "The card has expired. Please use a valid card.",
            cvv: "Invalid CVV. It must contain exactly 3 digits.",
            tarjetaNum: "Invalid card number.",
            exitoUsuario: "Purchase successful, {nombre}! Enjoy your trip.",
            exitoInvitado: "Purchase successful! (Guest Mode)"
        }
    };
    // Seleccionar mensajes según idioma
    const msgs = mensajes[lang];

    // Obtener valores
    const tarjeta = document.getElementById("num_tarjeta").value;
    const cvv = document.getElementById("cvv").value;
    const fechaCaducidad = document.getElementById("fecha_caducidad").value; 
    const email = document.getElementById("email_cliente").value;

    // VALIDACIONES
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert(msgs.email);
        return;
    }
    // Fecha de caducidad
    if (!fechaCaducidad) {
        alert(msgs.fechaVacia);
        return;
    }
    // Comparar fecha
    const [anioInput, mesInput] = fechaCaducidad.split('-').map(Number);
    const fechaActual = new Date(); // Fecha actual
    const anioActual = fechaActual.getFullYear(); // Año actual
    const mesActual = fechaActual.getMonth() + 1; // Mes actual (0-11, por eso +1)
    // Verificar si la tarjeta está caducada
    if (anioInput < anioActual || (anioInput === anioActual && mesInput < mesActual)) {
        alert(msgs.tarjetaCaducada);
        return;
    }
    // CVV: 3 dígitos
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) { // No son exactamente 3 dígitos, o contiene letras
        alert(msgs.cvv);
        return;
    }
    // Número de tarjeta: al menos 16 dígitos (sin espacios)
    const tarjetaLimpia = tarjeta.replace(/\s/g, '');
    if (tarjetaLimpia.length < 16 || isNaN(tarjetaLimpia)) {
        alert(msgs.tarjetaNum);
        return;
    }

    // PROCESAR COMPRA
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");

    // Si hay usuario activo, guardar la compra en su historial
    if (usuarioActivo) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
        
        // Obtenemos info del pack para guardarla en el usuario
        const params = new URLSearchParams(window.location.search);
        const idPack = params.get('id');
        const packObj = dbPacks && dbPacks[idPack] ? dbPacks[idPack] : null;
        
        // Guardamos el título en el idioma en que se compró (o preferiblemente en español por defecto)
        const tituloPack = packObj ? (packObj.titulo[lang] || packObj.titulo.es) : "Pack General";
        const precioPack = packObj ? packObj.precio : "??€";

        // Crear objeto de compra
        const nuevaCompra = {
            pack: tituloPack,
            precio: precioPack,
            fechaCompra: new Date().toLocaleDateString(),
            metodo: document.getElementById("metodo_pago").value
        };

        // Añadir compra al historial
        if (!datosUsuario.compras) datosUsuario.compras = [];
        datosUsuario.compras.push(nuevaCompra);
        localStorage.setItem("user_" + usuarioActivo, JSON.stringify(datosUsuario));
        // Mensaje de éxito personalizado
        alert(msgs.exitoUsuario.replace("{nombre}", datosUsuario.nombrePila || datosUsuario.nombre));
    } else {
        alert(msgs.exitoInvitado);
    }

    window.location.href = "home_no_session.html";
}