// ============================================
// BASE DE DATOS DE PAQUETES (Multilingüe)
// ============================================
const dbPacks = [
    {
        id: "hungria",
        titulo: { es: "Europa Imperial (Viena y Budapest)", en: "Imperial Europe (Vienna & Budapest)" },
        descripcion: { 
            es: "Sumérgete en la grandeza del Imperio Austrohúngaro. Visita palacios imperiales, baños termales y disfruta de la mejor gastronomía centroeuropea.", 
            en: "Immerse yourself in the greatness of the Austro-Hungarian Empire. Visit imperial palaces, thermal baths, and enjoy the best Central European gastronomy." 
        },
        precio: "950€",
        imagen: "images/budapest.jpg",
        pais: "hungria",
        estrellas: "4",
        tipo: "ciudad",
        detalles: {
            es: ["8 días / 7 noches", "Tren alta velocidad", "Hoteles 4* céntricos", "Guía en español", "Desayuno incluido"],
            en: ["8 days / 7 nights", "High-speed train", "Central 4* Hotels", "Spanish/English Guide", "Breakfast included"]
        }
    },
    {
        id: "italia",
        titulo: { es: "Renacimiento Italiano (Florencia y Roma)", en: "Italian Renaissance (Florence & Rome)" },
        descripcion: { 
            es: "Recorre la cuna del Renacimiento y el corazón de la antigua Roma. Arte, historia y la mejor cocina italiana te esperan.", 
            en: "Explore the cradle of the Renaissance and the heart of Ancient Rome. Art, history, and the best Italian cuisine await you." 
        },
        precio: "1.120€",
        imagen: "images/roma.jpg",
        pais: "italia",
        estrellas: "3",
        tipo: "ciudad",
        detalles: {
            es: ["9 días / 8 noches", "Bed & Breakfast", "Museos Vaticanos", "Galería Uffizi", "Tours guiados"],
            en: ["9 days / 8 nights", "Bed & Breakfast", "Vatican Museums", "Uffizi Gallery", "Guided Tours"]
        }
    },
    {
        id: "japon",
        titulo: { es: "Magia Asiática (Tokio y Kioto)", en: "Asian Magic (Tokyo & Kyoto)" },
        descripcion: { 
            es: "Explora el contraste entre tradición y modernidad. Desde templos ancestrales hasta la vibrante vida urbana de Tokio.", 
            en: "Explore the contrast between tradition and modernity. From ancestral temples to the vibrant urban life of Tokyo." 
        },
        precio: "2.400€",
        imagen: "images/kioto.jpg",
        pais: "japon",
        estrellas: "5",
        tipo: "ciudad",
        detalles: {
            es: ["15 días / 14 noches", "Vuelos multidestino", "Ryokan en Kioto", "JR Pass incluido", "Ceremonia del té"],
            en: ["15 days / 14 nights", "Multidestination flights", "Ryokan in Kyoto", "JR Pass included", "Tea ceremony"]
        }
    },
    {
        id: "peru",
        titulo: { es: "Aventura Andina (Cuzco y Machu Picchu)", en: "Andean Adventure (Cusco & Machu Picchu)" },
        descripcion: { 
            es: "Descubre las maravillas del Imperio Inca. Camina por el Camino Inca y maravíllate con Machu Picchu al amanecer.", 
            en: "Discover the wonders of the Inca Empire. Hike the Inca Trail and marvel at Machu Picchu at sunrise." 
        },
        precio: "1.850€",
        imagen: "images/cuzco.jpg",
        pais: "peru",
        estrellas: "3",
        tipo: "montana aventura",
        detalles: {
            es: ["11 días / 10 noches", "Vuelos incluidos", "Machu Picchu", "Camino Inca 2 días", "Lago Titicaca"],
            en: ["11 days / 10 nights", "Flights included", "Machu Picchu", "Inca Trail 2 days", "Lake Titicaca"]
        }
    },
    {
        id: "kenia",
        titulo: { es: "Safari en Kenia", en: "Safari in Kenya" },
        descripcion: { 
            es: "Vive la experiencia de ver los Big Five en su hábitat natural. Safari fotográfico en los mejores parques nacionales de África.", 
            en: "Live the experience of seeing the Big Five in their natural habitat. Photo safari in Africa's best national parks." 
        },
        precio: "2.150€",
        imagen: "images/safari.webp",
        pais: "kenia",
        estrellas: "4",
        tipo: "aventura",
        detalles: {
            es: ["10 días / 9 noches", "Rutas en 4x4 privado", "Camping de lujo", "Parque Masai Mara", "Visita poblado Masai"],
            en: ["10 days / 9 nights", "Private 4x4 routes", "Luxury Camping", "Masai Mara Park", "Masai village visit"]
        }
    },
    {
        id: "eeuu",
        titulo: { es: "Costa Oeste USA", en: "USA West Coast" },
        descripcion: { 
            es: "Descubre la costa del Pacífico desde San Francisco hasta Los Ángeles. Playas, montañas y ciudades icónicas.", 
            en: "Discover the Pacific coast from San Francisco to Los Angeles. Beaches, mountains, and iconic cities." 
        },
        precio: "1.680€",
        imagen: "images/hollywood.jpg",
        pais: "eeuu",
        estrellas: "4",
        tipo: "ciudad playa",
        detalles: {
            es: ["12 días / 11 noches", "Ruta en coche", "Hoteles 4* seleccionados", "Golden Gate", "Hollywood y Santa Mónica"],
            en: ["12 days / 11 nights", "Road trip", "Selected 4* hotels", "Golden Gate", "Hollywood and Santa Monica"]
        }
    },
    {
        id: "marruecos",
        titulo: { es: "La Perla Azul (Basado en Chefchaouen)", en: "The Blue Pearl (Based on Chefchaouen)" },
        descripcion: { 
            es: "Descubre la ciudad más fotogénica de Marruecos. Pasea por sus calles azules y sumérgete en la auténtica cultura bereber.", 
            en: "Discover Morocco's most photogenic city. Stroll through its blue streets and immerse yourself in authentic Berber culture." 
        },
        precio: "720€",
        imagen: "images/chefchaouen.jpg",
        pais: "marruecos",
        estrellas: "3",
        tipo: "ciudad",
        detalles: {
            es: ["5 días / 4 noches", "Vuelos a Tánger", "Traslados privados", "Alojamiento (Riad)", "Desayunos incluidos", "Tour guiado"],
            en: ["5 days / 4 nights", "Flights to Tangier", "Private transfers", "Accommodation (Riad)", "Breakfasts included", "Guided tour"]
        }
    },
    {
        id: "nueva-zelanda",
        titulo: { es: "Aventura en las Antípodas (Queenstown)", en: "Adventure Down Under (Queenstown)" },
        descripcion: { 
            es: "Vive la capital de la aventura de Nueva Zelanda. Paisajes épicos, deportes extremos y naturaleza en estado puro.", 
            en: "Experience New Zealand's adventure capital. Epic landscapes, extreme sports, and nature in its purest form." 
        },
        precio: "2.100€",
        imagen: "images/queenstown.jpg",
        pais: "nueva-zelanda",
        estrellas: "4",
        tipo: "aventura montana",
        detalles: {
            es: ["8 días / 7 noches", "Apartamento con vistas", "Salto Bungee", "Crucero Milford Sound", "Alquiler coche (SUV)", "Sin vuelo internacional"],
            en: ["8 days / 7 nights", "Apartment with views", "Bungee Jumping", "Milford Sound Cruise", "Car rental (SUV)", "No intl. flight"]
        }
    },
    {
        id: "republica-checa",
        titulo: { es: "Cuentos de Bohemia (Praga)", en: "Bohemian Tales (Prague)" },
        descripcion: { 
            es: "Sumérgete en la magia de Praga, la ciudad de las cien torres. Arquitectura gótica, cerveza bohemia y un encanto medieval único.", 
            en: "Immerse yourself in the magic of Prague, the city of a hundred spires. Gothic architecture, Bohemian beer, and unique medieval charm." 
        },
        precio: "1.680€",
        imagen: "images/praga.webp",
        pais: "republica-checa",
        estrellas: "5",
        tipo: "ciudad",
        detalles: {
            es: ["6 días / 5 noches", "Vuelos directos", "Hotel céntrico 5*", "Paseo en barco", "Castillo de Praga", "Tour Ciudad Vieja"],
            en: ["6 days / 5 nights", "Direct flights", "Central 5* Hotel", "Boat trip", "Prague Castle", "Old Town Tour"]
        }
    }
];

