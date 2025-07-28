'use client';

import { Link as ScrollLink, scroller } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import './navbar.scss';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigateToServices = (e) => {
        e.preventDefault();
        router.push('/#services');
    };

    return (
        <nav>
            <div className="nav-container">
                <a href="/">
                    <img src="/favicon.svg" />
                </a>

                <div className="nav-links">
                    <a href="/">Home</a>

                    {pathname === '/' ? (
                        <ScrollLink
                            to="services"
                            smooth={true}
                            duration={500}
                            offset={-80}
                        >
                            Services
                        </ScrollLink>
                    ) : (
                        <a href="/#services" onClick={handleNavigateToServices}>
                            Services
                        </a>
                    )}

                    <a href="/universities">Universities</a>
                    <a href="/about">About Us</a>
                </div>

                <a href='/consultation' className="get_consult">Get Consultation</a>
            </div>
        </nav>
    );
};

export default Navbar;
