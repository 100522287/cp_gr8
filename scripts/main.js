document.addEventListener("DOMContentLoaded", function() {
    // Intentar iniciar el carrusel (solo funcionará si existe en la página)
    carrusel();
});

// --- FUNCIÓN CARRUSEL (USANDO DATOS INCRUSTADOS) ---
function carrusel() {
    const track = document.getElementById("track-articulos");
    const botonIzq = document.getElementById("boton_izq_articulos");
    const botonDer = document.getElementById("boton_der_articulos");

    // Si no existen los elementos (ej: estamos en la página de Packs o FAQ), salimos
    if (!track || !botonIzq || !botonDer) return;

    console.log("Iniciando carrusel de home...");

    // Verificamos si los datos existen en la variable global
    if (!window.datosArticulos) {
        console.error("No se encontraron los datos del carrusel (window.datosArticulos)");
        track.innerHTML = "<p>Error: No se pudieron cargar los artículos.</p>";
        return;
    }

    try {
        // USAMOS LA VARIABLE GLOBAL DIRECTAMENTE
        const articulosCarrusel = window.datosArticulos; 
        
        let htmlContent = "";
        articulosCarrusel.forEach(art => {
            htmlContent += `
                <a href="articulo_detalle.html?id=${art.id}&from=home" style="text-decoration:none; display:block; height:100%;">
                    <div class="tarjeta-articulo">
                        <div class="articulo-img">
                            <img src="${art.imagen}" alt="${art.titulo}">
                        </div>
                        <div class="articulo-info">
                            <h4 data-lang="${art.lang_id_titulo}">${art.titulo}</h4>
                            <p data-lang="${art.lang_id_desc}">${art.descripcion}</p>
                        </div>
                    </div>
                </a>
            `;
        });
        
        track.innerHTML = htmlContent;

    } catch (error) {
        console.error("Error pintando carrusel:", error);
        track.innerHTML = "<p>Error al mostrar recomendaciones.</p>";
    }

    // Funciones de movimiento (Scroll)
    function obtenerAncho() {
        // Buscamos el elemento 'a' que envuelve la tarjeta
        const enlace = track.querySelector('a'); 
        // Ancho del enlace + el hueco (gap) de 30px
        return enlace ? enlace.offsetWidth + 30 : 300; 
    }

    botonDer.addEventListener("click", () => {
        track.scrollBy({ left: obtenerAncho(), behavior: 'smooth' });
    });

    botonIzq.addEventListener("click", () => {
        track.scrollBy({ left: -obtenerAncho(), behavior: 'smooth' });
    });
}