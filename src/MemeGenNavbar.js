// import React, { useState } from 'react'
import './bootstrap.min.css'



const MemeGenNavbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    MemeGen 2021
                </a>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">                        
                        <li class="nav-item">
                            <a class="nav-link" href="#home">
                                Create New Meme
                            </a>
                        </li>                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MemeGenNavbar
