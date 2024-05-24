import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; IDW 2024. Todos los derechos reservados.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/">
                        <img src={process.env.PUBLIC_URL + '/img/fb.png'} alt="Facebook" />
                    </a>
                    <a href="https://web.whatsapp.com/">
                        <img src={process.env.PUBLIC_URL + '/img/wp.png'} alt="WhatsApp" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={process.env.PUBLIC_URL + '/img/ins.png'} alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
