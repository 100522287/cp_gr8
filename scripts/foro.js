// LOS 18 TEMAS ORIGINALES DE TU FORO
const datosInicialesForo = [
    {
        id: 1, titulo: "¿Es seguro viajar a Egipto por libre en 2025?", autor: "ViajeroCurioso", fecha: "Hace 20 min", respuestas: 2, vistas: 342, categoria: "África",
        mensajes: [{ usuario: "Mochila_Trotamundos", texto: "Yo acabo de volver y es totalmente seguro, aunque recomiendo Uber para moverte por El Cairo." },
        { usuario: "Ana_Guides", texto: "Coincido. Solo ten cuidado con los vendedores en las pirámides, son muy insistentes." }]
    },
    {
        id: 2, titulo: "Busco compañeros para ruta por la Patagonia en Diciembre", autor: "Marta_Trails", fecha: "Hace 2 horas", respuestas: 1, vistas: 120, categoria: "Compañeros",
        mensajes: [{ usuario: "David_Hiker", texto: "¡Hola Marta! Yo estaré por allí del 10 al 25. ¿Qué ruta tienes pensada? Me interesa la W en Torres del Paine." }]
    },
    {
        id: 3, titulo: "Consejos para mochila de 40L (sin facturar en Ryanair)", autor: "LowCostKing", fecha: "Hace 5 horas", respuestas: 3, vistas: 1500, categoria: "Equipaje",
        mensajes: [{ usuario: "PackLight", texto: "La clave son los cubos de compresión. Te cabrá el doble de ropa." }, { usuario: "ViajeroCurioso", texto: "Yo uso la Osprey Farpoint 40 y nunca he tenido problemas en cabina." }, { usuario: "Sara_Fly", texto: "Ojo con los líquidos, últimamente están muy estrictos en Barajas." }]
    },
    {
        id: 4, titulo: "Mi experiencia con el visado de Vietnam online (E-Visa)", autor: "AnaTrotamundos", fecha: "Ayer", respuestas: 2, vistas: 89, categoria: "Visados",
        mensajes: [{ usuario: "VietnamFan", texto: "A mí me tardó 3 días laborables exactos." },
        { usuario: "Carlos_Wanderlust", texto: "Recordad imprimirla en papel." }]
    },
    {
        id: 5, titulo: "Presupuesto real para 15 días en Japón", autor: "OtakuViajero", fecha: "Ayer", respuestas: 2, vistas: 890, categoria: "Asia",
        mensajes: [{ usuario: "JapanLover", texto: "Calcula unos 2000€ con vuelos si vas a hostels." },
        { usuario: "SushiMaster", texto: "El JR Pass ha subido mucho de precio este año." }]
    },
    {
        id: 6, titulo: "Recomendación de seguro médico con deportes de riesgo", autor: "Climber88", fecha: "Hace 2 días", respuestas: 1, vistas: 405, categoria: "Seguros",
        mensajes: [{ usuario: "SafetyFirst", texto: "IATI Mochilero te cubre trekking hasta 5400 metros." }]
    },
    {
        id: 7, titulo: "Primera vez viajando sola a la India: Consejos de seguridad", autor: "LauraSoloTravel", fecha: "Hace 2 días", respuestas: 2, vistas: 1200, categoria: "Viajar Sola",
        mensajes: [{ usuario: "IndiaExpert", texto: "Viste de forma conservadora y evita salir sola muy tarde." },
        { usuario: "MariaViajera", texto: "Compra una tarjeta SIM local nada más llegar al aeropuerto." }]
    },
    {
        id: 8, titulo: "¿Tarjeta Revolut o Wise para pagar en el extranjero?", autor: "EconomistaNómada", fecha: "Hace 3 días", respuestas: 3, vistas: 2300, categoria: "Dinero",
        mensajes: [{ usuario: "FinanzasViajeras", texto: "Yo llevo las dos por si acaso una falla." },
        { usuario: "N26Fan", texto: "No olvidéis N26, a mí en Europa me funciona mejor." },
        { usuario: "EconomistaNómada", texto: "Gracias! Me haré la Revolut estándar para empezar." }]
    },
    {
        id: 9, titulo: "Ruta por las islas de Tailandia: ¿Krabi o Koh Samui?", autor: "BeachLover", fecha: "Hace 4 días", respuestas: 2, vistas: 650, categoria: "Asia",
        mensajes: [{ usuario: "ThaiAddict", texto: "Depende de la época. En verano europeo llueve menos en el Golfo (Samui)." },
        { usuario: "DiverBlue", texto: "Si te gusta bucear, vete directo a Koh Tao." }]
    },
    {
        id: 10, titulo: "Mejores ciudades para trabajar en remoto en Europa", autor: "LaptopLifestyle", fecha: "Hace 1 semana", respuestas: 2, vistas: 980, categoria: "Nómadas Digitales",
        mensajes: [{ usuario: "DigitalNomad_ES", texto: "Lisboa está genial pero se ha puesto carísima." },
        { usuario: "CoderTravel", texto: "Bansko en Bulgaria es muy barato." }]
    },
    {
        id: 11, titulo: "¡Ayuda! Me han perdido la maleta en Barajas", autor: "Desesperado99", fecha: "Hace 1 semana", respuestas: 1, vistas: 210, categoria: "Problemas",
        mensajes: [{ usuario: "AeroHelp", texto: "Tienes que ir al mostrador de la aerolínea ANTES de salir de la zona de equipajes." }]
    },
    {
        id: 12, titulo: "¿Alguien ha hecho el Transiberiano recientemente?", autor: "TrenesYMas", fecha: "Hace 2 semanas", respuestas: 1, vistas: 150, categoria: "Europa",
        mensajes: [{ usuario: "RusExpert", texto: "Ahora mismo está muy complicado por la situación política." }]
    },
    {
        id: 13, titulo: "Guía definitiva para comprar entradas a Machu Picchu", autor: "IncaFan", fecha: "Hace 2 semanas", respuestas: 2, vistas: 3300, categoria: "América",
        mensajes: [{ usuario: "PerúLover", texto: "Compradlas con al menos 3 meses de antelación en la web oficial." },
        { usuario: "ClimberPerú", texto: "Y si queréis subir al Huayna Picchu, 5 meses antes mínimo." }]
    },
    {
        id: 14, titulo: "Cuidado con la estafa del taxi en Estambul", autor: "AlertasViajeras", fecha: "Hace 3 semanas", respuestas: 2, vistas: 5600, categoria: "Seguridad",
        mensajes: [{ usuario: "TurquiaFan", texto: "A mí me intentaron cambiar los billetes. Usad siempre Uber." },
        { usuario: "IstanbulLocal", texto: "O el tranvía, funciona de maravilla." }]
    },
    {
        id: 15, titulo: "¿Qué cámara lleváis? ¿Reflex, Mirrorless o solo móvil?", autor: "FotoMochila", fecha: "Hace 1 mes", respuestas: 3, vistas: 4100, categoria: "Fotografía",
        mensajes: [{ usuario: "ProShooter", texto: "Yo me pasé a Mirrorless (Sony Alpha) por el peso." },
        { usuario: "LightTraveler", texto: "Sinceramente, con un iPhone 15 Pro vas sobrado." },
        { usuario: "FilmIsNotDead", texto: "Yo sigo llevando mi analógica de 35mm." }]
    },
    {
        id: 16, titulo: "Interrail Global Pass: ¿Merece la pena el pase de 1 mes?", autor: "EuroTrip2025", fecha: "Hace 1 mes", respuestas: 2, vistas: 2100, categoria: "Europa",
        mensajes: [{ usuario: "TrainMaster", "texto": "Depende de los países. En Francia y España pagas suplemento." },
        { usuario: "Backpacker_Joe", "texto": "Yo lo usé el verano pasado y ahorré mucho." }]
    },
    {
        id: 17, titulo: "Vacunas necesarias para el Amazonas brasileño", autor: "JungleBoy", fecha: "Hace 1 mes", respuestas: 1, vistas: 600, categoria: "Salud",
        mensajes: [{ usuario: "DrViajero", "texto": "Fiebre Amarilla es obligatoria." }]
    },
    {
        id: 18, titulo: "Hostels con mejor ambiente en Budapest", autor: "PartyTraveler", fecha: "Hace 2 meses", respuestas: 2, vistas: 3400, categoria: "Alojamiento",
        mensajes: [{ usuario: "BudaParty", "texto": "El Retox si quieres fiesta salvaje." },
        { usuario: "ChillGuy", "texto": "Yo prefiero el Wombats, es más limpio." }]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    inicializarForo();
    renderizarForo();
    configurarBotonNuevoTema();
});

