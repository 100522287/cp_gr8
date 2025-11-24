document.addEventListener("DOMContentLoaded", function() {
    // Iniciar Carrusel si existe en la página
    carrusel();
});

// --- FUNCIÓN CARRUSEL (CARGA DINÁMICA JSON) ---
async function carrusel() {
    const track = document.getElementById("track-articulos");
    const botonIzq = document.getElementById("boton_izq_articulos");
    const botonDer = document.getElementById("boton_der_articulos");

    // Si no existen los elementos (ej: estamos en la página de Packs), no hacemos nada
    if (!track || !botonIzq || !botonDer) return;

    console.log("Iniciando carrusel de home...");

    try {
        const response = await fetch('data/articulos.json');
        if (!response.ok) throw new Error('No se pudo cargar articulos.json');
        
        const articulos = await response.json();
        
        // Solo cogemos los primeros 5 para el carrusel
        const articulosCarrusel = articulos.slice(0, 5);
        
        let htmlContent = "";
        articulosCarrusel.forEach(art => {
            htmlContent += `
                <div class="tarjeta-articulo">
                    <div class="articulo-img">
                        <img src="${art.imagen}" alt="${art.titulo}">
                    </div>
                    <div class="articulo-info">
                        <h4 data-lang="${art.lang_id_titulo}">${art.titulo}</h4>
                        <p data-lang="${art.lang_id_desc}">${art.descripcion}</p>
                    </div>
                </div>
            `;
        });
        
        track.innerHTML = htmlContent;

    } catch (error) {
        console.error("Error cargando carrusel:", error);
    }

    // Funciones de movimiento
    function obtenerAncho() {
        const tarjeta = track.querySelector('.tarjeta-articulo');
        return tarjeta ? tarjeta.offsetWidth + 30 : 300; 
    }

    botonDer.addEventListener("click", () => {
        track.scrollBy({ left: obtenerAncho(), behavior: 'smooth' });
    });

    botonIzq.addEventListener("click", () => {
        track.scrollBy({ left: -obtenerAncho(), behavior: 'smooth' });
    });
}