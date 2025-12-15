// LOS 18 TEMAS COMPLETOS (Base de datos inicial)
const datosInicialesForo = [
    {
        id: 1, titulo: "¿Es seguro viajar a Egipto por libre en 2025?", autor: "ViajeroCurioso", fecha: "Hace 20 min", respuestas: 2, vistas: 342, categoria: "África",
        mensajes: [{ usuario: "Mochila_Trotamundos", texto: "Yo acabo de volver y es totalmente seguro, aunque recomiendo Uber para moverte por El Cairo." }, { usuario: "Ana_Guides", texto: "Coincido. Solo ten cuidado con los vendedores en las pirámides, son muy insistentes. Di 'La Shukran' (No gracias) y sigue andando." }]
    },
    {
        id: 2, titulo: "Busco compañeros para ruta por la Patagonia en Diciembre", autor: "Marta_Trails", fecha: "Hace 2 horas", respuestas: 1, vistas: 120, categoria: "Compañeros",
        mensajes: [{ usuario: "David_Hiker", texto: "¡Hola Marta! Yo estaré por allí del 10 al 25. ¿Qué ruta tienes pensada? Me interesa la W en Torres del Paine." }]
    },
    {
        id: 3, titulo: "Consejos para mochila de 40L (sin facturar en Ryanair)", autor: "LowCostKing", fecha: "Hace 5 horas", respuestas: 3, vistas: 1500, categoria: "Equipaje",
        mensajes: [{ usuario: "PackLight", texto: "La clave son los cubos de compresión. Te cabrá el doble de ropa." }, { usuario: "ViajeroCurioso", texto: "Yo uso la Osprey Farpoint 40 y nunca he tenido problemas en cabina, entra justa pero entra." }, { usuario: "Sara_Fly", texto: "Ojo con los líquidos, últimamente están muy estrictos en Barajas. Todo en bolsa transparente de 1L." }]
    },
    {
        id: 4, titulo: "Mi experiencia con el visado de Vietnam online (E-Visa)", autor: "AnaTrotamundos", fecha: "Ayer", respuestas: 2, vistas: 89, categoria: "Visados",
        mensajes: [{ usuario: "VietnamFan", texto: "A mí me tardó 3 días laborables exactos. Cuidado con poner bien el nombre completo o te la deniegan." }, { usuario: "Carlos_Wanderlust", texto: "Recordad imprimirla en papel, a veces en la frontera no aceptan enseñarla en el móvil." }]
    },
    {
        id: 5, titulo: "Presupuesto real para 15 días en Japón", autor: "OtakuViajero", fecha: "Ayer", respuestas: 2, vistas: 890, categoria: "Asia",
        mensajes: [{ usuario: "JapanLover", texto: "Calcula unos 2000€ con vuelos si vas a hostels y comes en conbinis (7-Eleven, Lawson...)." }, { usuario: "SushiMaster", texto: "El JR Pass ha subido mucho de precio este año, usa la calculadora de Hyperdia para ver si te compensa o mejor comprar billetes sueltos." }]
    },
    {
        id: 6, titulo: "Recomendación de seguro médico con deportes de riesgo", autor: "Climber88", fecha: "Hace 2 días", respuestas: 1, vistas: 405, categoria: "Seguros",
        mensajes: [{ usuario: "SafetyFirst", texto: "IATI Mochilero te cubre trekking hasta 5400 metros y rescate en helicóptero. Es el que yo uso para Nepal." }]
    },
    {
        id: 7, titulo: "Primera vez viajando sola a la India: Consejos de seguridad", autor: "LauraSoloTravel", fecha: "Hace 2 días", respuestas: 2, vistas: 1200, categoria: "Viajar Sola",
        mensajes: [{ usuario: "IndiaExpert", texto: "Viste de forma conservadora (hombros y rodillas cubiertos) y evita salir sola muy tarde por zonas no turísticas." }, { usuario: "MariaViajera", texto: "Compra una tarjeta SIM local nada más llegar al aeropuerto, es vital tener internet para pedir Uber/Ola y ver mapas." }]
    },
    {
        id: 8, titulo: "¿Tarjeta Revolut o Wise para pagar en el extranjero?", autor: "EconomistaNómada", fecha: "Hace 3 días", respuestas: 3, vistas: 2300, categoria: "Dinero",
        mensajes: [{ usuario: "FinanzasViajeras", texto: "Yo llevo las dos por si acaso una falla. Revolut para pagar con tarjeta y Wise para transferencias grandes." }, { usuario: "N26Fan", texto: "No olvidéis N26, a mí en Europa me funciona mejor que Revolut." }, { usuario: "EconomistaNómada", texto: "Gracias! Me haré la Revolut estándar para empezar." }]
    },
    {
        id: 9, titulo: "Ruta por las islas de Tailandia: ¿Krabi o Koh Samui?", autor: "BeachLover", fecha: "Hace 4 días", respuestas: 2, vistas: 650, categoria: "Asia",
        mensajes: [{ usuario: "ThaiAddict", texto: "Depende de la época. En verano europeo llueve menos en el Golfo (Samui/Tao). En invierno mejor Krabi/Phuket." }, { usuario: "DiverBlue", texto: "Si te gusta bucear, vete directo a Koh Tao (cerca de Samui)." }]
    },
    {
        id: 10, titulo: "Mejores ciudades para trabajar en remoto en Europa", autor: "LaptopLifestyle", fecha: "Hace 1 semana", respuestas: 2, vistas: 980, categoria: "Nómadas Digitales",
        mensajes: [{ usuario: "DigitalNomad_ES", texto: "Lisboa está genial pero se ha puesto carísima. Prueba Las Palmas de Gran Canaria, hay muchísima comunidad." }, { usuario: "CoderTravel", texto: "Bansko en Bulgaria es muy barato y está lleno de coworkings." }]
    },
    {
        id: 11, titulo: "¡Ayuda! Me han perdido la maleta en Barajas", autor: "Desesperado99", fecha: "Hace 1 semana", respuestas: 1, vistas: 210, categoria: "Problemas",
        mensajes: [{ usuario: "AeroHelp", texto: "Tienes que ir al mostrador de la aerolínea ANTES de salir de la zona de equipajes y pedir el PIR (Parte de Irregularidad). Sin eso no podrás reclamar." }]
    },
    {
        id: 12, titulo: "¿Alguien ha hecho el Transiberiano recientemente?", autor: "TrenesYMas", fecha: "Hace 2 semanas", respuestas: 1, vistas: 150, categoria: "Europa",
        mensajes: [{ usuario: "RusExpert", texto: "Ahora mismo está muy complicado por la situación política y los visados. Mejor mira el Interrail por los Balcanes si quieres aventura en tren." }]
    },
    {
        id: 13, titulo: "Guía definitiva para comprar entradas a Machu Picchu", autor: "IncaFan", fecha: "Hace 2 semanas", respuestas: 2, vistas: 3300, categoria: "América",
        mensajes: [{ usuario: "PerúLover", texto: "Compradlas con al menos 3 meses de antelación en la web oficial del gobierno. Se agotan volando." }, { usuario: "ClimberPerú", texto: "Y si queréis subir al Huayna Picchu, 5 meses antes mínimo." }]
    },
    {
        id: 14, titulo: "Cuidado con la estafa del taxi en Estambul", autor: "AlertasViajeras", fecha: "Hace 3 semanas", respuestas: 2, vistas: 5600, categoria: "Seguridad",
        mensajes: [{ usuario: "TurquiaFan", texto: "Totalmente. A mí me intentaron cambiar los billetes diciendo que les di uno falso. Usad siempre Uber o BiTaksi." }, { usuario: "IstanbulLocal", texto: "O el tranvía, que funciona de maravilla y evita el tráfico horrible." }]
    },
    {
        id: 15, titulo: "¿Qué cámara lleváis? ¿Reflex, Mirrorless o solo móvil?", autor: "FotoMochila", fecha: "Hace 1 mes", respuestas: 3, vistas: 4100, categoria: "Fotografía",
        mensajes: [{ usuario: "ProShooter", texto: "Yo me pasé a Mirrorless (Sony Alpha) por el peso. La espalda lo agradece." }, { usuario: "LightTraveler", texto: "Sinceramente, con un iPhone 15 Pro o un Pixel 8 vas sobrado para Instagram." }, { usuario: "FilmIsNotDead", texto: "Yo sigo llevando mi analógica de 35mm. La magia es distinta." }]
    },
    {
        id: 16, titulo: "Interrail Global Pass: ¿Merece la pena el pase de 1 mes?", autor: "EuroTrip2025", fecha: "Hace 1 mes", respuestas: 2, vistas: 2100, categoria: "Europa",
        mensajes: [{ usuario: "TrainMaster", "texto": "Depende de los países. En Francia y España pagas mucho suplemento de reserva. En Alemania y Suiza es una gozada." }, { usuario: "Backpacker_Joe", "texto": "Yo lo usé el verano pasado y ahorré mucho, sobre todo en los trenes nocturnos." }]
    },
    {
        id: 17, titulo: "Vacunas necesarias para el Amazonas brasileño", autor: "JungleBoy", fecha: "Hace 1 mes", respuestas: 1, vistas: 600, categoria: "Salud",
        mensajes: [{ usuario: "DrViajero", "texto": "Fiebre Amarilla es obligatoria (lleva el carnet internacional). También recomendada Tifoidea y Hepatitis A." }]
    },
    {
        id: 18, titulo: "Hostels con mejor ambiente en Budapest", autor: "PartyTraveler", fecha: "Hace 2 meses", respuestas: 2, vistas: 3400, categoria: "Alojamiento",
        mensajes: [{ usuario: "BudaParty", "texto": "El Retox si quieres fiesta salvaje. El Vitae si quieres fiesta pero poder dormir algo." }, { usuario: "ChillGuy", "texto": "Yo prefiero el Wombats, es más limpio y tipo hotel, aunque menos loco." }]
    }
];
// INICIALIZACIÓN AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    inicializarForo();
    renderizarForo();
    configurarBotonNuevoTema();
});

