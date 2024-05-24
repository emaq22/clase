import React from 'react';

function Section1() {
    return (
        <section className="Seccion1">
            <h1>Disfruta de nuestros descuentos en alojamientos 3 estrellas</h1>
            <h2>Reserva ahora antes de quedarnos sin vacantes</h2>
            <div id="container_boton">
                <a href="/contacto">
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Hazlo Aquí</span>
                    </button>
                </a>

                <div className="gallery">
                    {/* Galería de imágenes */}
                    <img src="img/ciudad.jpg" alt="Hotel 1" />
                    <img src="img/ciudad.jpg" alt="Hotel 2" />
                    <img src="img/ciudad.jpg" alt="Hotel 3" />
                </div>

                <div className="services">
                    <h3>Servicios</h3>
                    <ul>
                        <li>Wifi gratuito</li>
                        <li>Desayuno incluido</li>
                        <li>Estacionamiento</li>
                    </ul>
                </div>

                <div className="testimonials">
                    <h3>Testimonios</h3>
                    <p>"Excelente servicio y habitaciones cómodas. Definitivamente volveré a alojarme aquí."</p>
                    <p>"El personal fue muy amable y servicial durante toda mi estadía."</p>
                </div>

                <div className="special-offers">
                    <h3>Ofertas Especiales</h3>
                    <p>¡Reserva ahora y obtén un 10% de descuento en tu estadía!</p>
                </div>

                <div className="location-info">
                    <h3>Ubicación</h3>
                    <p>Los alojamientos están ubicados en una zona céntrica, cerca de atracciones locales y restaurantes.</p>
                </div>

                {/* Formulario de reserva */}
                <form>
                    {/* Campos del formulario */}
                </form>
            </div>
        </section>
    );
}

export default Section1;
