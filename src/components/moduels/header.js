import React from 'react'
import Logo  from '../images/logoEdit.png'

export default function Header() {
    return(
        <>
        <div id="headerContainer">
            <div id="headerLeft">
                <img id="logo" src={Logo}></img>
                <p id="headerName">NATURE TO THRIVE</p>
            </div>
            <div id="headerMiddle">
                <p>ABOUT</p>
                <p>OUTDOOR-ECOTHERAPY</p>
                <p>PSYCHOTHERAPY</p>
            </div>
            <div id="headerRight">
                <p>FAQ</p>
                <p>CONTACT</p>
            </div>
        </div>
        </>
    )
}