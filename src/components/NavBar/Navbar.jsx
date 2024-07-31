import './Navbar.css';
import Logo from '../../assets/icons/mainLogo.png';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [dynamicClass, setDynamicClass] = useState('NavComponent');
    const [serviceClass, setServiceClass] = useState('NavComponent');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (location.pathname !== '/') {
            console.log(location.pathname);
            setDynamicClass('NavComponentoff');
            setServiceClass('NavComponent');
        } else {
            console.log(location.pathname);
            setDynamicClass('NavComponent');
            setServiceClass('NavComponentoff');
        }
    }, [location.pathname]);

    const handleScroll = () => {
        console.log('scrollY:', window.scrollY);  // Añadido para verificar el valor de scrollY
        if (window.scrollY > 50) {
            setScrolled(true);
            console.log('scrolled');
        } else {
            setScrolled(false);
            console.log('No scroll');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`NavContainer ${scrolled ? 'scrolled' : ''}`}>
            <NavLink to="/" className='logoLink'>
                <img src={Logo} id='Logo' alt="Logo" />
            </NavLink>
            
            <div className={dynamicClass}>
                <NavLink to='/Products' className='NavComponentLink'> PRODUCTOS </NavLink>
            </div>

            <div className={dynamicClass}>
                <NavLink to='/Contacto' className='NavComponentLink'> CONTACTO </NavLink>
            </div>
        </div>
    );
}
