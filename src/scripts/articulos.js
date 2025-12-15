// ============================================
// BASE DE DATOS DE ARTÍCULOS (Textos Originales + Traducción)
// ============================================
const dbArticulos = [
    {
        id: 1,
        titulo: { 
            es: "Copenhague sobre dos ruedas: Guía ciclista definitiva", 
            en: "Copenhagen on Two Wheels: The Ultimate Cycling Guide" 
        },
        descripcion: { 
            es: "Descubre la capital danesa de la forma más auténtica: en bicicleta. Rutas y consejos.", 
            en: "Discover the Danish capital in the most authentic way: by bicycle. Routes and tips." 
        },
        texto_completo: {
            es: "Copenhague no se entiende sin sus bicicletas. Es más que un medio de transporte; es una forma de vida. Con más de 390 kilómetros de carriles bici perfectamente segregados y semáforos exclusivos para ciclistas, es el paraíso mundial de las dos ruedas. Si quieres sentirte como un local, olvida el metro y alquila una bici nada más llegar. La ciudad es plana, segura y está diseñada para ser pedaleada.<br><br><h3>La ruta imprescindible</h3><br>Comienza tu día alquilando una bicicleta (las eléctricas 'Bycyklen' son una gran opción y tienen GPS integrado) cerca de la Estación Central. Dirígete hacia el icónico puerto de Nyhavn. Sí, es turístico, pero sus casas de colores chillones del siglo XVII y los barcos de madera merecen la foto de postal. Hans Christian Andersen vivió aquí, y el ambiente de cuento de hadas se respira en el aire.<br><br>Desde allí, bordea el canal hasta llegar a la estatua de la Sirenita. Ojo: es pequeña y siempre está rodeada de turistas, pero el paseo junto al mar a través del Kastellet (una ciudadela en forma de estrella) es lo que realmente vale la pena.<br><br><h3>Más allá del centro</h3><br>Cruza los puentes para explorar barrios vibrantes como Nørrebro, lleno de cafeterías hípster, tiendas de segunda mano y el famoso parque Superkilen. No puedes dejar de visitar la Ciudad Libre de Christiania, un experimento social y comuna autogestionada que te transportará a otra época con sus normas propias y arquitectura creativa.<br><br>Termina el día reponiendo fuerzas en el mercado de Torvehallerne, un templo foodie donde el <em>Smørrebrød</em> (una tosta de pan de centeno cargada de ingredientes frescos como arenque, roast beef o salmón) es el rey absoluto de la gastronomía danesa.",
            en: "Copenhagen cannot be understood without its bicycles. It is more than a means of transport; it is a way of life. With more than 390 kilometers of perfectly segregated bike lanes and traffic lights exclusively for cyclists, it is the world paradise on two wheels. If you want to feel like a local, forget the metro and rent a bike as soon as you arrive. The city is flat, safe, and designed to be pedaled.<br><br><h3>The Essential Route</h3><br>Start your day by renting a bicycle (electric 'Bycyklen' are a great option and have integrated GPS) near the Central Station. Head towards the iconic port of Nyhavn. Yes, it is touristy, but its gaudy 17th-century colorful houses and wooden ships are worth the postcard photo. Hans Christian Andersen lived here, and the fairy tale atmosphere is breathed in the air.<br><br>From there, skirt the canal until you reach the Little Mermaid statue. Watch out: it is small and always surrounded by tourists, but the walk by the sea through Kastellet (a star-shaped citadel) is what is really worth it.<br><br><h3>Beyond the Center</h3><br>Cross the bridges to explore vibrant neighborhoods like Nørrebro, full of hipster cafes, second-hand shops, and the famous Superkilen park. You cannot miss visiting Freetown Christiania, a social experiment and self-managed commune that will transport you to another era with its own rules and creative architecture.<br><br>End the day recharging your batteries at the Torvehallerne market, a foodie temple where <em>Smørrebrød</em> (a rye bread toast loaded with fresh ingredients like herring, roast beef, or salmon) is the absolute king of Danish gastronomy."
        },
        imagen: "images/copenhagen.jpg"
    },
    {
        id: 2,
        titulo: { 
            es: "El embrujo azul de Chefchaouen: La joya del Rif", 
            en: "The Blue Charm of Chefchaouen: The Jewel of the Rif" 
        },
        descripcion: { 
            es: "Piérdete en la medina más fotogénica de Marruecos y descubre sus secretos.", 
            en: "Get lost in Morocco's most photogenic medina and discover its secrets." 
        },
        texto_completo: {
            es: "Chefchaouen, conocida como la Perla Azul de Marruecos, es un lugar que parece sacado de un sueño lúcido. Fundada en 1471 en las montañas del Rif como fortaleza contra los invasores portugueses, esta pequeña ciudad ofrece una atmósfera increíblemente tranquila, muy alejada del caos frenético de Marrakech o Fez. Aquí, el tiempo parece detenerse entre callejuelas bañadas en infinitos tonos de azul, un color que se cree fue introducido por refugiados judíos en los años 30 para simbolizar el cielo y el paraíso.<br><br><h3>Explorando la Medina</h3><br>El mejor consejo para visitar Chefchaouen es simple: tira el mapa. Su medina es un laberinto encantador donde perderse es el objetivo. Cada esquina, cada puerta decorada con tachuelas y cada escalera empinada es una oportunidad fotográfica única. Busca la Plaza Uta el-Hammam, el corazón palpitante de la ciudad, para sentarte en una terraza y observar la vida local bajo la sombra de la gran morera, mientras disfrutas de un dulce té a la menta.<br><br>Visita la Kasbah (fortaleza) de paredes rojizas para un contraste visual impactante y un poco de historia en su museo etnográfico y galería de arte.<br><br><h3>El mejor mirador</h3><br>Para entender la magnitud de la ciudad azul, hay que verla desde arriba. Levántate temprano o espera al atardecer y camina hacia el este de la medina, pasando por la cascada de Ras el Maa donde las mujeres locales aún lavan la ropa y las alfombras de forma tradicional. Sigue el sendero que sube la colina hasta la Mezquita Española, un templo blanco que nunca llegó a usarse. La caminata dura unos 20-30 minutos, pero la recompensa es la vista panorámica más espectacular de todo Chefchaouen iluminada por la luz dorada del sol cayendo sobre el valle.",
            en: "Chefchaouen, known as the Blue Pearl of Morocco, is a place that seems taken from a lucid dream. Founded in 1471 in the Rif Mountains as a fortress against Portuguese invaders, this small city offers an incredibly quiet atmosphere, far removed from the frenetic chaos of Marrakech or Fez. Here, time seems to stop among narrow streets bathed in infinite shades of blue, a color believed to have been introduced by Jewish refugees in the 1930s to symbolize the sky and paradise.<br><br><h3>Exploring the Medina</h3><br>The best advice for visiting Chefchaouen is simple: throw away the map. Its medina is a charming labyrinth where getting lost is the goal. Every corner, every door decorated with studs, and every steep staircase is a unique photographic opportunity. Look for Uta el-Hammam Square, the beating heart of the city, to sit on a terrace and watch local life under the shade of the great mulberry tree, while enjoying a sweet mint tea.<br><br>Visit the Kasbah (fortress) with reddish walls for a striking visual contrast and a bit of history in its ethnographic museum and art gallery.<br><br><h3>The Best Viewpoint</h3><br>To understand the magnitude of the blue city, you have to see it from above. Wake up early or wait for sunset and walk east of the medina, passing the Ras el Maa waterfall where local women still wash clothes and rugs in the traditional way. Follow the path up the hill to the Spanish Mosque, a white temple that was never used. The hike takes about 20-30 minutes, but the reward is the most spectacular panoramic view of all Chefchaouen illuminated by the golden sunlight falling on the valley."
        },
        imagen: "images/chefchaouen.jpg"
    },
    {
        id: 3,
        titulo: { 
            es: "Sevilla: Tapas, Flamenco y Pasión en el sur", 
            en: "Seville: Tapas, Flamenco, and Passion in the South" 
        },
        descripcion: { 
            es: "Una ruta sensorial por el corazón de Andalucía. Dónde comer y sentir el duende.", 
            en: "A sensory route through the heart of Andalusia. Where to eat and feel the 'duende'." 
        },
        texto_completo: {
            es: "Sevilla no es una ciudad que simplemente se visita, es una ciudad que se siente en la piel. Su intenso aroma a azahar en primavera, el color albero brillante de sus plazas y, sobre todo, la alegría contagiosa de su gente la convierten en un destino único en Europa. Y gran parte de esa vida social ocurre de pie, copa en mano, en sus miles de bares de tapas. El 'tapeo' en Sevilla es casi una religión.<br><br><h3>Ruta de tapeo auténtica</h3><br>Empieza sumergiéndote en el Barrio de Santa Cruz, la antigua judería, con sus calles estrechas como laberintos y patios llenos de flores y fuentes. Haz una parada obligatoria en 'El Rinconcillo', el bar más antiguo de la ciudad (fundado en 1670), para probar sus famosas espinacas con garbanzos apuntadas con tiza en la barra de madera.<br><br>Después, cruza el puente de Isabel II para entrar en Triana, el barrio con más carácter al otro lado del río, cuna de toreros, alfareros y cantaores. Aquí, busca el pescaíto frito (adobo, chocos) y disfruta del ambiente a orillas del Guadalquivir con vistas a la Torre del Oro.<br><br><h3>Flamenco de verdad</h3><br>No puedes irte de Sevilla sin experimentar el flamenco, Patrimonio Inmaterial de la Humanidad. Pero huye de los grandes tablaos pensados para turistas con cena incluida y precios desorbitados. Busca las pequeñas peñas flamencas o locales íntimos en el centro, como la Casa de la Memoria, donde el cante es espontáneo, crudo y sale del alma sin micrófonos. Es ahí donde encontrarás el verdadero 'duende'. Sevilla te atrapará, y como dice la canción, tiene un color especial que no olvidarás.",
            en: "Seville is not just a city you visit, it is a city you feel on your skin. Its intense scent of orange blossom in spring, the bright albero color of its squares, and, above all, the contagious joy of its people make it a unique destination in Europe. And much of that social life happens standing up, glass in hand, in its thousands of tapas bars. 'Tapeo' in Seville is almost a religion.<br><br><h3>Authentic Tapas Route</h3><br>Start by immersing yourself in the Santa Cruz neighborhood, the old Jewish quarter, with its narrow labyrinthine streets and patios full of flowers and fountains. Make a mandatory stop at 'El Rinconcillo', the oldest bar in the city (founded in 1670), to try their famous spinach with chickpeas written down with chalk on the wooden bar.<br><br>Then, cross the Isabel II bridge to enter Triana, the neighborhood with the most character on the other side of the river, cradle of bullfighters, potters, and flamenco singers. Here, look for fried fish (adobo, cuttlefish) and enjoy the atmosphere on the banks of the Guadalquivir overlooking the Tower of Gold.<br><br><h3>Real Flamenco</h3><br>You cannot leave Seville without experiencing flamenco, Intangible Cultural Heritage of Humanity. But flee from the large tablaos designed for tourists with dinner included and exorbitant prices. Look for small flamenco peñas or intimate venues in the center, like Casa de la Memoria, where singing is spontaneous, raw, and comes from the soul without microphones. That is where you will find the true 'duende'. Seville will trap you, and as the song says, it has a special color you won't forget."
        },
        imagen: "images/sevilla.jpg"
    },
    {
        id: 4,
        titulo: { 
            es: "París Bohemio: Más allá de la Torre Eiffel", 
            en: "Bohemian Paris: Beyond the Eiffel Tower" 
        },
        descripcion: { 
            es: "Descubre el lado más auténtico, artístico y menos turístico de la ciudad de la luz.", 
            en: "Discover the most authentic, artistic, and less touristy side of the City of Light." 
        },
        texto_completo: {
            es: "París es, sin duda, una de las ciudades más bellas y románticas del mundo, pero también una de las más visitadas y agobiantes. Si quieres escapar de las hordas de turistas que se agolpan bajo la Torre Eiffel o frente a la pequeña Mona Lisa, necesitas explorar los barrios donde aún late el verdadero corazón parisino. Te proponemos una ruta alternativa por el París bohemio y artístico.<br><br><h3>Canal Saint-Martin y Le Marais</h3><br>Olvida el Sena por un momento y dirígete al Canal Saint-Martin en el distrito 10. Este es el lugar favorito de los jóvenes parisinos para hacer picnic al atardecer, con vino barato, queso camembert y música callejera, al estilo de la película Amélie. Cerca de allí, el barrio de Le Marais te espera con sus boutiques de diseño, galerías de arte vanguardista y la espectacular Place des Vosges. Es el lugar perfecto para perderse y disfrutar de un falafel en la Rue des Rosiers, famoso en toda la ciudad.<br><br><h3>El otro Montmartre y Belleville</h3><br>Sube a Montmartre, sí, pero evita la masificada Place du Tertre llena de pintores para turistas. Busca las calles traseras y tranquilas como la Rue de l'Abreuvoir, descubre el viñedo secreto de Clos Montmartre (sí, hay viñas en París) y la encantadora plaza Dalida. Para una experiencia aún más cruda y real, visita Belleville, el barrio multicultural cuna de Edith Piaf, que hoy es un hervidero de arte urbano impresionante y ofrece uno de los mejores miradores alternativos de la ciudad desde su parque.",
            en: "Paris is undoubtedly one of the most beautiful and romantic cities in the world, but also one of the most visited and overwhelming. If you want to escape the hordes of tourists crowding under the Eiffel Tower or in front of the tiny Mona Lisa, you need to explore the neighborhoods where the true Parisian heart still beats. We propose an alternative route through bohemian and artistic Paris.<br><br><h3>Canal Saint-Martin and Le Marais</h3><br>Forget the Seine for a moment and head to the Canal Saint-Martin in the 10th arrondissement. This is the favorite spot for young Parisians to picnic at sunset, with cheap wine, Camembert cheese, and street music, Amélie movie style. Nearby, the Le Marais district awaits you with its design boutiques, avant-garde art galleries, and the spectacular Place des Vosges. It is the perfect place to get lost and enjoy a falafel on Rue des Rosiers, famous throughout the city.<br><br><h3>The Other Montmartre and Belleville</h3><br>Go up to Montmartre, yes, but avoid the crowded Place du Tertre full of painters for tourists. Look for back and quiet streets like Rue de l'Abreuvoir, discover the secret vineyard of Clos Montmartre (yes, there are vines in Paris) and the charming Dalida square. For an even rawer and more real experience, visit Belleville, the multicultural neighborhood cradle of Edith Piaf, which today is a hotbed of impressive urban art and offers one of the best alternative viewpoints of the city from its park."
        },
        imagen: "images/paris.jpg"
    },
    {
        id: 5,
        titulo: { 
            es: "Kioto y la esencia del Japón tradicional", 
            en: "Kyoto and the Essence of Traditional Japan" 
        },
        descripcion: { 
            es: "Guía para tu primer viaje: templos dorados, geishas y etiqueta japonesa.", 
            en: "Guide for your first trip: golden temples, geishas, and Japanese etiquette." 
        },
        texto_completo: {
            es: "Japón es un país de contrastes fascinantes donde la tecnología punta convive en perfecta armonía con tradiciones milenarias. Mientras Tokio representa el futuro frenético de neón, Kioto es el corazón cultural y espiritual del país, una ciudad que te transporta al pasado con sus más de 2000 templos, santuarios sintoístas y jardines zen diseñados para la meditación.<br><br><h3>Imprescindibles de Kioto</h3><br>Para disfrutar de los lugares más famosos sin agobios, el secreto es madrugar mucho, antes de que lleguen los autobuses. Lleva al santuario Fushimi Inari Taisha al amanecer para recorrer sus miles de torii rojos (puertas sagradas) subiendo la montaña casi en soledad; es una experiencia mística. Haz lo mismo con el bosque de bambú de Arashiyama, donde el sonido del viento entre los tallos es hipnótico.<br><br>Por la tarde, pasea por el histórico barrio de Gion, con sus casas de madera machiya y farolillos de papel, y mantén los ojos abiertos: con suerte, podrás ver pasar a una geisha o maiko (aprendiz) con su kimono de seda de camino a una cita. Recuerda no pararlas ni hacer fotos invasivas.<br><br><h3>Consejos prácticos</h3><br>Japón puede intimidar, pero es increíblemente fácil de navegar. El transporte público es impecable y puntual al segundo. Compra una tarjeta SIM de datos nada más llegar; Google Maps será tu salvavidas para trenes y metros. Lleva siempre efectivo, ya que muchos pequeños restaurantes tradicionales y templos no aceptan tarjeta. Y sobre todo, abraza el 'Omotenashi' (la hospitalidad japonesa); la gente hará lo imposible por ayudarte aunque no hablen inglés.",
            en: "Japan is a country of fascinating contrasts where cutting-edge technology coexists in perfect harmony with millenary traditions. While Tokyo represents the frenetic neon future, Kyoto is the cultural and spiritual heart of the country, a city that transports you to the past with its more than 2000 temples, Shinto shrines, and Zen gardens designed for meditation.<br><br><h3>Kyoto Essentials</h3><br>To enjoy the most famous places without being overwhelmed, the secret is to get up very early, before the buses arrive. Go to the Fushimi Inari Taisha shrine at dawn to walk through its thousands of red torii (sacred gates) up the mountain almost in solitude; it is a mystical experience. Do the same with the Arashiyama bamboo forest, where the sound of the wind between the stalks is hypnotic.<br><br>In the afternoon, stroll through the historic Gion district, with its machiya wooden houses and paper lanterns, and keep your eyes open: with luck, you might see a geisha or maiko (apprentice) passing by in her silk kimono on her way to an appointment. Remember not to stop them or take invasive photos.<br><br><h3>Practical Tips</h3><br>Japan can be intimidating, but it is incredibly easy to navigate. Public transport is impeccable and punctual to the second. Buy a data SIM card as soon as you arrive; Google Maps will be your lifesaver for trains and subways. Always carry cash, as many small traditional restaurants and temples do not accept cards. And above all, embrace 'Omotenashi' (Japanese hospitality); people will do the impossible to help you even if they don't speak English."
        },
        imagen: "images/kioto.jpg"
    },
    {
        id: 6,
        titulo: { 
            es: "Safari en Kenia: La Gran Aventura Africana", 
            en: "Safari in Kenya: The Great African Adventure" 
        },
        descripcion: { 
            es: "Todo lo que necesitas saber para vivir la experiencia de tu vida en la sabana.", 
            en: "Everything you need to know to live the experience of a lifetime in the savanna." 
        },
        texto_completo: {
            es: "Hacer un safari en África es, sin lugar a dudas, una de esas experiencias que te cambian la vida para siempre. Ver a los animales salvajes en su hábitat natural, sentir la inmensidad de la sabana bajo un cielo infinito y escuchar los sonidos de la naturaleza al amanecer es algo indescriptible. Kenia, con el legendario parque nacional Masai Mara, es uno de los mejores lugares del mundo para cumplir este sueño viajero.<br><br><h3>En busca de los 'Big Five'</h3><br>El objetivo principal de muchos aventureros es ver a los 'Cinco Grandes': león, leopardo, elefante, rinoceronte y búfalo. El Masai Mara ofrece probabilidades altísimas de verlos todos, especialmente grandes felinos cazando. Si viajas entre julio y octubre, tendrás el privilegio de presenciar la Gran Migración, cuando millones de ñus y cebras cruzan el río Mara enfrentándose a los cocodrilos hambrientos. Un espectáculo natural dramático y sobrecogedor que National Geographic ha hecho famoso.<br><br><h3>Consejos para el safari</h3><br>La clave del éxito es la paciencia y el silencio. Los animales no están ahí esperándote como en un zoo; hay que buscarlos y rastrearlos. Los safaris suelen empezar muy temprano (antes del amanecer) y al atardecer, que es cuando la fauna está más activa y la luz es perfecta para fotos. Unos buenos prismáticos son imprescindibles, y si te gusta la fotografía, necesitarás un buen teleobjetivo. Vístete con colores neutros (caqui, beige, verde) para no llamar la atención y prepárate para tragar mucho polvo en los caminos de tierra. Respeta siempre las normas del parque y mantén silencio cerca de los animales. La conexión que sentirás con la naturaleza es brutal y primitiva.",
            en: "Going on a safari in Africa is, without a doubt, one of those experiences that changes your life forever. Seeing wild animals in their natural habitat, feeling the vastness of the savanna under an infinite sky, and listening to the sounds of nature at dawn is indescribable. Kenya, with the legendary Masai Mara National Reserve, is one of the best places in the world to fulfill this travel dream.<br><br><h3>In Search of the 'Big Five'</h3><br>The main goal of many adventurers is to see the 'Big Five': lion, leopard, elephant, rhinoceros, and buffalo. The Masai Mara offers extremely high chances of seeing them all, especially big cats hunting. If you travel between July and October, you will have the privilege of witnessing the Great Migration, when millions of wildebeest and zebras cross the Mara River facing hungry crocodiles. A dramatic and breathtaking natural spectacle made famous by National Geographic.<br><br><h3>Safari Tips</h3><br>The key to success is patience and silence. The animals are not there waiting for you like in a zoo; you have to search and track them. Safaris usually start very early (before dawn) and at sunset, when wildlife is most active and the light is perfect for photos. Good binoculars are essential, and if you like photography, you will need a good telephoto lens. Dress in neutral colors (khaki, beige, green) to avoid drawing attention and be prepared to swallow a lot of dust on dirt roads. Always respect park rules and keep quiet near the animals. The connection you will feel with nature is brutal and primitive."
        },
        imagen: "images/safari.webp"
    },
    {
        id: 7,
        titulo: { 
            es: "Los secretos de Budapest: La Perla del Danubio", 
            en: "The Secrets of Budapest: The Pearl of the Danube" 
        },
        descripcion: { 
            es: "Descubre la perla del Danubio: baños termales, ruin bars y arquitectura monumental.", 
            en: "Discover the Pearl of the Danube: thermal baths, ruin bars, and monumental architecture." 
        },
        texto_completo: {
            es: "Budapest, majestuosamente dividida por el río Danubio entre las zonas de Buda (la histórica, residencial y montañosa) y Pest (la vibrante, plana y comercial), es una de las ciudades más bellas, elegantes y económicas de Europa. Su mezcla de arquitectura imperial austrohúngara, historia dramática del siglo XX y una vida nocturna única la convierten en un destino irresistible para mochileros y amantes de la historia.<br><br><h3>Qué ver y hacer</h3><br>Cruza el icónico Puente de las Cadenas a pie y sube al Bastión de los Pescadores en el lado de Buda. Desde allí obtendrás las mejores vistas del Parlamento húngaro, un edificio neogótico gigantesco que te dejará sin aliento (especialmente iluminado de noche, cuando parece de oro). No puedes irte de Budapest sin probar sus famosas aguas termales. Los baños Széchenyi, con su arquitectura amarilla barroca, son los más famosos y espectaculares, ofreciendo una experiencia relajante en piscinas exteriores calientes incluso mientras nieva en invierno.<br><br><h3>Vida nocturna única: Ruin Bars</h3><br>La noche en Budapest pertenece a los 'Ruin Bars' (bares ruina). Son edificios antiguos y abandonados en el barrio judío que, en lugar de ser demolidos, han sido transformados en bares eclécticos, decorados con muebles viejos, bañeras, coches cortados y arte extraño. El ambiente es increíble, caótico y artístico. El más famoso y original es Szimpla Kert, un laberinto de salas y patios que debes visitar sí o sí para tomar una cerveza barata, fumar una shisha o simplemente sumergirte en la cultura local más alternativa y joven.",
            en: "Budapest, majestically divided by the Danube River between the areas of Buda (historic, residential, and hilly) and Pest (vibrant, flat, and commercial), is one of the most beautiful, elegant, and affordable cities in Europe. Its mix of Austro-Hungarian imperial architecture, dramatic 20th-century history, and unique nightlife make it an irresistible destination for backpackers and history lovers.<br><br><h3>What to See and Do</h3><br>Cross the iconic Chain Bridge on foot and go up to the Fisherman's Bastion on the Buda side. From there you will get the best views of the Hungarian Parliament, a gigantic neo-Gothic building that will leave you breathless (especially illuminated at night, when it looks like gold). You cannot leave Budapest without trying its famous thermal waters. The Széchenyi baths, with their yellow Baroque architecture, are the most famous and spectacular, offering a relaxing experience in hot outdoor pools even while it snows in winter.<br><br><h3>Unique Nightlife: Ruin Bars</h3><br>The night in Budapest belongs to the 'Ruin Bars'. These are old, abandoned buildings in the Jewish Quarter that, instead of being demolished, have been transformed into eclectic bars, decorated with old furniture, bathtubs, cut cars, and strange art. The atmosphere is incredible, chaotic, and artistic. The most famous and original is Szimpla Kert, a maze of rooms and courtyards that you must visit to grab a cheap beer, smoke a shisha, or simply immerse yourself in the most alternative and young local culture."
        },
        imagen: "images/budapest.jpg"
    },
    {
        id: 8,
        titulo: { 
            es: "Cuzco y la magia de los Andes Peruanos", 
            en: "Cusco and the Magic of the Peruvian Andes" 
        },
        descripcion: { 
            es: "La puerta de entrada a Machu Picchu. Historia inca, aclimatación y aventura.", 
            en: "The gateway to Machu Picchu. Inca history, acclimatization, and adventure." 
        },
        texto_completo: {
            es: "Cuzco, la antigua capital del Imperio Inca y 'ombligo del mundo', situada a 3.400 metros de altura en los Andes peruanos, es una ciudad que te roba el corazón (y a veces el aire, literalmente). Es el punto de partida obligatorio para visitar una de las maravillas del mundo moderno: Machu Picchu, pero la ciudad en sí misma, con su mezcla de muros incas y balcones coloniales españoles, merece varios días de exploración profunda.<br><br><h3>Aclimatación y exploración</h3><br>Tómate el primer día con mucha calma para evitar el temido mal de altura (soroche). Bebe mucho mate de coca, come ligero y pasea despacio. Explora la Plaza de Armas, visita la impresionante catedral construida sobre un palacio inca y piérdete por las cuestas del barrio bohemio de San Blas, lleno de artesanos. No te pierdas el mercado de San Pedro para una explosión de colores, olores y sabores locales, y para ver a las locales con sus trajes tradicionales y alguna que otra llama.<br><br><h3>El camino a Machu Picchu</h3><br>Desde Cuzco, explora el Valle Sagrado de los Incas (Pisac, Ollantaytambo, Moray) antes de dirigirte a la ciudadela perdida. Ya sea que llegues cómodamente en tren panorámico o haciendo el legendario Camino Inca de 4 días a pie, la primera vista de Machu Picchu entre la bruma de la montaña Huayna Picchu es un momento que te pondrá la piel de gallina. Es un lugar con una energía ancestral palpable que justifica todo el esfuerzo del viaje y cada céntimo gastado.",
            en: "Cusco, the ancient capital of the Inca Empire and 'navel of the world', located at 3,400 meters high in the Peruvian Andes, is a city that steals your heart (and sometimes your breath, literally). It is the mandatory starting point to visit one of the wonders of the modern world: Machu Picchu, but the city itself, with its mix of Inca walls and Spanish colonial balconies, deserves several days of deep exploration.<br><br><h3>Acclimatization and Exploration</h3><br>Take the first day very calmly to avoid the dreaded altitude sickness (soroche). Drink plenty of coca tea, eat light, and walk slowly. Explore the Plaza de Armas, visit the impressive cathedral built on an Inca palace, and get lost on the slopes of the bohemian neighborhood of San Blas, full of artisans. Don't miss the San Pedro market for an explosion of local colors, smells, and flavors, and to see locals in their traditional costumes and the occasional llama.<br><br><h3>The Road to Machu Picchu</h3><br>From Cusco, explore the Sacred Valley of the Incas (Pisac, Ollantaytambo, Moray) before heading to the lost citadel. Whether you arrive comfortably by panoramic train or by hiking the legendary 4-day Inca Trail, the first view of Machu Picchu amidst the mist of Huayna Picchu mountain is a moment that will give you goosebumps. It is a place with palpable ancestral energy that justifies all the effort of the trip and every penny spent."
        },
        imagen: "images/cuzco.jpg"
    },
    {
        id: 9,
        titulo: { 
            es: "Roma Eterna: Un museo al aire libre", 
            en: "Eternal Rome: An Open-Air Museum" 
        },
        descripcion: { 
            es: "Camina por la historia. Guía para disfrutar del caos, el arte y la comida romana.", 
            en: "Walk through history. Guide to enjoying the chaos, art, and Roman food." 
        },
        texto_completo: {
            es: "Roma no se visita, se camina. Es un museo al aire libre inabarcable donde cada piedra tiene mil años de historia. Es caótica, ruidosa, desordenada y apasionada, y precisamente ahí radica su encanto irresistible. Prepárate para gastar suela de zapato, porque la mejor forma de descubrir la Ciudad Eterna es perdiéndose por sus calles empedradas, tropezándose con ruinas romanas milenarias y fuentes barrocas espectaculares en cada esquina inesperada.<br><br><h3>Los imprescindibles (con estrategia)</h3><br>El Coliseo y el Foro Romano son obligatorios para entender la historia de occidente. Compra la entrada online con antelación para evitar colas kilométricas bajo el sol y siente la grandeza del antiguo imperio en las gradas del anfiteatro. Para visitar el Vaticano (Museos y Basílica de San Pedro), madruga muchísimo o reserva una visita guiada que te permita entrar antes que el público general; la Capilla Sixtina lo merece. La Fontana di Trevi y el Panteón visítalos a primera hora de la mañana (antes de las 8 AM) si quieres verlos sin una marea humana de palos selfie.<br><br><h3>La 'Dolce Vita'</h3><br>Roma es también disfrutar de la vida y el paladar. Cruza el río Tíber para cenar en el barrio del Trastevere, lleno de restaurantes con encanto, hiedra en las fachadas y ambiente bohemio. Prueba la auténtica pasta carbonara (¡recuerda, sin nata, solo huevo y pecorino!) o unos *cacio e pepe*. Y por supuesto, el gelato es sagrado: tómate al menos uno al día en una heladería artesanal. Roma te agotará físicamente, pero te llenará el alma de belleza y buena comida.",
            en: "Rome is not visited, it is walked. It is an ungraspable open-air museum where every stone has a thousand years of history. It is chaotic, noisy, messy, and passionate, and that is precisely where its irresistible charm lies. Prepare to wear out your shoe soles, because the best way to discover the Eternal City is by getting lost in its cobbled streets, stumbling upon millenary Roman ruins and spectacular Baroque fountains around every unexpected corner.<br><br><h3>The Essentials (with Strategy)</h3><br>The Colosseum and the Roman Forum are mandatory to understand the history of the West. Buy your ticket online in advance to avoid miles-long queues in the sun and feel the grandeur of the ancient empire in the amphitheater stands. To visit the Vatican (Museums and St. Peter's Basilica), get up very early or book a guided tour that allows you to enter before the general public; the Sistine Chapel is worth it. Visit the Trevi Fountain and the Pantheon first thing in the morning (before 8 AM) if you want to see them without a human tide of selfie sticks.<br><br><h3>La 'Dolce Vita'</h3><br>Rome is also about enjoying life and the palate. Cross the Tiber River to dine in the Trastevere neighborhood, full of charming restaurants, ivy on the facades, and a bohemian atmosphere. Try authentic carbonara pasta (remember, no cream, just egg and pecorino!) or some *cacio e pepe*. And of course, gelato is sacred: have at least one a day at an artisanal ice cream parlor. Rome will exhaust you physically, but it will fill your soul with beauty and good food."
        },
        imagen: "images/roma.jpg"
    },
    {
        id: 10,
        titulo: { 
            es: "Bali: Espiritualidad entre arrozales", 
            en: "Bali: Spirituality Among Rice Paddies" 
        },
        descripcion: { 
            es: "Una ruta espiritual y fotográfica por el corazón verde de Indonesia. Templos, monos y cascadas.", 
            en: "A spiritual and photographic route through the green heart of Indonesia. Temples, monkeys, and waterfalls." 
        },
        texto_completo: {
            es: "Bali, conocida como la Isla de los Dioses, ofrece paisajes que cortan la respiración y una cultura hindú única en medio del archipiélago musulmán de Indonesia. Más allá de las playas de fiesta de Kuta, el verdadero corazón de Bali late en Ubud y el norte de la isla, entre selvas, volcanes y tradiciones ancestrales.<br><br><h3>Naturaleza y Cultura</h3><br>Alquila una moto (con precaución y seguro internacional) para moverte con libertad por la isla. Visita los arrozales escalonados de Tegalalang o Jatiluwih al amanecer para ver cómo los rayos del sol atraviesan la bruma tropical y reflejan el verde intenso. Descubre templos sagrados como Tirta Empul, donde puedes participar respetuosamente en el ritual de purificación bañándote en sus aguas sagradas junto a los locales, o el icónico templo de Ulun Danu Bratan flotando en el lago.<br><br>No te pierdas el Bosque de los Monos en Ubud, un santuario natural, pero ten mucho cuidado con tus gafas, comida y objetos brillantes, ¡son unos ladrones expertos! Bali es un destino que, a pesar del turismo masivo, mantiene una energía espiritual única visible en las ofrendas diarias de flores e incienso (canang sari) que encontrarás en cada acera, comercio y hogar cada mañana.",
            en: "Bali, known as the Island of the Gods, offers breathtaking landscapes and a unique Hindu culture amidst the Muslim archipelago of Indonesia. Beyond the party beaches of Kuta, the true heart of Bali beats in Ubud and the north of the island, among jungles, volcanoes, and ancestral traditions.<br><br><h3>Nature and Culture</h3><br>Rent a scooter (with caution and international insurance) to move freely around the island. Visit the Tegalalang or Jatiluwih rice terraces at sunrise to see how the sun's rays pierce the tropical mist and reflect the intense green. Discover sacred temples like Tirta Empul, where you can respectfully participate in the purification ritual by bathing in its holy waters alongside locals, or the iconic Ulun Danu Bratan temple floating on the lake.<br><br>Don't miss the Sacred Monkey Forest Sanctuary in Ubud, a natural sanctuary, but be very careful with your glasses, food, and shiny objects, they are expert thieves! Bali is a destination that, despite mass tourism, maintains a unique spiritual energy visible in the daily offerings of flowers and incense (canang sari) that you will find on every sidewalk, shop, and home every morning."
        },
        imagen: "images/bali.jpg"
    },
    {
        id: 11,
        titulo: { 
            es: "Nueva York: La ciudad que nunca duerme", 
            en: "New York: The City That Never Sleeps" 
        },
        descripcion: { 
            es: "La guía definitiva para no perderte nada en la Gran Manzana sin gastar una fortuna.", 
            en: "The ultimate guide not to miss anything in the Big Apple without spending a fortune." 
        },
        texto_completo: {
            es: "Nueva York es el escenario de mil películas y siempre tiene algo nuevo que ofrecer. Es una ciudad con una energía vibrante que te atrapa desde el primer minuto. En 5 días puedes ver lo esencial si te organizas bien y caminas rápido. El calzado cómodo es obligatorio, vas a hacer muchos kilómetros sobre el asfalto.<br><br><h3>Itinerario Express</h3><br><strong>Día 1:</strong> El clásico Midtown. Siente el pulso en Times Square (mejor de noche por las luces), visita el Rockefeller Center y sube al Top of the Rock para ver el atardecer con el Empire State de frente (la mejor vista de la ciudad). Pasea por la 5ª Avenida y entra en la Catedral de San Patricio.<br><strong>Día 2:</strong> Cruza el Puente de Brooklyn a pie a primera hora de la mañana para evitar multitudes y explora el barrio de DUMBO al otro lado. Luego vuelve en ferry para ver el impresionante skyline de Manhattan desde el agua por el precio de un billete de metro.<br><br>Para comer barato en una de las ciudades más caras del mundo, los carritos de 'Halal Guys' y las porciones de pizza de 1 dólar (ahora quizás 1.50$) son tus mejores aliados y están deliciosos. Y recuerda un truco clásico: el ferry naranja a Staten Island es gratuito, funciona 24h y pasa muy cerca de la Estatua de la Libertad, ofreciendo vistas geniales sin pagar ni un céntimo.",
            en: "New York is the setting of a thousand movies and always has something new to offer. It is a city with a vibrant energy that traps you from the first minute. In 5 days you can see the essentials if you organize well and walk fast. Comfortable footwear is mandatory; you are going to cover many kilometers on the asphalt.<br><br><h3>Express Itinerary</h3><br><strong>Day 1:</strong> Classic Midtown. Feel the pulse in Times Square (better at night for the lights), visit the Rockefeller Center, and go up to the Top of the Rock to watch the sunset with the Empire State Building in front (the best view of the city). Stroll down 5th Avenue and enter St. Patrick's Cathedral.<br><strong>Day 2:</strong> Walk across the Brooklyn Bridge first thing in the morning to avoid crowds and explore the DUMBO neighborhood on the other side. Then return by ferry to see the impressive Manhattan skyline from the water for the price of a subway ticket.<br><br>To eat cheaply in one of the most expensive cities in the world, 'Halal Guys' carts and $1 pizza slices (now maybe $1.50) are your best allies and are delicious. And remember a classic trick: the orange Staten Island Ferry is free, runs 24/7, and passes very close to the Statue of Liberty, offering great views without paying a cent."
        },
        imagen: "images/newyork.jpg"
    },
    {
        id: 12,
        titulo: { 
            es: "Patagonia: Aventura en el Fin del Mundo", 
            en: "Patagonia: Adventure at the End of the World" 
        },
        descripcion: { 
            es: "Senderismo extremo, glaciares y montañas. Prepárate para la aventura de tu vida en el sur.", 
            en: "Extreme hiking, glaciers, and mountains. Prepare for the adventure of a lifetime in the south." 
        },
        texto_completo: {
            es: "La Patagonia, compartida por Chile y Argentina, es tierra de aventureros, viento feroz y naturaleza salvaje en estado puro. Es uno de los últimos rincones vírgenes del planeta donde el ser humano se siente diminuto. El Glaciar Perito Moreno (Argentina) te dejará sin palabras; ver y escuchar las rupturas de bloques de hielo del tamaño de edificios cayendo al lago es un espectáculo sonoro y visual sobrecogedor que no olvidarás jamás.<br><br><h3>Trekking de clase mundial</h3><br>Si te gusta el trekking, El Chaltén (Argentina) es tu destino. La caminata hasta la Laguna de los Tres para ver el Monte Fitz Roy es dura, pero la recompensa visual al llegar a la cima es inigualable. En el lado chileno, el Parque Nacional Torres del Paine ofrece el famoso circuito W, una ruta de varios días entre montañas de granito, lagos turquesas y glaciares que es el sueño de cualquier montañista.<br><br><strong>Consejo de supervivencia:</strong> El clima aquí es impredecible y cambia en cuestión de minutos. Puedes tener las cuatro estaciones en un mismo día: sol radiante, lluvia torrencial, nieve y viento huracanado. Vístete siempre por capas (sistema de cebolla) y lleva un cortavientos impermeable de muy buena calidad. La Patagonia no perdona, pero su belleza salvaje y desolada te marcará para siempre.",
            en: "Patagonia, shared by Chile and Argentina, is a land of adventurers, fierce wind, and wild nature in its purest state. It is one of the last virgin corners of the planet where humans feel tiny. The Perito Moreno Glacier (Argentina) will leave you speechless; seeing and hearing blocks of ice the size of buildings breaking off and falling into the lake is an overwhelming sonic and visual spectacle that you will never forget.<br><br><h3>World-Class Trekking</h3><br>If you like trekking, El Chaltén (Argentina) is your destination. The hike to Laguna de los Tres to see Mount Fitz Roy is tough, but the visual reward upon reaching the top is unmatched. On the Chilean side, Torres del Paine National Park offers the famous W circuit, a multi-day route among granite mountains, turquoise lakes, and glaciers that is every mountaineer's dream.<br><br><strong>Survival Tip:</strong> The weather here is unpredictable and changes in a matter of minutes. You can experience all four seasons in a single day: radiant sun, torrential rain, snow, and hurricane-force winds. Always dress in layers (onion system) and carry a very good quality waterproof windbreaker. Patagonia does not forgive, but its wild and desolate beauty will mark you forever."
        },
        imagen: "images/patagonia.jpg"
    }
];

