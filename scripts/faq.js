document.addEventListener('DOMContentLoaded', () => {
    cargarFAQ();
});

async function cargarFAQ() {
    const contenedor = document.getElementById('contenedor-faq-dinamico');
    
    if (!contenedor) return;

    try {
        // 1. Cargar JSON
        const respuesta = await fetch('data/faq.json');
        const preguntas = await respuesta.json();

        // 2. Generar HTML
        let htmlContent = '';
        preguntas.forEach(item => {
            htmlContent += `
                <div class="faq-item">
                    <div class="faq-pregunta">
                        ${item.pregunta}
                    </div>
                    <div class="faq-respuesta">
                        <p>${item.respuesta}</p>
                    </div>
                </div>
            `;
        });
        contenedor.innerHTML = htmlContent;

        // 3. Activar el Acordeón (Eventos Click)
        activarAcordeon();

    } catch (error) {
        console.error("Error cargando FAQ:", error);
        contenedor.innerHTML = "<p>Lo sentimos, no pudimos cargar las preguntas frecuentes.</p>";
    }
}

function activarAcordeon() {
    // Seleccionamos todas las preguntas que acabamos de crear
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta');
        
        pregunta.addEventListener('click', () => {
            // A. Cerrar otros si queremos que solo haya uno abierto a la vez (Opcional)
            // items.forEach(otroItem => {
            //     if (otroItem !== item) {
            //         otroItem.classList.remove('active');
            //         otroItem.querySelector('.faq-respuesta').style.maxHeight = null;
            //     }
            // });

            // B. Abrir/Cerrar el actual
            item.classList.toggle('active');
            
            const respuesta = item.querySelector('.faq-respuesta');
            if (item.classList.contains('active')) {
                // Si está activo, le damos altura para que se vea
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            } else {
                // Si no, lo ocultamos
                respuesta.style.maxHeight = null;
            }
        });
    });
}