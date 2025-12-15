// ============================================
// BASE DE DATOS FAQ (Multilingüe)
// ============================================
const dbFaq = [
    {
        id: 1,
        pregunta: { 
            es: "¿Cómo puedo reservar un pack de viaje?", 
            en: "How can I book a travel pack?" 
        },
        respuesta: { 
            es: "Puedes reservar directamente desde la página de 'Packs'. Selecciona el viaje que te gusta, elige tus fechas y sigue los pasos de pago seguro.", 
            en: "You can book directly from the 'Packs' page. Select the trip you like, choose your dates, and follow the secure payment steps." 
        }
    },
    {
        id: 2,
        pregunta: { 
            es: "¿Es seguro el pago con tarjeta?", 
            en: "Is credit card payment secure?" 
        },
        respuesta: { 
            es: "Totalmente. Utilizamos pasarelas de pago encriptadas (SSL) y aceptamos Visa, Mastercard y PayPal para garantizar tu seguridad.", 
            en: "Absolutely. We use encrypted payment gateways (SSL) and accept Visa, Mastercard, and PayPal to ensure your security." 
        }
    },
    {
        id: 3,
        pregunta: { 
            es: "¿Puedo cancelar mi reserva?", 
            en: "Can I cancel my booking?" 
        },
        respuesta: { 
            es: "Sí. Puedes cancelar sin coste hasta 48 horas antes de la salida del viaje. Pasado ese tiempo, se aplicará una penalización del 20%.", 
            en: "Yes. You can cancel free of charge up to 48 hours before the trip departure. After that time, a 20% penalty will apply." 
        }
    },
    {
        id: 4,
        pregunta: { 
            es: "¿Incluyen los vuelos?", 
            en: "Are flights included?" 
        },
        respuesta: { 
            es: "Depende del pack. La mayoría de nuestros packs 'Aventura' incluyen vuelos internacionales, pero los packs 'Escapada' suelen incluir solo hotel y actividades. Revisa el detalle de cada oferta.", 
            en: "It depends on the pack. Most of our 'Adventure' packs include international flights, but 'Getaway' packs usually include only hotel and activities. Check the details of each offer." 
        }
    },
    {
        id: 5,
        pregunta: { 
            es: "¿Viajáis con grupos grandes?", 
            en: "Do you travel with large groups?" 
        },
        respuesta: { 
            es: "Intentamos mantener la esencia mochilera. Nuestros grupos son reducidos, normalmente entre 8 y 12 personas, para asegurar una experiencia auténtica y flexible.", 
            en: "We try to keep the backpacker essence. Our groups are small, usually between 8 and 12 people, to ensure an authentic and flexible experience." 
        }
    },
    {
        id: 6,
        pregunta: { 
            es: "¿Necesito visado para los viajes?", 
            en: "Do I need a visa for the trips?" 
        },
        respuesta: { 
            es: "Para destinos fuera de la Unión Europea, es posible que necesites visado. Te enviaremos toda la información y ayuda necesaria para tramitarlo al confirmar tu reserva.", 
            en: "For destinations outside the European Union, you may need a visa. We will send you all the necessary information and help to process it when confirming your booking." 
        }
    },
    {
        id: 7,
        pregunta: { 
            es: "¿El seguro de viaje está incluido?", 
            en: "Is travel insurance included?" 
        },
        respuesta: { 
            es: "Todos nuestros packs incluyen un seguro básico de asistencia sanitaria. Sin embargo, recomendamos encarecidamente contratar el seguro de cancelación opcional durante el proceso de reserva.", 
            en: "All our packs include basic health assistance insurance. However, we strongly recommend purchasing the optional cancellation insurance during the booking process." 
        }
    },
    {
        id: 8,
        pregunta: { 
            es: "¿Puedo viajar solo/a?", 
            en: "Can I travel alone?" 
        },
        respuesta: { 
            es: "¡Por supuesto! De hecho, el 70% de nuestros viajeros se apuntan solos. Te asignaremos compañero/a de habitación del mismo género para que no pagues suplemento, o puedes elegir habitación individual si lo prefieres.", 
            en: "Of course! In fact, 70% of our travelers sign up alone. We will assign you a roommate of the same gender so you don't pay a supplement, or you can choose a single room if you prefer." 
        }
    },
    {
        id: 9,
        pregunta: { 
            es: "¿Qué tipo de equipaje debo llevar?", 
            en: "What type of luggage should I bring?" 
        },
        respuesta: { 
            es: "Recomendamos encarecidamente viajar con mochila, no con maleta rígida, ya que nos moveremos en transporte local y a veces por terrenos irregulares. En la ficha de cada viaje tienes una lista recomendada.", 
            en: "We strongly recommend traveling with a backpack, not a rigid suitcase, as we will move on local transport and sometimes on uneven terrain. In each trip's file, you have a recommended list." 
        }
    },
    {
        id: 10,
        pregunta: { 
            es: "¿Tengo que vacunarme?", 
            en: "Do I have to get vaccinated?" 
        },
        respuesta: { 
            es: "Depende del destino. Siempre recomendamos visitar tu Centro de Vacunación Internacional más cercano al menos un mes antes del viaje para recibir asesoramiento médico oficial.", 
            en: "It depends on the destination. We always recommend visiting your nearest International Vaccination Center at least one month before the trip to receive official medical advice." 
        }
    },
    {
        id: 11,
        pregunta: { 
            es: "¿Hay opciones para vegetarianos o alérgicos?", 
            en: "Are there options for vegetarians or allergies?" 
        },
        respuesta: { 
            es: "Sí. Al hacer tu reserva podrás indicar tus restricciones alimentarias. Nos encargaremos de avisar a los alojamientos y restaurantes previstos para que tengas opciones seguras.", 
            en: "Yes. When booking, you can indicate your dietary restrictions. We will take care of notifying the planned accommodations and restaurants so that you have safe options." 
        }
    },
    {
        id: 12,
        pregunta: { 
            es: "¿En qué idioma son las visitas?", 
            en: "What language are the tours in?" 
        },
        respuesta: { 
            es: "Nuestros coordinadores hablan español. Los guías locales suelen hablar inglés o español, dependiendo del destino remoto, pero el coordinador siempre estará ahí para traducir.", 
            en: "Our coordinators speak Spanish (and often English). Local guides usually speak English or Spanish, depending on the remote destination, but the coordinator will always be there to translate/help." 
        }
    }
];

