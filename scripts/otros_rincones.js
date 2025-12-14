// --- BASE DE DATOS COMPLETA ---
const dbRincones = [
    // --- EUROPA ---
    { id: 1, titulo: "Viena, Austria", descripcion: "Ciudad imperial con museos y música clásica a cada paso. El Palacio de Schönbrunn y la Ringstrasse condensan el barroco.", imagen: "https://images.unsplash.com/photo-1731223832507-ebe5373129e6?auto=format&fit=crop&q=60&w=500", likes: 340 },
    { id: 2, titulo: "Brujas, Bélgica", descripcion: "Centro medieval perfectamente conservado, canales bordeados de árboles y plazas adoquinadas como el Markt.", imagen: "https://plus.unsplash.com/premium_photo-1661963659103-9602b3811297?auto=format&fit=crop&q=60&w=500", likes: 520 },
    { id: 3, titulo: "Copenhague, Dinamarca", descripcion: "Equilibrio entre diseño contemporáneo y tradición nórdica. Nyhavn, Tívoli y barrios ciclistas muestran una ciudad humana.", imagen: "https://plus.unsplash.com/premium_photo-1691414363231-836e2e1bf0ed?auto=format&fit=crop&q=60&w=500", likes: 210 },
    { id: 4, titulo: "Liubliana, Eslovenia", descripcion: "Capital pequeña y escénica, con casco peatonal, cafés junto al río y el castillo en lo alto.", imagen: "https://images.unsplash.com/photo-1611576191056-3e6696029388?auto=format&fit=crop&q=60&w=500", likes: 180 },
    { id: 5, titulo: "Barcelona, España", descripcion: "Modernismo de Gaudí, mar y montaña en un mismo plano. La Sagrada Familia y el Park Güell conviven con la vida de barrio.", imagen: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?auto=format&fit=crop&q=60&w=500", likes: 1250 },
    { id: 6, titulo: "Sevilla, España", descripcion: "Casco histórico monumental, patios y azulejos. El Alcázar, la Catedral y el barrio de Santa Cruz con cultura de tapas.", imagen: "https://images.unsplash.com/photo-1559564477-6e8582270002?auto=format&fit=crop&q=60&w=500", likes: 980 },
    { id: 7, titulo: "Tallin, Estonia", descripcion: "Ciudad vieja medieval amurallada, torres y tejados de colores con vistas al Báltico.", imagen: "https://images.unsplash.com/photo-1709862366377-54b16f3e51f9?auto=format&fit=crop&q=60&w=500", likes: 300 },
    { id: 8, titulo: "París, Francia", descripcion: "Romance urbano: Sena, bulevares y museos icónicos. Barrios con identidad propia y cafés a pie de calle.", imagen: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?auto=format&fit=crop&q=60&w=500", likes: 2100 },
    { id: 9, titulo: "Budapest, Hungría", descripcion: "Arquitectura Art Nouveau, baños termales y paseos nocturnos sobre el Danubio. El Parlamento brilla al caer la tarde.", imagen: "https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?auto=format&fit=crop&q=60&w=500", likes: 870 },
    { id: 10, titulo: "Florencia, Italia", descripcion: "Cuna del Renacimiento: Duomo, Uffizi y artesanías en el Oltrarno. Una ciudad-museo viva.", imagen: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?auto=format&fit=crop&q=60&w=500", likes: 1400 },
    { id: 11, titulo: "Roma, Italia", descripcion: "La 'Ciudad Eterna' combina ruinas clásicas, plazas barrocas y vida de barrio. Del Panteón a la Fontana di Trevi.", imagen: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=60&w=500", likes: 2300 },
    { id: 12, titulo: "Venecia, Italia", descripcion: "Sin coches y con un trazado acuático único. Canales, palacios y puentes conectan islas de pura contemplación.", imagen: "https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?auto=format&fit=crop&q=60&w=500", likes: 1950 },
    { id: 13, titulo: "La Valeta, Malta", descripcion: "Fortificada y barroca, con miradores al Gran Puerto. Palacios, iglesias y museos en un casco compacto.", imagen: "https://images.unsplash.com/photo-1560365337-6f42f70dd874?auto=format&fit=crop&q=60&w=500", likes: 280 },
    { id: 14, titulo: "Bergen, Noruega", descripcion: "Casas de madera en Bryggen, puerto vivo y montañas que caen a fiordos. Punto de partida para rutas escénicas.", imagen: "https://images.unsplash.com/photo-1643193388440-50fae300e1da?auto=format&fit=crop&q=60&w=500", likes: 410 },
    { id: 15, titulo: "Ámsterdam, Países Bajos", descripcion: "Canales Patrimonio de la UNESCO, gables estrechos y cultura ciclista. Museos de primer nivel y barrios verdes.", imagen: "https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?auto=format&fit=crop&q=60&w=500", likes: 1100 },
    { id: 16, titulo: "Oporto, Portugal", descripcion: "Azulejos, puentes sobre el Duero y bodegas de vino de Oporto. Librería Lello y piscinas de Leça.", imagen: "https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?auto=format&fit=crop&q=60&w=500", likes: 760 },
    { id: 17, titulo: "Londres, Reino Unido", descripcion: "Historia y vanguardia a orillas del Támesis. Museos gratuitos, parques inmensos y una escena cultural inagotable.", imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=60&w=500", likes: 2500 },
    { id: 18, titulo: "Edimburgo, Reino Unido", descripcion: "Royal Mile, castillo y colinas verdes. La roca volcánica de Arthur’s Seat regala una panorámica excepcional.", imagen: "https://images.unsplash.com/photo-1569668444050-b7bc2bfec0c7?auto=format&fit=crop&q=60&w=500", likes: 640 },
    { id: 19, titulo: "Praga, Rep. Checa", descripcion: "Cúpulas y torres góticas sobre un casco antiguo fotogénico. Puente de Carlos al amanecer y cafés históricos.", imagen: "https://plus.unsplash.com/premium_photo-1661963067279-2f7bf970c49c?auto=format&fit=crop&q=60&w=500", likes: 920 },
    { id: 20, titulo: "Lucerna, Suiza", descripcion: "Lago, montes cercanos y el Kapellbrücke como postal. Tejados medievales y aire alpino.", imagen: "https://images.unsplash.com/photo-1635855296516-837d8b00cae7?auto=format&fit=crop&q=60&w=500", likes: 350 },
    { id: 21, titulo: "Zúrich, Suiza", descripcion: "Casco antiguo elegante junto al lago, museos, galerías y vida junto al agua. Eficiencia suiza.", imagen: "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?auto=format&fit=crop&q=60&w=500", likes: 400 },
    { id: 22, titulo: "Reikiavik, Islandia", descripcion: "Arquitectura moderna como Harpa y Hallgrímskirkja entre paisajes volcánicos. Base para auroras.", imagen: "https://plus.unsplash.com/premium_photo-1661962984700-16b03ecda58a?auto=format&fit=crop&q=60&w=500", likes: 890 },

    // --- ASIA ---
    { id: 23, titulo: "Beijing, China", descripcion: "Capital imperial con la Ciudad Prohibida, hutongs y avenidas amplias. Puerta a la Gran Muralla.", imagen: "https://plus.unsplash.com/premium_photo-1723433351351-0f6cd5d21537?auto=format&fit=crop&q=60&w=500", likes: 560 },
    { id: 24, titulo: "Hong Kong, China", descripcion: "Horizonte denso en torno a un puerto lleno de ferris. Montañas, islas y reservas naturales a minutos del centro.", imagen: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=60&w=500", likes: 670 },
    { id: 25, titulo: "Seúl, Corea del Sur", descripcion: "Rascacielos y palacios, mercados nocturnos y una red de metro impecable. Tradición y moda.", imagen: "https://plus.unsplash.com/premium_photo-1661936414165-3039a8d906f9?auto=format&fit=crop&q=60&w=500", likes: 880 },
    { id: 26, titulo: "Jaipur, India", descripcion: "La 'Ciudad Rosa': Hawa Mahal, fuertes y bazares color salmón. Artesanías y joyería del Rajastán.", imagen: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=60&w=500", likes: 430 },
    { id: 27, titulo: "Kioto, Japón", descripcion: "Templos, santuarios y jardines clásicos. Hanami en primavera y posibilidad de cruzarse con geishas.", imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=60&w=500", likes: 1500 },
    { id: 28, titulo: "Luang Prabang, Laos", descripcion: "Patrimonio UNESCO junto a la confluencia de ríos. Procesiones de monjes al amanecer y cascadas.", imagen: "https://plus.unsplash.com/premium_photo-1661882477461-20d16af70819?auto=format&fit=crop&q=60&w=500", likes: 220 },
    { id: 29, titulo: "Beirut, Líbano", descripcion: "Playas, clubes y azoteas frente a mezquitas y zocos históricos. Gastronomía con aire levantino.", imagen: "https://plus.unsplash.com/premium_photo-1661963342411-11bc8489a1fe?auto=format&fit=crop&q=60&w=500", likes: 190 },
    { id: 30, titulo: "Mascate, Omán", descripcion: "Bahías y montañas enmarcando mezquitas y zocos. Paseos costeros y arquitectura blanca.", imagen: "https://images.unsplash.com/photo-1725600462847-0317804cc466?auto=format&fit=crop&q=60&w=500", likes: 150 },
    { id: 31, titulo: "Doha, Qatar", descripcion: "Corniche con skyline futurista, Souq Waqif y el Museo de Arte Islámico. Mezcla de tradición y futuro.", imagen: "https://images.unsplash.com/photo-1539475314840-751cecc1dacd?auto=format&fit=crop&q=60&w=500", likes: 310 },
    { id: 32, titulo: "Chiang Mai, Tailandia", descripcion: "Templos en la ladera, cafés y mercados creativos. Punto de partida para naturaleza del norte.", imagen: "https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?auto=format&fit=crop&q=60&w=500", likes: 780 },
    { id: 33, titulo: "Hanoi, Vietnam", descripcion: "Lagos, templos y barrio francés con aire romántico. Calles angostas con cafés tradicionales.", imagen: "https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?auto=format&fit=crop&q=60&w=500", likes: 540 },
    { id: 34, titulo: "Singapur", descripcion: "Ciudad-jardín con selva urbana, Jardín Botánico y Gardens by the Bay. Templos y logística impecable.", imagen: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&q=60&w=500", likes: 950 },

    // --- ÁFRICA ---
    { id: 35, titulo: "Chefchaouen, Marruecos", descripcion: "Medina azul entre montañas del Rif. Callejuelas pintadas y puertas artesanales.", imagen: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&q=60&w=500", likes: 890 },
    { id: 36, titulo: "Ciudad del Cabo, Sudáfrica", descripcion: "Table Mountain, playas con pingüinos y barrios coloridos como Bo-Kaap. Rutas panorámicas.", imagen: "https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?auto=format&fit=crop&q=60&w=500", likes: 670 },

    // --- OCEANÍA ---
    { id: 37, titulo: "Sídney, Australia", descripcion: "Ópera icónica, bahía navegable y playas urbanas como Bondi. Ferris cotidianos y parques.", imagen: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=60&w=500", likes: 1120 },
    { id: 38, titulo: "Queenstown, Nueva Zelanda", descripcion: "Capital de la adrenalina entre lago y montañas. Miradores naturales y paisajes cinematográficos.", imagen: "https://images.unsplash.com/photo-1600466403153-50193d187dde?auto=format&fit=crop&q=60&w=500", likes: 580 },

    // --- AMÉRICA ---
    { id: 39, titulo: "Quebec, Canadá", descripcion: "Casco amurallado en altura con vistas al San Lorenzo. Ambiente europeo y tejados empinados.", imagen: "https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?auto=format&fit=crop&q=60&w=500", likes: 450 },
    { id: 40, titulo: "La Habana, Cuba", descripcion: "Arquitectura colonial de tonos pastel, música en cada esquina y paseos marítimos por el Malecón.", imagen: "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?auto=format&fit=crop&q=60&w=500", likes: 720 },
    { id: 41, titulo: "Nueva York, EEUU", descripcion: "Arquitectura icónica, parques como Central Park y una escena artística incomparable.", imagen: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=60&w=500", likes: 3100 },
    { id: 42, titulo: "San Francisco, EEUU", descripcion: "Puente Golden Gate, colinas y casas victorianas. Museos de talla mundial y barrios con carácter.", imagen: "https://images.unsplash.com/photo-1719858403364-83f7442a197e?auto=format&fit=crop&q=60&w=500", likes: 1300 },
    { id: 43, titulo: "S. Miguel de Allende, México", descripcion: "Centro colonial con parroquia neogótica rosada. Calles adoquinadas, patios y arte en galerías.", imagen: "https://plus.unsplash.com/premium_photo-1697729800872-866107ce82c4?auto=format&fit=crop&q=60&w=500", likes: 590 },
    { id: 44, titulo: "Buenos Aires, Argentina", descripcion: "Barrios con identidad, tango y parrillas. Librerías en edificios emblemáticos y vida cultural.", imagen: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?auto=format&fit=crop&q=60&w=500", likes: 890 },
    { id: 45, titulo: "Río de Janeiro, Brasil", descripcion: "Playas míticas, selva urbana y el Cristo Redentor vigilando bahías. Ritmo de samba en calles.", imagen: "https://plus.unsplash.com/premium_photo-1671211307997-f4f552b0601c?auto=format&fit=crop&q=60&w=500", likes: 1450 },
    { id: 46, titulo: "Cartagena, Colombia", descripcion: "Murallas, plazas y casonas coloniales cubiertas de buganvillas. Caras creativa y moderna.", imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=60&w=500", likes: 620 },
    { id: 47, titulo: "Quito, Ecuador", descripcion: "Casco histórico dorado bajo volcanes andinos. Vistas desde la Basílica y mercados tradicionales.", imagen: "https://plus.unsplash.com/premium_photo-1697729921570-a7e324d7baac?auto=format&fit=crop&q=60&w=500", likes: 380 },
    { id: 48, titulo: "Cuzco, Perú", descripcion: "Antigua capital inca con plazas y calles empedradas. Punto de partida a Machu Picchu.", imagen: "https://images.unsplash.com/photo-1609944433409-81bda5323abc?auto=format&fit=crop&q=60&w=500", likes: 1100 }
];

document.addEventListener('DOMContentLoaded', () => {
    cargarRincones();
});

function cargarRincones() {
    const contenedor = document.getElementById('contenedor-rincones-dinamico');
    if (!contenedor) return;

    // Recuperar IDs de los rincones ya votados del almacenamiento local
    const votosGuardados = JSON.parse(localStorage.getItem('votos_rincones')) || [];

    let htmlContent = '';

    dbRincones.forEach(rincon => {
        // Verificar si este rincón ya fue votado
        const yaVotado = votosGuardados.includes(rincon.id);
        
        // Si ya votó, sumamos 1 visualmente para que persista el incremento
        // (Nota: esto es una simulación visual, ya que dbRincones se resetea al recargar)
        let numeroLikes = rincon.likes;
        if (yaVotado) {
            numeroLikes++;
        }

        // Determinar estilos según si ya votó
        const claseIcono = yaVotado ? 'fas' : 'far'; // fas = solido (votado), far = borde (no votado)
        const estiloColor = yaVotado ? 'color: #e74c3c;' : ''; // Rojo si votado

        htmlContent += `
            <article class="tarjeta-rincon-vertical">
                <div class="marco-imagen">
                    <img src="${rincon.imagen}" alt="${rincon.titulo}" loading="lazy">
                </div>
                <div class="contenido-rincon">
                    <div class="texto-principal">
                        <h3>${rincon.titulo}</h3>
                        <p>${rincon.descripcion}</p>
                    </div>
                    
                    <div class="accion-like">
                        <button class="boton-like" data-id="${rincon.id}" style="${estiloColor}">
                            <i class="${claseIcono} fa-heart icono-corazon"></i> 
                            <span id="contador-likes-${rincon.id}" class="contador-texto">${numeroLikes}</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    });

    contenedor.innerHTML = htmlContent;
    activarBotonesLike();
}

function activarBotonesLike() {
    const botones = document.querySelectorAll('.boton-like');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const idRincon = parseInt(this.getAttribute('data-id'));
            
            // 1. Verificar LocalStorage
            let votosGuardados = JSON.parse(localStorage.getItem('votos_rincones')) || [];

            // 2. Si ya está en la lista, no permitir votar de nuevo
            if (votosGuardados.includes(idRincon)) {
                alert("¡Ya has votado por este rincón! Solo se permite un voto.");
                return;
            }

            // 3. Si no ha votado, proceder con la lógica
            const rinconEncontrado = dbRincones.find(item => item.id === idRincon);

            if (rinconEncontrado) {
                // Actualizar contador visualmente
                // (Nota: Sumamos 1 al valor actual del HTML para consistencia)
                const spanContador = document.getElementById(`contador-likes-${idRincon}`);
                let likesActuales = parseInt(spanContador.textContent);
                spanContador.textContent = likesActuales + 1;
                
                // Cambiar estilos (Corazón rojo y sólido)
                const icono = this.querySelector('.icono-corazon');
                icono.classList.remove('far'); // Quita borde
                icono.classList.add('fas');    // Pone relleno
                this.style.color = '#e74c3c';  // Pone el botón rojo
                
                // Animación
                icono.classList.add('animacion-latido');
                setTimeout(() => {
                    icono.classList.remove('animacion-latido');
                }, 300);

                // 4. GUARDAR EN LOCALSTORAGE
                votosGuardados.push(idRincon);
                localStorage.setItem('votos_rincones', JSON.stringify(votosGuardados));
            }
        });
    });
}