// 1. Cargar datos (o inicializar si no existen en LS)
function inicializarForo() {
    if (!localStorage.getItem('foroData')) {
        localStorage.setItem('foroData', JSON.stringify(datosInicialesForo));
    }
}

// 2. Renderizar Foro
function renderizarForo() {
    const contenedor = document.getElementById('lista-temas-dinamica');
    if (!contenedor) return;

    const temas = JSON.parse(localStorage.getItem('foroData'));
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    let datosUsuario = null;

    if (usuarioActivo) {
        datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
    }

    let htmlContent = '';

    // Renderizamos (revertido para que lo nuevo salga arriba)
    temas.forEach((tema, index) => {
        // Generar HTML de mensajes
        let htmlMensajes = '';
        if (tema.mensajes && tema.mensajes.length > 0) {
            tema.mensajes.forEach(msg => {
                const estiloPropio = (datosUsuario && msg.usuario === datosUsuario.usuario)
                    ? 'border-left: 4px solid #0077B6; background-color: #F0F8FF;'
                    : '';

                htmlMensajes += `
                    <div class="mensaje-foro" style="${estiloPropio}">
                        <span class="mensaje-usuario">${msg.usuario} dice:</span>
                        <p class="mensaje-texto">${msg.texto}</p>
                    </div>
                `;
            });
        } else {
            htmlMensajes = '<div class="sin-respuestas">No hay respuestas todavía. ¡Sé el primero!</div>';
        }

        // Generar Área de Respuesta (Input o Botón Login)
        let areaRespuesta = '';
        if (usuarioActivo && datosUsuario) {
            areaRespuesta = `
                <div class="zona-respuesta-activa" style="margin-top:15px; border-top:1px dashed #ccc; padding-top:10px;">
                    <p style="font-size:0.9rem; margin-bottom:5px;">Responder como <strong>${datosUsuario.usuario}</strong>:</p>
                    <textarea id="texto-resp-${index}" rows="2" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ccc; margin-bottom:10px;" placeholder="Escribe tu respuesta..."></textarea>
                    <button onclick="enviarRespuesta(${index})" style="background-color:#FFB703; color:#003049; padding:8px 20px; border:none; border-radius:20px; cursor:pointer; font-weight:bold;">Enviar Respuesta</button>
                </div>
            `;
        } else {
            areaRespuesta = `
                <div class="zona-respuesta" style="text-align:center; padding:15px;">
                    <button onclick="irALogin()" style="background:none; border:2px solid #0077B6; color:#0077B6; padding:8px 20px; border-radius:20px; cursor:pointer; font-weight:bold;">🔒 Inicia sesión para responder</button>
                </div>
            `;
        }

        // Construir tarjeta
        htmlContent += `
            <div class="tema-item" id="tema-card-${index}">
                <div class="tema-cabecera" onclick="toggleAcordeon(${index})">
                    <div class="tema-info-principal">
                        <span class="tema-categoria">${tema.categoria}</span>
                        <h3 class="tema-titulo">${tema.titulo}</h3>
                        <div class="tema-meta">Por <span class="tema-autor">${tema.autor}</span> • ${tema.fecha}</div>
                    </div>
                    <div class="tema-stats">
                        <div class="stat-box"><span class="stat-numero">${tema.mensajes ? tema.mensajes.length : 0}</span><span class="stat-label">Respuestas</span></div>
                        <div class="stat-box"><span class="stat-numero">${tema.vistas}</span><span class="stat-label">Vistas</span></div>
                    </div>
                </div>
                
                <div class="contenedor-respuestas" id="detalle-tema-${index}" style="display:none; padding:20px; background:#f9f9f9; border-top:1px solid #eee;">
                    ${htmlMensajes}
                    ${areaRespuesta}
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;
}

// 3. Funciones del Foro
function toggleAcordeon(index) {
    const detalle = document.getElementById(`detalle-tema-${index}`);
    const card = document.getElementById(`tema-card-${index}`);

    if (detalle.style.display === 'none') {
        detalle.style.display = 'block';
        card.style.borderColor = '#0077B6';
    } else {
        detalle.style.display = 'none';
        card.style.borderColor = '#E0E0E0';
    }
}

function enviarRespuesta(index) {
    const texto = document.getElementById(`texto-resp-${index}`).value;
    if (texto.trim() === "") { alert("Escribe algo primero."); return; }

    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
    const temas = JSON.parse(localStorage.getItem('foroData'));

    if (!temas[index].mensajes) temas[index].mensajes = [];

    temas[index].mensajes.push({
        usuario: datosUsuario.usuario,
        texto: texto
    });

    // Guardar en LS y recargar
    localStorage.setItem('foroData', JSON.stringify(temas));
    renderizarForo();

    // Mantener abierto el que acabamos de editar
    setTimeout(() => toggleAcordeon(index), 50);
}

function configurarBotonNuevoTema() {
    const btn = document.getElementById('btn-crear-tema');
    btn.onclick = () => {
        if (sessionStorage.getItem("usuarioActivo")) {
            const titulo = prompt("Título del tema:");
            if (!titulo) return;
            const cat = prompt("Categoría:", "General");

            const temas = JSON.parse(localStorage.getItem('foroData'));
            const usuario = JSON.parse(localStorage.getItem("user_" + sessionStorage.getItem("usuarioActivo")));

            temas.unshift({ // Añadir al principio
                id: Date.now(),
                titulo: titulo,
                autor: usuario.usuario,
                fecha: "Ahora mismo",
                categoria: cat,
                vistas: 0,
                mensajes: []
            });

            localStorage.setItem('foroData', JSON.stringify(temas));
            renderizarForo();
        } else {
            irALogin();
        }
    };
}

function irALogin() {
    if (confirm("Inicia sesión para participar.")) window.location.href = "login.html";
}