// FUNCION PARA INICIALIZAR El FORO
function inicializarForo() {
    const datosGuardados = localStorage.getItem('foroData');

    // Si no hay datos, o si los datos guardados son menos que los iniciales (por versiones antiguas), reseteamos
    if (!datosGuardados || JSON.parse(datosGuardados).length < datosInicialesForo.length) {
        console.log("Actualizando base de datos del foro...");
        localStorage.setItem('foroData', JSON.stringify(datosInicialesForo));
    }
}

// Renderizar Foro
function renderizarForo() {
    // Verificación del contenedor
    const contenedor = document.getElementById('lista-temas-dinamica');
    if (!contenedor) return;
    // Cargar datos del foro
    const temas = JSON.parse(localStorage.getItem('foroData'));
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    let datosUsuario = null;
    // Cargar datos del usuario activo si hay sesión
    if (usuarioActivo) {
        datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
    }

    let htmlContent = '';

    // Renderizamos (revertido para que lo nuevo salga arriba)
    temas.slice().reverse().forEach((tema) => {
        // Calcular índice real en el array original
        const indexReal = temas.indexOf(tema);

        // Generar HTML de mensajes
        let htmlMensajes = '';
        if (tema.mensajes && tema.mensajes.length > 0) {
            tema.mensajes.forEach((msg, indexMsg) => { // Añadimos indexMsg

                const esPropio = (datosUsuario && msg.usuario === datosUsuario.usuario);
                const estiloPropio = esPropio
                    ? 'border-left: 4px solid #0077B6; background-color: #F0F8FF;'
                    : '';

                // BOTÓN ELIMINAR (Solo si es mensaje propio)
                let botonEliminar = '';
                if (esPropio) {
                    botonEliminar = `
                        <button onclick="eliminarRespuesta(${indexReal}, ${indexMsg})" 
                                style="float: right; background: none; border: none; color: #d00000; cursor: pointer; font-size: 0.9rem; margin-top: -5px;" 
                                title="Eliminar respuesta">
                            🗑️
                        </button>
                    `;
                }

                htmlMensajes += `
                    <div class="mensaje-foro" style="${estiloPropio}">
                        ${botonEliminar}
                        <span class="mensaje-usuario">${msg.usuario} dice:</span>
                        <p class="mensaje-texto">${msg.texto}</p>
                        <div style="clear:both"></div> </div>
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
                    <textarea id="texto-resp-${indexReal}" rows="2" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ccc; margin-bottom:10px;" placeholder="Escribe tu respuesta..."></textarea>
                    <button onclick="enviarRespuesta(${indexReal})" style="background-color:#FFB703; color:#003049; padding:8px 20px; border:none; border-radius:20px; cursor:pointer; font-weight:bold;">Enviar</button>
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
            <div class="tema-item" id="tema-card-${indexReal}">
                <div class="tema-cabecera" onclick="toggleAcordeon(${indexReal})">
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
                
                <div class="contenedor-respuestas" id="detalle-tema-${indexReal}" style="display:none; padding:20px; background:#f9f9f9; border-top:1px solid #eee;">
                    ${htmlMensajes}
                    ${areaRespuesta}
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;
}

// Función para abrir/cerrar acordeón
function toggleAcordeon(index) {
    const detalle = document.getElementById(`detalle-tema-${index}`);
    const card = document.getElementById(`tema-card-${index}`);
    // Alternar visibilidad
    if (detalle.style.display === 'none' || detalle.style.display === '') { // Si está cerrado
        detalle.style.display = 'block';
        card.style.borderColor = '#0077B6';
    } else {  // Si está abierto
        detalle.style.display = 'none';
        card.style.borderColor = '#E0E0E0';
    }
}
// Función para enviar respuesta
function enviarRespuesta(indexTema) {
    // Obtener texto
    const texto = document.getElementById(`texto-resp-${indexTema}`).value;
    if (texto.trim() === "") { alert("El mensaje no puede estar vacío"); return; }
    // Obtener datos usuario y foro
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
    const temas = JSON.parse(localStorage.getItem('foroData'));
    // Añadir mensaje
    if (!temas[indexTema].mensajes) temas[indexTema].mensajes = [];
    // Añadir el nuevo mensaje al array de mensajes del tema
    temas[indexTema].mensajes.push({
        usuario: datosUsuario.usuario,
        texto: texto
    });

    // Guardar en LS y recargar
    localStorage.setItem('foroData', JSON.stringify(temas));

    alert("Respuesta publicada.");
    renderizarForo();

    // Mantener abierto el que acabamos de editar
    setTimeout(() => toggleAcordeon(indexTema), 50);
}

// FUNCIÓN PARA ELIMINAR
function eliminarRespuesta(indexTema, indexMsg) {
    if (!confirm("¿Seguro que quieres eliminar tu respuesta? Esta acción no se puede deshacer.")) return;

    const temas = JSON.parse(localStorage.getItem('foroData'));

    // Eliminar el mensaje del array
    temas[indexTema].mensajes.splice(indexMsg, 1);

    // Guardar cambios
    localStorage.setItem('foroData', JSON.stringify(temas));

    // Recargar vista
    renderizarForo();

    // Mantener abierto el tema
    setTimeout(() => toggleAcordeon(indexTema), 50);
}
// Configurar botón de nuevo tema
function configurarBotonNuevoTema() {
    // Verificación del botón
    const btn = document.getElementById('btn-crear-tema');
    btn.onclick = () => {
        // Verificar sesión
        if (sessionStorage.getItem("usuarioActivo")) {
            const titulo = prompt("Título del tema:");
            if (!titulo) return;
            const cat = prompt("Categoría:", "General");
            // Añadir nuevo tema
            const temas = JSON.parse(localStorage.getItem('foroData'));
            const usuario = JSON.parse(localStorage.getItem("user_" + sessionStorage.getItem("usuarioActivo")));
            // Crear nuevo tema
            temas.push({
                id: Date.now(), titulo: titulo, autor: usuario.usuario, fecha: "Ahora mismo", categoria: cat, vistas: 0, mensajes: []
            });
            // Guardar y recargar
            localStorage.setItem('foroData', JSON.stringify(temas));
            renderizarForo();
        } else {
            irALogin();
        }
    };
}

// Función para redirigir al login
function irALogin() {
    if (confirm("Necesitas iniciar sesión para participar. ¿Ir al login?")) window.location.href = "login.html";
}