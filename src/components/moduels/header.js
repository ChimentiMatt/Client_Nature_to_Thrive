import React from 'react'
import Logo  from '../images/logoEdit.png'

export default function Header() {
    return(
        <>
        <div id="headerContainer">
            <img id="logo" src={Logo}></img>
            <p id="headerName">NATURE TO THRIVE</p>
        </div>
        </>
    )
}