import './header.css';
import React, { useState } from 'react';
import resume from '../../assets/DaxPatelResume2023.pdf'

function Header() {
    const [Toggle,showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Dax Patel</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
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
                            <a target="_blank" href={resume} className="nav__link">
                                <i class="uil uil-file-copy-alt nav__icon"></i> RESUME
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> CONTACT
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;