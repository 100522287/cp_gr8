// Base de datos DETALLADA para la vista individual
const dbArticulosDetalle = [
    {
        id: 1, titulo: "Copenhague sobre dos ruedas", imagen: "images/copenhagen.jpg",
        texto_completo: "<h3>La ciudad de las bicis</h3><p>Copenhague no se entiende sin sus bicicletas. Es más que un medio de transporte; es una forma de vida. Con más de 390 km de carril bici, es el paraíso ciclista.</p><h3>Ruta recomendada</h3><p>Empieza en Nyhavn, sigue hacia la Sirenita pasando por el Kastellet y termina en el barrio de Nørrebro para cenar algo auténtico.</p>"
    },
    {
        id: 2, titulo: "El embrujo azul de Chefchaouen", imagen: "images/chefchaouen.jpg",
        texto_completo: "<h3>La Perla Azul</h3><p>Chefchaouen parece sacada de un sueño. Sus calles pintadas de infinitos tonos de azul tienen una explicación histórica ligada a los refugiados judíos de los años 30.</p><h3>Consejos</h3><p>Piérdete sin mapa por la medina. Sube a la Mezquita Española al atardecer para la mejor foto panorámica.</p>"
    },
    {
        id: 3, titulo: "Sevilla: Tapas y Pasión", imagen: "images/sevilla.jpg",
        texto_completo: "<h3>El color especial</h3><p>Sevilla atrapa. El olor a azahar, el color albero y la alegría de la gente son únicos.</p><h3>Dónde comer</h3><p>No te pierdas 'El Rinconcillo', el bar más antiguo (1670). Pide espinacas con garbanzos y un jerez.</p>"
    },
    {
        id: 4, titulo: "París Bohemio", imagen: "images/paris.jpg",
        texto_completo: "<h3>Más allá de la Torre Eiffel</h3><p>París tiene rincones secretos. El Canal Saint-Martin es donde los locales hacen picnic.</p><h3>Montmartre</h3><p>Evita la plaza de los pintores y busca la Rue de l'Abreuvoir y el viñedo secreto de la ciudad.</p>"
    },
    {
        id: 5, titulo: "Kioto y la esencia de Japón", imagen: "images/kioto.jpg",
        texto_completo: "<h3>Tradición viva</h3><p>Kioto es el corazón espiritual de Japón con más de 2000 templos. Fushimi Inari al amanecer es una experiencia mística.</p><h3>Gion</h3><p>El barrio de las geishas. Pasea al atardecer y respeta el silencio y la etiqueta local.</p>"
    },
    {
        id: 6, titulo: "Safari en Kenia", imagen: "images/safari.webp",
        texto_completo: "<h3>La Gran Migración</h3><p>Si viajas entre julio y octubre, verás millones de ñus cruzando el río Mara. Es el mayor espectáculo natural de la tierra.</p><h3>Consejos</h3><p>Lleva prismáticos y ropa de colores neutros. Madruga mucho, los leones cazan al amanecer.</p>"
    },
    {
        id: 7, titulo: "Secretos de Budapest", imagen: "images/budapest.jpg",
        texto_completo: "<h3>Termas y Ruinas</h3><p>Budapest es famosa por sus baños termales como Széchenyi. Pero su vida nocturna en los 'Ruin Bars' (bares en edificios abandonados) es lo que la hace única en Europa.</p>"
    },
    {
        id: 8, titulo: "Cuzco y Machu Picchu", imagen: "images/cuzco.jpg",
        texto_completo: "<h3>El ombligo del mundo</h3><p>Cuzco es una joya colonial sobre cimientos incas. Aclimátate aquí antes de subir a Machu Picchu para evitar el mal de altura.</p>"
    },
    {
        id: 9, titulo: "Roma Eterna", imagen: "images/roma.jpg",
        texto_completo: "<h3>Museo al aire libre</h3><p>Roma no se visita, se camina. Desde el Coliseo hasta el Trastevere, cada esquina tiene historia. Prueba la pasta carbonara auténtica (sin nata).</p>"
    },
    {
        id: 10, titulo: "Bali Espiritual", imagen: "images/bali.jpg",
        texto_completo: "<h3>Isla de los Dioses</h3><p>Más allá de las playas, Ubud es el centro cultural. Visita los arrozales de Tegalalang y el Templo del Agua Tirta Empul para purificarte.</p>"
    },
    {
        id: 11, titulo: "Nueva York sin dormir", imagen: "images/newyork.jpg",
        texto_completo: "<h3>La Gran Manzana</h3><p>Nueva York es energía pura. Cruza el puente de Brooklyn al amanecer y come pizza de 1 dólar. Sube al Top of the Rock para las mejores vistas del Empire State.</p>"
    },
    {
        id: 12, titulo: "Patagonia Salvaje", imagen: "images/patagonia.jpg",
        texto_completo: "<h3>El fin del mundo</h3><p>Tierra de glaciares y montañas de granito. El trekking en Torres del Paine o ver el Perito Moreno son experiencias que te cambian la vida. Prepárate para las 4 estaciones en un día.</p>"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const source = params.get('from'); // Para saber si volver a Home o Artículos

    const articulo = dbArticulosDetalle.find(a => a.id === id);

    if (articulo) {
        // Rellenar datos
        const img = document.getElementById('detalle-img');
        const titulo = document.getElementById('detalle-titulo');
        const cuerpo = document.getElementById('detalle-cuerpo');
        const btnVolver = document.querySelector('.btn-volver');

        if (img) img.src = articulo.imagen;
        if (titulo) titulo.innerText = articulo.titulo;
        if (cuerpo) cuerpo.innerHTML = articulo.texto_completo;
        document.title = articulo.titulo + " - Mochileros";

        // Lógica del botón volver
        if (btnVolver) {
            if (source === 'home') {
                btnVolver.href = "home_no_session.html";
                btnVolver.innerHTML = "&larr; Volver a Inicio";
            } else {
                btnVolver.href = "articulos.html";
                btnVolver.innerHTML = "&larr; Volver a Artículos";
            }
        }
    } else {
        const contenedor = document.getElementById('contenido-dinamico-detalle');
        if (contenedor) contenedor.innerHTML = "<p style='text-align:center; padding:50px;'>Artículo no encontrado.</p>";
    }
});