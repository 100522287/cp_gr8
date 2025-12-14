// ============================================
// BASE DE DATOS DE RINCONES (Multilingüe)
// ============================================
const dbRincones = [
    // --- EUROPA ---
    { 
        id: 1, 
        titulo: { es: "Viena, Austria", en: "Vienna, Austria" }, 
        descripcion: { es: "Ciudad imperial con museos y música clásica a cada paso.", en: "Imperial city with museums and classical music at every step." }, 
        imagen: "https://images.unsplash.com/photo-1731223832507-ebe5373129e6?auto=format&fit=crop&q=60&w=500", likes: 340 
    },
    { 
        id: 2, 
        titulo: { es: "Brujas, Bélgica", en: "Bruges, Belgium" }, 
        descripcion: { es: "Centro medieval perfectamente conservado y canales de ensueño.", en: "Perfectly preserved medieval center and dreamy canals." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661963659103-9602b3811297?auto=format&fit=crop&q=60&w=500", likes: 520 
    },
    { 
        id: 3, 
        titulo: { es: "Copenhague, Dinamarca", en: "Copenhagen, Denmark" }, 
        descripcion: { es: "Equilibrio entre diseño contemporáneo y tradición nórdica.", en: "Balance between contemporary design and Nordic tradition." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1691414363231-836e2e1bf0ed?auto=format&fit=crop&q=60&w=500", likes: 210 
    },
    { 
        id: 4, 
        titulo: { es: "Liubliana, Eslovenia", en: "Ljubljana, Slovenia" }, 
        descripcion: { es: "Capital pequeña y escénica, con casco peatonal junto al río.", en: "Small and scenic capital, with a pedestrian center by the river." }, 
        imagen: "https://images.unsplash.com/photo-1611576191056-3e6696029388?auto=format&fit=crop&q=60&w=500", likes: 180 
    },
    { 
        id: 5, 
        titulo: { es: "Barcelona, España", en: "Barcelona, Spain" }, 
        descripcion: { es: "Modernismo de Gaudí, mar y montaña en un mismo plano.", en: "Gaudí's modernism, sea, and mountains in the same shot." }, 
        imagen: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?auto=format&fit=crop&q=60&w=500", likes: 1250 
    },
    { 
        id: 6, 
        titulo: { es: "Sevilla, España", en: "Seville, Spain" }, 
        descripcion: { es: "Casco histórico monumental, patios y azulejos.", en: "Monumental historic center, patios, and tiles." }, 
        imagen: "https://images.unsplash.com/photo-1559564477-6e8582270002?auto=format&fit=crop&q=60&w=500", likes: 980 
    },
    { 
        id: 7, 
        titulo: { es: "Tallin, Estonia", en: "Tallinn, Estonia" }, 
        descripcion: { es: "Ciudad vieja medieval amurallada con vistas al Báltico.", en: "Walled medieval old town overlooking the Baltic." }, 
        imagen: "https://images.unsplash.com/photo-1709862366377-54b16f3e51f9?auto=format&fit=crop&q=60&w=500", likes: 300 
    },
    { 
        id: 8, 
        titulo: { es: "París, Francia", en: "Paris, France" }, 
        descripcion: { es: "Romance urbano: Sena, bulevares y museos icónicos.", en: "Urban romance: Seine, boulevards, and iconic museums." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?auto=format&fit=crop&q=60&w=500", likes: 2100 
    },
    { 
        id: 9, 
        titulo: { es: "Budapest, Hungría", en: "Budapest, Hungary" }, 
        descripcion: { es: "Arquitectura Art Nouveau y baños termales sobre el Danubio.", en: "Art Nouveau architecture and thermal baths on the Danube." }, 
        imagen: "https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?auto=format&fit=crop&q=60&w=500", likes: 870 
    },
    { 
        id: 10, 
        titulo: { es: "Florencia, Italia", en: "Florence, Italy" }, 
        descripcion: { es: "Cuna del Renacimiento: Duomo, Uffizi y artesanías.", en: "Cradle of the Renaissance: Duomo, Uffizi, and crafts." }, 
        imagen: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?auto=format&fit=crop&q=60&w=500", likes: 1400 
    },
    { 
        id: 11, 
        titulo: { es: "Roma, Italia", en: "Rome, Italy" }, 
        descripcion: { es: "La 'Ciudad Eterna' combina ruinas clásicas y vida de barrio.", en: "The 'Eternal City' combines classical ruins and neighborhood life." }, 
        imagen: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=60&w=500", likes: 2300 
    },
    { 
        id: 12, 
        titulo: { es: "Venecia, Italia", en: "Venice, Italy" }, 
        descripcion: { es: "Canales, palacios y puentes conectan islas de pura contemplación.", en: "Canals, palaces, and bridges connect islands of pure contemplation." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?auto=format&fit=crop&q=60&w=500", likes: 1950 
    },
    { 
        id: 13, 
        titulo: { es: "La Valeta, Malta", en: "Valletta, Malta" }, 
        descripcion: { es: "Fortificada y barroca, con miradores al Gran Puerto.", en: "Fortified and Baroque, with viewpoints to the Grand Harbour." }, 
        imagen: "https://images.unsplash.com/photo-1560365337-6f42f70dd874?auto=format&fit=crop&q=60&w=500", likes: 280 
    },
    { 
        id: 14, 
        titulo: { es: "Bergen, Noruega", en: "Bergen, Norway" }, 
        descripcion: { es: "Casas de madera en Bryggen y puerta a los fiordos.", en: "Wooden houses in Bryggen and gateway to the fjords." }, 
        imagen: "https://images.unsplash.com/photo-1643193388440-50fae300e1da?auto=format&fit=crop&q=60&w=500", likes: 410 
    },
    { 
        id: 15, 
        titulo: { es: "Ámsterdam, Países Bajos", en: "Amsterdam, Netherlands" }, 
        descripcion: { es: "Canales Patrimonio de la UNESCO y cultura ciclista.", en: "UNESCO World Heritage canals and cycling culture." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?auto=format&fit=crop&q=60&w=500", likes: 1100 
    },
    { 
        id: 16, 
        titulo: { es: "Oporto, Portugal", en: "Porto, Portugal" }, 
        descripcion: { es: "Azulejos, puentes sobre el Duero y bodegas de vino.", en: "Tiles, bridges over the Douro, and wine cellars." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?auto=format&fit=crop&q=60&w=500", likes: 760 
    },
    { 
        id: 17, 
        titulo: { es: "Londres, Reino Unido", en: "London, UK" }, 
        descripcion: { es: "Historia y vanguardia a orillas del Támesis.", en: "History and avant-garde on the banks of the Thames." }, 
        imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=60&w=500", likes: 2500 
    },
    { 
        id: 18, 
        titulo: { es: "Edimburgo, Reino Unido", en: "Edinburgh, UK" }, 
        descripcion: { es: "Royal Mile, castillo y colinas verdes volcánicas.", en: "Royal Mile, castle, and green volcanic hills." }, 
        imagen: "https://images.unsplash.com/photo-1569668444050-b7bc2bfec0c7?auto=format&fit=crop&q=60&w=500", likes: 640 
    },
    { 
        id: 19, 
        titulo: { es: "Praga, Rep. Checa", en: "Prague, Czech Republic" }, 
        descripcion: { es: "Cúpulas y torres góticas en un casco antiguo de cuento.", en: "Gothic domes and towers in a fairytale old town." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661963067279-2f7bf970c49c?auto=format&fit=crop&q=60&w=500", likes: 920 
    },
    { 
        id: 20, 
        titulo: { es: "Lucerna, Suiza", en: "Lucerne, Switzerland" }, 
        descripcion: { es: "Lago, montes cercanos y puentes medievales.", en: "Lake, nearby mountains, and medieval bridges." }, 
        imagen: "https://images.unsplash.com/photo-1635855296516-837d8b00cae7?auto=format&fit=crop&q=60&w=500", likes: 350 
    },
    { 
        id: 21, 
        titulo: { es: "Zúrich, Suiza", en: "Zurich, Switzerland" }, 
        descripcion: { es: "Casco antiguo elegante junto al lago y eficiencia suiza.", en: "Elegant old town by the lake and Swiss efficiency." }, 
        imagen: "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?auto=format&fit=crop&q=60&w=500", likes: 400 
    },
    { 
        id: 22, 
        titulo: { es: "Reikiavik, Islandia", en: "Reykjavik, Iceland" }, 
        descripcion: { es: "Arquitectura moderna entre paisajes volcánicos.", en: "Modern architecture amidst volcanic landscapes." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661962984700-16b03ecda58a?auto=format&fit=crop&q=60&w=500", likes: 890 
    },

    // --- ASIA ---
    { 
        id: 23, 
        titulo: { es: "Beijing, China", en: "Beijing, China" }, 
        descripcion: { es: "Capital imperial con la Ciudad Prohibida y la Gran Muralla.", en: "Imperial capital with the Forbidden City and the Great Wall." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1723433351351-0f6cd5d21537?auto=format&fit=crop&q=60&w=500", likes: 560 
    },
    { 
        id: 24, 
        titulo: { es: "Hong Kong, China", en: "Hong Kong, China" }, 
        descripcion: { es: "Horizonte denso y puerto vivo entre montañas.", en: "Dense skyline and lively harbor between mountains." }, 
        imagen: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=60&w=500", likes: 670 
    },
    { 
        id: 25, 
        titulo: { es: "Seúl, Corea del Sur", en: "Seoul, South Korea" }, 
        descripcion: { es: "Rascacielos y palacios, tradición y moda.", en: "Skyscrapers and palaces, tradition and fashion." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661936414165-3039a8d906f9?auto=format&fit=crop&q=60&w=500", likes: 880 
    },
    { 
        id: 26, 
        titulo: { es: "Jaipur, India", en: "Jaipur, India" }, 
        descripcion: { es: "La 'Ciudad Rosa': fuertes y bazares llenos de color.", en: "The 'Pink City': forts and colorful bazaars." }, 
        imagen: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=60&w=500", likes: 430 
    },
    { 
        id: 27, 
        titulo: { es: "Kioto, Japón", en: "Kyoto, Japan" }, 
        descripcion: { es: "Templos, santuarios y jardines clásicos.", en: "Temples, shrines, and classical gardens." }, 
        imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=60&w=500", likes: 1500 
    },
    { 
        id: 28, 
        titulo: { es: "Luang Prabang, Laos", en: "Luang Prabang, Laos" }, 
        descripcion: { es: "Patrimonio UNESCO junto a la confluencia de ríos.", en: "UNESCO Heritage site at the confluence of rivers." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661882477461-20d16af70819?auto=format&fit=crop&q=60&w=500", likes: 220 
    },
    { 
        id: 29, 
        titulo: { es: "Beirut, Líbano", en: "Beirut, Lebanon" }, 
        descripcion: { es: "Historia, playas y gastronomía con aire levantino.", en: "History, beaches, and gastronomy with a Levantine flair." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661963342411-11bc8489a1fe?auto=format&fit=crop&q=60&w=500", likes: 190 
    },
    { 
        id: 30, 
        titulo: { es: "Mascate, Omán", en: "Muscat, Oman" }, 
        descripcion: { es: "Bahías y montañas enmarcando mezquitas y zocos.", en: "Bays and mountains framing mosques and souks." }, 
        imagen: "https://images.unsplash.com/photo-1725600462847-0317804cc466?auto=format&fit=crop&q=60&w=500", likes: 150 
    },
    { 
        id: 31, 
        titulo: { es: "Doha, Qatar", en: "Doha, Qatar" }, 
        descripcion: { es: "Skyline futurista y museos en el desierto.", en: "Futuristic skyline and museums in the desert." }, 
        imagen: "https://images.unsplash.com/photo-1539475314840-751cecc1dacd?auto=format&fit=crop&q=60&w=500", likes: 310 
    },
    { 
        id: 32, 
        titulo: { es: "Chiang Mai, Tailandia", en: "Chiang Mai, Thailand" }, 
        descripcion: { es: "Templos en la ladera y mercados creativos.", en: "Hillside temples and creative markets." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?auto=format&fit=crop&q=60&w=500", likes: 780 
    },
    { 
        id: 33, 
        titulo: { es: "Hanoi, Vietnam", en: "Hanoi, Vietnam" }, 
        descripcion: { es: "Lagos, templos y barrio antiguo con aire romántico.", en: "Lakes, temples, and an old quarter with a romantic air." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?auto=format&fit=crop&q=60&w=500", likes: 540 
    },
    { 
        id: 34, 
        titulo: { es: "Singapur", en: "Singapore" }, 
        descripcion: { es: "Ciudad-jardín con selva urbana y arquitectura icónica.", en: "Garden city with urban jungle and iconic architecture." }, 
        imagen: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&q=60&w=500", likes: 950 
    },

    // --- ÁFRICA ---
    { 
        id: 35, 
        titulo: { es: "Chefchaouen, Marruecos", en: "Chefchaouen, Morocco" }, 
        descripcion: { es: "Medina azul entre montañas del Rif.", en: "Blue medina nestled in the Rif mountains." }, 
        imagen: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&q=60&w=500", likes: 890 
    },
    { 
        id: 36, 
        titulo: { es: "Ciudad del Cabo, Sudáfrica", en: "Cape Town, South Africa" }, 
        descripcion: { es: "Table Mountain, playas y barrios coloridos.", en: "Table Mountain, beaches, and colorful neighborhoods." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?auto=format&fit=crop&q=60&w=500", likes: 670 
    },

    // --- OCEANÍA ---
    { 
        id: 37, 
        titulo: { es: "Sídney, Australia", en: "Sydney, Australia" }, 
        descripcion: { es: "Ópera icónica, bahía navegable y playas urbanas.", en: "Iconic Opera House, navigable harbor, and urban beaches." }, 
        imagen: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=60&w=500", likes: 1120 
    },
    { 
        id: 38, 
        titulo: { es: "Queenstown, Nueva Zelanda", en: "Queenstown, New Zealand" }, 
        descripcion: { es: "Capital de la adrenalina entre lago y montañas.", en: "Adrenaline capital between lake and mountains." }, 
        imagen: "https://images.unsplash.com/photo-1600466403153-50193d187dde?auto=format&fit=crop&q=60&w=500", likes: 580 
    },

    // --- AMÉRICA ---
    { 
        id: 39, 
        titulo: { es: "Quebec, Canadá", en: "Quebec City, Canada" }, 
        descripcion: { es: "Casco amurallado con aire europeo.", en: "Walled city center with a European flair." }, 
        imagen: "https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?auto=format&fit=crop&q=60&w=500", likes: 450 
    },
    { 
        id: 40, 
        titulo: { es: "La Habana, Cuba", en: "Havana, Cuba" }, 
        descripcion: { es: "Arquitectura colonial, música y el Malecón.", en: "Colonial architecture, music, and the Malecon." }, 
        imagen: "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?auto=format&fit=crop&q=60&w=500", likes: 720 
    },
    { 
        id: 41, 
        titulo: { es: "Nueva York, EEUU", en: "New York, USA" }, 
        descripcion: { es: "Rascacielos, Central Park y arte incomparable.", en: "Skyscrapers, Central Park, and incomparable art." }, 
        imagen: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=60&w=500", likes: 3100 
    },
    { 
        id: 42, 
        titulo: { es: "San Francisco, EEUU", en: "San Francisco, USA" }, 
        descripcion: { es: "Golden Gate, colinas y casas victorianas.", en: "Golden Gate, hills, and Victorian houses." }, 
        imagen: "https://images.unsplash.com/photo-1719858403364-83f7442a197e?auto=format&fit=crop&q=60&w=500", likes: 1300 
    },
    { 
        id: 43, 
        titulo: { es: "S. Miguel de Allende, México", en: "San Miguel de Allende, Mexico" }, 
        descripcion: { es: "Centro colonial, calles adoquinadas y arte.", en: "Colonial center, cobblestone streets, and art." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1697729800872-866107ce82c4?auto=format&fit=crop&q=60&w=500", likes: 590 
    },
    { 
        id: 44, 
        titulo: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" }, 
        descripcion: { es: "Tango, parrillas y arquitectura elegante.", en: "Tango, steakhouses, and elegant architecture." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?auto=format&fit=crop&q=60&w=500", likes: 890 
    },
    { 
        id: 45, 
        titulo: { es: "Río de Janeiro, Brasil", en: "Rio de Janeiro, Brazil" }, 
        descripcion: { es: "Playas, selva urbana y samba.", en: "Beaches, urban jungle, and samba." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1671211307997-f4f552b0601c?auto=format&fit=crop&q=60&w=500", likes: 1450 
    },
    { 
        id: 46, 
        titulo: { es: "Cartagena, Colombia", en: "Cartagena, Colombia" }, 
        descripcion: { es: "Murallas, plazas y casonas coloniales.", en: "Walls, plazas, and colonial mansions." }, 
        imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=60&w=500", likes: 620 
    },
    { 
        id: 47, 
        titulo: { es: "Quito, Ecuador", en: "Quito, Ecuador" }, 
        descripcion: { es: "Casco histórico dorado bajo volcanes.", en: "Golden historic center under volcanoes." }, 
        imagen: "https://plus.unsplash.com/premium_photo-1697729921570-a7e324d7baac?auto=format&fit=crop&q=60&w=500", likes: 380 
    },
    { 
        id: 48, 
        titulo: { es: "Cuzco, Perú", en: "Cusco, Peru" }, 
        descripcion: { es: "Capital inca, calles empedradas y puerta a Machu Picchu.", en: "Inca capital, cobblestone streets, and gateway to Machu Picchu." }, 
        imagen: "https://images.unsplash.com/photo-1609944433409-81bda5323abc?auto=format&fit=crop&q=60&w=500", likes: 1100 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    cargarRincones();
});

// Función para cargar y mostrar los rincones turísticos
function cargarRincones() {
    // CONTENEDOR PRINCIPAL
    const contenedor = document.getElementById('contenedor-rincones-dinamico');
    if (!contenedor) return;

    // DETECTAR IDIOMA
    const lang = localStorage.getItem('idioma') || 'es';
    const votosGuardados = JSON.parse(localStorage.getItem('votos_rincones')) || [];

    let htmlContent = '';

    // RECORRER BASE DE DATOS
    dbRincones.forEach(rincon => {
        const yaVotado = votosGuardados.includes(rincon.id);
        let numeroLikes = rincon.likes + (yaVotado ? 1 : 0);
        
        // 1. CONFIGURAR ESTILO DEL BOTÓN SEGÚN VOTO
        const claseIcono = yaVotado ? 'fas' : 'far';
        const estiloColor = yaVotado ? 'color: #b01200ff;' : '';

        // 2. USAR TEXTOS TRADUCIDOS
        const titulo = rincon.titulo[lang] || rincon.titulo.es;
        const desc = rincon.descripcion[lang] || rincon.descripcion.es;

        // CONSTRUIR TARJETA HTML
        htmlContent += `
            <article class="tarjeta-rincon-vertical">
                <div class="marco-imagen">
                    <img src="${rincon.imagen}" alt="${titulo}" loading="lazy">
                </div>
                <div class="contenido-rincon">
                    <div class="texto-principal">
                        <h3>${titulo}</h3>
                        <p>${desc}</p>
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

    // INSERTAR CONTENIDO EN EL DOM
    contenedor.innerHTML = htmlContent;
    activarBotonesLike();
}

// Función para activar la funcionalidad de los botones "like"
function activarBotonesLike() {
    const botones = document.querySelectorAll('.boton-like');
    // RECORRER CADA BOTÓN
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const idRincon = parseInt(this.getAttribute('data-id'));
            let votosGuardados = JSON.parse(localStorage.getItem('votos_rincones')) || [];

            // 1. DETECTAR IDIOMA PARA ALERTAS
            const lang = localStorage.getItem('idioma') || 'es';

            // 2. VERIFICAR SI YA SE VOTÓ
            if (votosGuardados.includes(idRincon)) {
                const msg = lang === 'es' ? "¡Ya has votado por este rincón! Solo se permite un voto." : "You have already voted for this spot! Only one vote is allowed.";
                alert(msg);
                return;
            }
            // 3. ACTUALIZAR CONTADOR Y ESTILO
            const rinconEncontrado = dbRincones.find(item => item.id === idRincon);

            // Asegurarse de que el rincón exista
            if (rinconEncontrado) {
                // Actualizar contador en la interfaz
                const spanContador = document.getElementById(`contador-likes-${idRincon}`);
                let likesActuales = parseInt(spanContador.textContent);
                spanContador.textContent = likesActuales + 1;
                
                // Cambiar estilo del botón
                const icono = this.querySelector('.icono-corazon');
                icono.classList.remove('far'); 
                icono.classList.add('fas');    
                this.style.color = '#a51000ff';  
                
                // Animación de latido
                icono.classList.add('animacion-latido');
                setTimeout(() => {
                    icono.classList.remove('animacion-latido');
                }, 300);

                // 4. GUARDAR VOTO EN LOCALSTORAGE
                votosGuardados.push(idRincon);
                localStorage.setItem('votos_rincones', JSON.stringify(votosGuardados));
            }
        });
    });
}