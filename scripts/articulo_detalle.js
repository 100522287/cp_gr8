document.addEventListener('DOMContentLoaded', () => {
    cargarDetalleArticulo();
});

function cargarDetalleArticulo() {
    // 1. Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const idArticulo = params.get('id');
    const source = params.get('from'); // Aquí leemos de dónde venimos

    const contenedor = document.getElementById('contenido-dinamico-detalle');

    // 2. Verificar datos
    if (!idArticulo) {
        if(contenedor) contenedor.innerHTML = "<p style='padding:40px; text-align:center;'>No se ha especificado ningún artículo.</p>";
        return;
    }

    if (!window.datosArticulos) {
        console.error("No se encontraron los datos (window.datosArticulos)");
        if(contenedor) contenedor.innerHTML = "<p style='padding:40px; text-align:center;'>Error de datos.</p>";
        return;
    }

    try {
        // 3. Buscar y pintar artículo
        const articulos = window.datosArticulos;
        const articulo = articulos.find(a => a.id.toString() === idArticulo);

        if (articulo) {
            const img = document.getElementById('detalle-img');
            const titulo = document.getElementById('detalle-titulo');
            const cuerpo = document.getElementById('detalle-cuerpo');
            
            if(img) img.src = articulo.imagen;
            if(titulo) titulo.textContent = articulo.titulo;
            if(cuerpo) cuerpo.innerHTML = articulo.texto_completo || articulo.descripcion;

            document.title = articulo.titulo + " - Mochileros";

            // 4. LÓGICA DEL BOTÓN VOLVER
            const btnVolver = document.querySelector('.btn-volver');
            if (btnVolver) {
                if (source === 'home') {
                    // Si venimos de home, cambiamos texto y enlace
                    btnVolver.textContent = "← Volver a Inicio";
                    btnVolver.href = "home_no_session.html";
                } else {
                    // Por defecto (si venimos de Artículos)
                    btnVolver.textContent = "← Volver a Artículos";
                    btnVolver.href = "articulos.html";
                }
            }

        } else {
            if(contenedor) contenedor.innerHTML = "<p style='padding:40px; text-align:center;'>Artículo no encontrado.</p>";
        }

    } catch (error) {
        console.error("Error:", error);
        if(contenedor) contenedor.innerHTML = "<p style='padding:40px; text-align:center;'>Error al cargar el artículo.</p>";
    }
}