// ============================================
// LÓGICA DE LA PÁGINA
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // 1. Cargar los paquetes en el DOM
    cargarPacks();

    // 2. Inicializar lógica de filtros (Toggle Móvil)
    inicializarToggleMobile();

    // 3. Inicializar listeners de filtros
    inicializarFiltros();
});

// Función para cargar los paquetes desde la "base de datos" al DOM
function cargarPacks() {
    // CONTENEDOR PRINCIPAL
    const contenedor = document.getElementById("listaPaquetes");
    if (!contenedor) return;

    // DETECTAR IDIOMA
    const lang = localStorage.getItem('idioma') || 'es';
    const textoDesde = lang === 'es' ? 'Desde' : 'From';
    const textoComprar = lang === 'es' ? 'Comprar' : 'Buy Now';

    // GENERAR HTML
    let htmlContent = "";

    // Recorrer cada paquete
    dbPacks.forEach(pack => {
        // Generar lista de características (li) según idioma
        const detalles = pack.detalles[lang] || pack.detalles.es;
        const detallesHtml = detalles.map(d => `<li>${d}</li>`).join("");

        // Seleccionar textos
        const titulo = pack.titulo[lang] || pack.titulo.es;
        const descripcion = pack.descripcion[lang] || pack.descripcion.es;

        // Construir HTML de la tarjeta
        htmlContent += `
            <article class="pack-item" data-pais="${pack.pais}" data-estrellas="${pack.estrellas}" data-tipo="${pack.tipo}">
                <div class="pack-imagen">
                    <img src="${pack.imagen}" alt="${titulo}" loading="lazy">
                    <span class="etiqueta-precio">${textoDesde} ${pack.precio}</span>
                </div>
                <div class="pack-info">
                    <h3>${titulo}</h3>
                    <p class="pack-descripcion">${descripcion}</p>
                    <ul class="pack-detalles">
                        ${detallesHtml}
                    </ul>
                    <a href="compra.html?id=${pack.id}" class="btn-comprar">${textoComprar}</a>
                </div>
            </article>
        `;
    });

    // Insertar en el DOM
    contenedor.innerHTML = htmlContent;
}

