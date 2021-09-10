import React from 'react'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
  } from "react-router-dom";  
import AboutPage from './about.js';
import Header from './header.js'

export default function Landing(){
    return(
        <>
            <Header />
            <div id="landingContainer">
                <div id="landingTextContainer">
                    <p id="landingName">NATURE TO THRIVE</p>
                    <p id="landingLicensed">LICENSED ECOTHERAP</p>
                    <Router>
                        <Link to ='/about' id="landingAbout">
                            ABOUT MONIKA
                        </Link>
                    </Router>
                </div>
            </div>

            <AboutPage />
        </>
    )

}