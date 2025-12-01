// Base de datos COMPLETA de los 12 Artículos para la rejilla
const dbArticulos = [
    { id: 1, titulo: "Copenhague sobre dos ruedas: Guía ciclista definitiva", descripcion: "Descubre la capital danesa de la forma más auténtica: en bicicleta. Rutas y consejos.", imagen: "images/copenhagen.jpg" },
    { id: 2, titulo: "El embrujo azul de Chefchaouen: La joya del Rif", descripcion: "Piérdete en la medina más fotogénica de Marruecos y descubre sus secretos.", imagen: "images/chefchaouen.jpg" },
    { id: 3, titulo: "Sevilla: Tapas, Flamenco y Pasión en el sur", descripcion: "Una ruta sensorial por el corazón de Andalucía. Dónde comer y sentir el duende.", imagen: "images/sevilla.jpg" },
    { id: 4, titulo: "París Bohemio: Más allá de la Torre Eiffel", descripcion: "Descubre el lado más auténtico, artístico y menos turístico de la ciudad de la luz.", imagen: "images/paris.jpg" },
    { id: 5, titulo: "Kioto y la esencia del Japón tradicional", descripcion: "Guía para tu primer viaje: templos dorados, geishas y etiqueta japonesa.", imagen: "images/kioto.jpg" },
    { id: 6, titulo: "Safari en Kenia: La Gran Aventura Africana", descripcion: "Todo lo que necesitas saber para vivir la experiencia de tu vida en la sabana.", imagen: "images/safari.webp" },
    { id: 7, titulo: "Los secretos de Budapest: La Perla del Danubio", descripcion: "Descubre la perla del Danubio: baños termales, ruin bars y arquitectura monumental.", imagen: "images/budapest.jpg" },
    { id: 8, titulo: "Cuzco y la magia de los Andes Peruanos", descripcion: "La puerta de entrada a Machu Picchu. Historia inca, aclimatación y aventura.", imagen: "images/cuzco.jpg" },
    { id: 9, titulo: "Roma Eterna: Un museo al aire libre", descripcion: "Camina por la historia. Guía para disfrutar del caos, el arte y la comida romana.", imagen: "images/roma.jpg" },
    { id: 10, titulo: "Bali: Espiritualidad entre arrozales", descripcion: "Una ruta espiritual y fotográfica por el corazón verde de Indonesia. Templos, monos y cascadas.", imagen: "images/bali.jpg" },
    { id: 11, titulo: "Nueva York: La ciudad que nunca duerme", descripcion: "La guía definitiva para no perderte nada en la Gran Manzana sin gastar una fortuna.", imagen: "images/newyork.jpg" },
    { id: 12, titulo: "Patagonia: Aventura en el Fin del Mundo", descripcion: "Senderismo extremo, glaciares y montañas. Prepárate para la aventura de tu vida en el sur.", imagen: "images/patagonia.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    cargarArticulos();
});

function cargarArticulos() {
    const contenedor = document.getElementById('contenedor-grid-articulos');
    if (!contenedor) return;

    let htmlContent = '';

    dbArticulos.forEach(art => {
        htmlContent += `
            <article class="articulo-completo">
                <img src="${art.imagen}" alt="${art.titulo}">
                <div class="contenido-art">
                    <h3>${art.titulo}</h3>
                    <p>${art.descripcion}</p>
                    <a href="articulo_detalle.html?id=${art.id}">Leer más &rarr;</a>
                </div>
            </article>
        `;
    });

    contenedor.innerHTML = htmlContent;
}