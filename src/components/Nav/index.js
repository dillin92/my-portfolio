import React from "react";
import styles from '../../../src/App.css'



const Nav = () => {
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light blue">
                <div class="container-fluid">
                <a class="navbar-brand" href="#portfolio">Dillin Helsley's Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="/" aria-current="page">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#footer">Contact</a>
                        </li>
                        
                    
                    </ul>
                    
                </div>
                </div>
            </nav>

        </header>
    )
}

export default Nav;