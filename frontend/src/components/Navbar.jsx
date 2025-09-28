import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        closeMenu();
    }, [location]);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/skills', label: 'Skills' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-modern ${
            scrolled ? 'scrolled navbar-dark' : 'navbar-light'
        }`}>
            <div className="container">
                {/* Brand/Logo */}
                <Link 
                    className="navbar-brand brand-gradient" 
                    to="/" 
                    onClick={closeMenu}
                >
                    Portfolio
                </Link>

                {/* Mobile menu button */}
                <button
                    className="navbar-toggler navbar-toggler-modern"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className={`navbar-toggler-icon navbar-toggler-icon-modern ${isMenuOpen ? 'rotated' : ''}`}></span>
                </button>

                {/* Navigation menu */}
                <div className={`collapse navbar-collapse navbar-collapse-modern ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.path}>
                                <Link 
                                    className={`nav-link nav-link-modern ${
                                        location.pathname === item.path ? 'active' : ''
                                    }`}
                                    to={item.path} 
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;