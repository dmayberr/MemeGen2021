// import React, { useState } from 'react'
import './MemeGenForm.css'

import './bootstrap.min.css'



const MemeGenForm = () => {
    
    return (
        // <Container>
        //     <Navbar expand="lg" bg="dark" variant="dark">
        //         <Navbar.Brand>
        //             <p className="display-2">MemeGen 2021</p>
        //         </Navbar.Brand>
        //     </Navbar>

        // </Container>

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
                        <li class="nav-item">
                            <a class="nav-link" href="#home">
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#home">
                                About
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MemeGenForm
