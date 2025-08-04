'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import './navbar.scss';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigateToServices = (e) => {
        e.preventDefault();
        router.push('/#services');
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="nav-container">
                <a href="/" className="logo">
                    <img src="/favicon.svg" />
                </a>

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="/" onClick={() => setMenuOpen(false)}>Home</a>

                    {pathname === '/' ? (
                        <ScrollLink
                            to="services"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </ScrollLink>
                    ) : (
                        <a href="/#services" onClick={handleNavigateToServices}>
                            Services
                        </a>
                    )}

                    <a href="/universities" onClick={() => setMenuOpen(false)}>Universities</a>
                    <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
                </div>

                {pathname === '/consulation' ? (
                    <a href="/consultation" className="get_consult active">Get Consultation</a>) : ''
                }
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