// Hacer global la variable para que el carrusel de main.js pueda leerla si es necesario
window.datosArticulos = dbArticulos;

document.addEventListener('DOMContentLoaded', () => {
    cargarArticulos();
    
    // Comprobar si venimos de un enlace con ID (por ejemplo del carrusel de la home)
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get('id');
    if(idUrl) {
        abrirDetalle(parseInt(idUrl));
    }
});

// --- FUNCIÓN PARA CARGAR LOS ARTÍCULOS EN EL GRID ---
function cargarArticulos() {
    // Obtener contenedor
    const contenedor = document.getElementById('contenedor-grid-articulos');
    if (!contenedor) return;

    // 1. DETECTAR IDIOMA
    const lang = localStorage.getItem('idioma') || 'es';
    const txtLeerMas = lang === 'es' ? 'Leer más' : 'Read more';

    let htmlContent = '';

    dbArticulos.forEach(art => {
        // 2. USAR IDIOMA (Fallback a 'es' si falta la traducción)
        const titulo = art.titulo[lang] || art.titulo.es;
        const desc = art.descripcion[lang] || art.descripcion.es;
        // Construir HTML
        htmlContent += `
            <article class="articulo-completo">
                <img src="${art.imagen}" alt="${titulo}">
                <div class="contenido-art">
                    <h3>${titulo}</h3>
                    <p>${desc}</p>
                    <button class="btn-leer-mas" onclick="abrirDetalle(${art.id})">${txtLeerMas} &rarr;</button>
                </div>
            </article>
        `;
    });

    contenedor.innerHTML = htmlContent;
}

