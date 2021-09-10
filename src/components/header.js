import React from 'react'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
  } from "react-router-dom";


import Logo  from './images/logoEdit.png'

export default function Header() {
    return(
        <>
        <div id="headerContainer">
            
            <Router forceRefresh> 
                <Link to ='/' id="headerLeft">
                    <img id="logo" src={Logo} alt="logo"></img>
                    <p id="headerName">NATURE TO THRIVE</p>
                </Link>
            </Router>

            <div id="headerMiddle">
                <Router forceRefresh >
                    <Link to ='/about' className="headerLinks">
                        ABOUT
                    </Link>
                    <Link to ='/outdoor-ecotherapy' className="headerLinks">
                        OUTDOOR-ECOTHERAPY
                    </Link>
                    <Link to ='/psychotherapy' className="headerLinks">
                        PSYCHOTHERAPY
                    </Link>
                </Router>
            </div>
            <div id="headerRight">
                <div>
                   <Router forceRefresh >
                        <Link to ='/faq' className="headerLinksRight">
                            FAQ
                        </Link>
                        <Link to ='/contact' className="headerLinksRight">
                            CONTACT
                        </Link>
                    </Router>
                </div>
                <div id="headerRightPhone">
                    (503) 964-9999
                </div>
            </div>
        </div>
        </>
    )
}