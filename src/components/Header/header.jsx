import './header.css';
import React from 'react';
import resume from '../../assets/DaxPatelResume2023.pdf'

function Header() {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Dax Patel</a>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> HOME
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> ABOUT
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> PROJECTS
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> CONTACT
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a target="_blank" href={resume} className="nav__link">
                                <i className="uil uil-message nav__icon"></i> RESUME
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

export default Header;