import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
        <Link href="#root" className='footer-link'>Contáctanos</Link>
        <span>© 2026 Sonido Vivo </span>
        <a href="#root" className='footer-link'>Volver Arriba </a>
    </footer>
    );
}

export default Footer;