// Función para inicializar el toggle de filtros en móvil
function inicializarToggleMobile() {
    // Obtener elementos
    const btnToggle = document.getElementById("btnToggleFiltros");
    const panelMobile = document.getElementById("panelFiltrosMobile");
    
    // Añadir listener
    if (btnToggle && panelMobile) {
        btnToggle.addEventListener("click", function() {
            btnToggle.classList.toggle("active");
            panelMobile.classList.toggle("open");
        });
    }
}

// Función para inicializar los listeners de los filtros
function inicializarFiltros() {
    // Listeners para checkboxes Desktop (tiempo real)
    document.querySelectorAll('.panel-filtros-lateral input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener("change", aplicarFiltros);
    });

    // Botón Aplicar (Móvil)
    const btnAplicar = document.getElementById("btnAplicarFiltros");
    if (btnAplicar) {
        btnAplicar.addEventListener("click", function() {
            sincronizarCheckboxes("mobile-to-desktop");
            aplicarFiltros();
            // Cerrar panel móvil
            document.getElementById("panelFiltrosMobile").classList.remove("open");
            document.getElementById("btnToggleFiltros").classList.remove("active");
        });
    }

    // Botones Limpiar
    const btnLimpiarDesktop = document.getElementById("btnLimpiarFiltrosDesktop");
    const btnLimpiarMobile = document.getElementById("btnLimpiarFiltros");

    // Función común para limpiar todos los filtros
    const limpiarTodo = () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        aplicarFiltros();
    };

    if (btnLimpiarDesktop) btnLimpiarDesktop.addEventListener("click", limpiarTodo);
    if (btnLimpiarMobile) btnLimpiarMobile.addEventListener("click", limpiarTodo);

    // Sincronización básica inicial (Mobile -> Desktop al cambiar)
    document.querySelectorAll('.panel-filtros-mobile input[type="checkbox"]').forEach((cbMobile, index) => {
        cbMobile.addEventListener("change", () => {
            const cbDesktop = document.querySelectorAll('.panel-filtros-lateral input[type="checkbox"]')[index];
            if (cbDesktop) cbDesktop.checked = cbMobile.checked;
        });
    });
}

// Función para aplicar los filtros seleccionados
function aplicarFiltros() {
    const paquetesEnDom = document.querySelectorAll(".pack-item");
    
    // Obtener valores marcados
    const paises = obtenerValoresMarcados("pais");
    const estrellas = obtenerValoresMarcados("estrellas");
    const tipos = obtenerValoresMarcados("tipo");

    // Determinar si hay algún filtro activo
    const hayFiltros = paises.length > 0 || estrellas.length > 0 || tipos.length > 0;

    // Filtrar paquetes
    paquetesEnDom.forEach(pack => {
        if (!hayFiltros) {
            pack.classList.remove("hidden");
            return;
        }

        // Obtener datos del paquete
        const pPais = pack.dataset.pais;
        const pEstrellas = pack.dataset.estrellas;
        const pTipos = pack.dataset.tipo.split(" "); 

        // Lógica de filtrado
        const matchPais = paises.length === 0 || paises.includes(pPais);
        const matchEstrellas = estrellas.length === 0 || estrellas.includes(pEstrellas);
        const matchTipo = tipos.length === 0 || tipos.some(t => pTipos.includes(t));

        // Mostrar u ocultar según coincidencias
        if (matchPais && matchEstrellas && matchTipo) {
            pack.classList.remove("hidden");
        } else {
            pack.classList.add("hidden");
        }
    });
}

// Función para obtener los valores marcados de un grupo de checkboxes
function obtenerValoresMarcados(dataFilter) {
    return Array.from(document.querySelectorAll(`.panel-filtros-lateral input[data-filter="${dataFilter}"]:checked`))
        .map(input => input.value);
}

// Función para sincronizar checkboxes entre móvil y desktop
function sincronizarCheckboxes(direccion) {
    const mobileCBS = document.querySelectorAll('.panel-filtros-mobile input[type="checkbox"]');
    const desktopCBS = document.querySelectorAll('.panel-filtros-lateral input[type="checkbox"]');

    // Móvil a Desktop
    if (direccion === "mobile-to-desktop") {
        mobileCBS.forEach((cb, i) => { if(desktopCBS[i]) desktopCBS[i].checked = cb.checked; });
    }
}