// ============================================
// LÓGICA DE CARGA
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    cargarFAQ();
});

function cargarFAQ() {
    const contenedor = document.getElementById('contenedor-faq-dinamico');
    
    // Verificación de seguridad
    if (!contenedor) return;

    // DETECTAR IDIOMA
    const lang = localStorage.getItem('idioma') || 'es';
    // GENERAR CONTENIDO DINÁMICO
    try {
        let htmlContent = '';
        // RECORRER BASE DE DATOS
        dbFaq.forEach(item => {
            // SELECCIONAR TEXTO SEGÚN IDIOMA
            const preg = item.pregunta[lang] || item.pregunta.es;
            const resp = item.respuesta[lang] || item.respuesta.es;

            htmlContent += `
                <div class="faq-item">
                    <div class="faq-pregunta">
                        ${preg}
                    </div>
                    <div class="faq-respuesta">
                        <p>${resp}</p>
                    </div>
                </div>
            `;
        });
        
        contenedor.innerHTML = htmlContent;

        // Activar el Acordeón después de generar el contenido
        activarAcordeon();

    } catch (error) {
        console.error("Error procesando FAQ:", error);
        contenedor.innerHTML = "<p>Lo sentimos, no pudimos cargar las preguntas frecuentes.</p>";
    }
}

// Función para activar el comportamiento de acordeón
function activarAcordeon() {
    const items = document.querySelectorAll('.faq-item');
    // Añadir evento de clic a cada pregunta
    items.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta');
        // Evento clic
        pregunta.addEventListener('click', () => {
            // Abrir/Cerrar el actual
            item.classList.toggle('active');
            // Ajustar altura de la respuesta
            const respuesta = item.querySelector('.faq-respuesta');
            if (item.classList.contains('active')) {
                // Si está activo, le damos altura real
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            } else {
                // Si no, altura 0
                respuesta.style.maxHeight = null;
            }
        });
    });
}