import React from 'react';
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="xbcritic-nav-content">
                    <a href="/"><h1>XBCritic</h1></a>
                    <a href="https://github.com/leopassosleite">
                        <div className="xbcritic-contact-container">
                            <p className="xbcritic-contact-link">/leopassosleite</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar