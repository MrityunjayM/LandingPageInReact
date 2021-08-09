import React, { useState } from 'react'
import { Fade } from 'react-reveal'

import './Header.css'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header>
            <h1 className="logo">
                <a href="/">logo.</a>
            </h1>

            <nav className='nav-container'>
                <ul className='nav-list'>
                    <li className='nav-item'><a href='#' className='nav-link'>SERVICES</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>CLIENT</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>CAREER</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>ABOUT</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>CONTACT</a></li>
                </ul>

                <button 
                onClick={() => setShowMenu(!showMenu)} 
                className={ showMenu ? 'btn active' : 'btn' } 
                title={!showMenu ? 'Open Menu' : 'Close Menu'}
                ></button>
            </nav>

            {<div style={{display: showMenu ? '' : "none", width: "100%"}}>
                <Fade top when={showMenu} collapse>
                    <div className="hamburger-menu" >
                        <div className='hamburger-menu-nav'>
                            <ul className='nav-list'>
                                <li className='nav-item magic'><a href='#' className='nav-link'>Services</a></li>
                                <li className='nav-item magic'><a href='#' className='nav-link'>Clients</a></li>
                                <li className='nav-item magic'><a href='#' className='nav-link'>Careers</a></li>
                                <li className='nav-item magic'><a href='#' className='nav-link'>About</a></li>
                                <li className='nav-item magic'><a href='#' className='nav-link'>News</a></li>
                                <li className='nav-item magic'><a href='#' className='nav-link'>Contact</a></li>
                            </ul>
                        </div>

                        <div className='hamburger-menu-nav-links'>
                            <div className='hamburger-menu-linkBx'>
                                <h5>Experiment</h5>
                                <ul>
                                    <li className='magic'><a href="#">Lorem</a></li>            
                                    <li className='magic'><a href="#">LoremIpsum</a></li>            
                                    <li className='magic'><a href="#">Lorem</a></li>            
                                    <li className='magic'><a href="#">LoremSat</a></li>
                                </ul>        
                            </div>
                            <div className='hamburger-menu-linkBx'>
                                <h5>Misc</h5>
                                <ul>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">LoremSit</a></li>
                                    <li className='magic'><a href="#">LoremSitamet</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                </ul>
                            </div>
                            <div className='hamburger-menu-linkBx'>
                                <h5>Social</h5>
                                <ul>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                </ul>
                            </div>
                            <div className='hamburger-menu-linkBx'>
                                <h5>Directions</h5>
                                <ul>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                    <li className='magic'><a href="#">Lorem</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>}
        </header>
    )
}

export default Header