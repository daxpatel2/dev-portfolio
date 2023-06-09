import './footer.css';
import React from 'react';

function Footer() {
    return (
        <header className="footer">
            <nav className="nav container">
                <a href="index.html" className="foot-logo">Dax Patel</a>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className='nav__item'>
                            <a href="#about" className="nav__link">
                                <i className="uil uil-github"></i>
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#projects" className="nav__link">
                                <i class="uil uil-linkedin"></i>
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#contact" className="nav__link">
                                <i class="uil uil-twitter"></i>
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close"></i>
                </div>
                <div className="nav__toggle">
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Footer;