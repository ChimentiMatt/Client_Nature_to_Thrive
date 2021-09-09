import React from 'react'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
  } from "react-router-dom";  
import Header from './header.js'

export default function Landing(){
    return(
        <>
            <Header />
            <div id="landingContainer">
                <div id="landingTextContainer">
                    <p id="landingName">MONIKA TIPPIE</p>
                    <p id="landingLicensed">LICENSED PSYCHOTHERAPIST</p>
                <Router>
                    <Link to ='about' id="landingAbout">
                        ABOUT MONIKA
                    </Link>
                </Router>
     
                </div>
            </div>
        </>
    )

}