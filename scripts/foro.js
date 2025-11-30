document.addEventListener('DOMContentLoaded', () => {
    cargarForo();
    configurarBotonesAccion();
});

function cargarForo() {
    const contenedor = document.getElementById('lista-temas-dinamica');
    
    if (!contenedor) return;

    // Verificamos si los datos incrustados existen
    if (!window.datosForo) {
        console.error("No se encontraron los datos del foro (window.datosForo)");
        contenedor.innerHTML = "<p>Error: No hay datos disponibles.</p>";
        return;
    }

    try {
        const temas = window.datosForo;
        let htmlContent = '';
        
        temas.forEach(tema => {
            // 1. Preparamos el HTML de las respuestas existentes
            let htmlRespuestas = '';
            
            if (tema.mensajes && tema.mensajes.length > 0) {
                tema.mensajes.forEach(msg => {
                    htmlRespuestas += `
                        <div class="mensaje-foro">
                            <span class="mensaje-usuario">${msg.usuario} dice:</span>
                            <p class="mensaje-texto">${msg.texto}</p>
                        </div>
                    `;
                });
            } else {
                htmlRespuestas = '<div class="sin-respuestas">No hay respuestas todavía. ¡Sé el primero!</div>';
            }

            // 2. Construimos la tarjeta completa
            htmlContent += `
                <div class="tema-item">
                    
                    <div class="tema-cabecera">
                        <div class="tema-info-principal">
                            <span class="tema-categoria">${tema.categoria}</span>
                            <h3 class="tema-titulo">${tema.titulo}</h3>
                            <div class="tema-meta">
                                Por <span class="tema-autor">${tema.autor}</span> • ${tema.fecha}
                            </div>
                        </div>
                        <div class="tema-stats">
                            <div class="stat-box">
                                <span class="stat-numero">${tema.respuestas}</span>
                                <span class="stat-label">Respuestas</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-numero">${tema.vistas}</span>
                                <span class="stat-label">Vistas</span>
                            </div>
                        </div>
                    </div>

                    <div class="contenedor-respuestas">
                        ${htmlRespuestas}
                        
                        <div class="zona-respuesta">
                            <button class="btn-responder" onclick="verificarSesion(event)">
                                ✍️ Escribir una respuesta
                            </button>
                        </div>
                    </div>

                </div>
            `;
        });

        contenedor.innerHTML = htmlContent;

        // 3. ACTIVAR EL ACORDEÓN
        const items = document.querySelectorAll('.tema-item');
        
        items.forEach(item => {
            const cabecera = item.querySelector('.tema-cabecera');
            
            cabecera.addEventListener('click', () => {
                item.classList.toggle('open');
            });
        });

    } catch (error) {
        console.error("Error procesando foro:", error);
        contenedor.innerHTML = "<p>Error al mostrar los temas.</p>";
    }
}

// --- FUNCIÓN DE SEGURIDAD (Simulada) ---
function configurarBotonesAccion() {
    // Buscamos el botón de "+ Nuevo Tema" que está en el HTML fijo
    const btnNuevoTema = document.querySelector('.btn-nuevo-tema');
    
    if (btnNuevoTema) {
        btnNuevoTema.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el enlace haga nada por defecto
            verificarSesion(e);
        });
    }
}

// Esta función se llama tanto desde "Nuevo Tema" como desde "Responder"
function verificarSesion(event) {
    // Evitamos que el click se propague y cierre el acordeón (stop propagation)
    if(event) event.stopPropagation();

    // Mensaje al usuario
    const confirmar = confirm("Para participar en el foro necesitas iniciar sesión. ¿Quieres ir al login?");
    
    if (confirmar) {
        window.location.href = 'login.html';
    }
}