// --- FUNCIÓN PARA ABRIR EL DETALLE (Oculta grid, muestra detalle) ---
function abrirDetalle(id) {
    // Buscar artículo por ID 
    const articulo = dbArticulos.find(a => a.id === id);
    if (!articulo) return;

    const lang = localStorage.getItem('idioma') || 'es';

    // Rellenar datos
    document.getElementById('detalle-img').src = articulo.imagen;
    
    // USAR IDIOMA EN DETALLE
    document.getElementById('detalle-titulo').innerText = articulo.titulo[lang] || articulo.titulo.es;
    
    // Inyectamos el 'texto_completo' con innerHTML para que se vean los <h3> y <br>
    document.getElementById('detalle-cuerpo').innerHTML = articulo.texto_completo[lang] || articulo.texto_completo.es;

    // Cambiar vistas
    document.getElementById('contenedor-grid-articulos').style.display = 'none';
    document.getElementById('contenedor-vista-detalle').style.display = 'block';
    
    // Scroll arriba suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- FUNCIÓN PARA VOLVER A LA LISTA ---
function cerrarDetalle() {
    document.getElementById('contenedor-vista-detalle').style.display = 'none';
    document.getElementById('contenedor-grid-articulos').style.display = 'grid';
    
    // Scroll arriba suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
}