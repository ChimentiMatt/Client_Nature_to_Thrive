import React from 'react'
import Header from './header.js'
import Monika from './images/MonikaHeadshot.jpg'
import MonikaHorizontal from './images/MonikaH.jpg'
import Nature from './images/nature3_edit1.jpg'

export default function AboutPage() {
    return(
        <>
            <Header />
            <div id="aboutPage">
            <img src={Nature} alt="nature" id="aboutPageHeaderImg"></img>

                <div id="aboutPageContextArea"> 
                    <p id="aboutPageTitle">ABOUT MONIKA</p>
                    <div>
                        <img id ="MonikaAboutImg" src={MonikaHorizontal}></img>
                        <div id="aboutPageContentContainer">

                            <p>SDLKFJSDLFSF SLDKFSDLFK Sflknfsdlkf asdlf sad;fl nasf asd;lf kajsdf l;as a;jfsadasfsadf ksadkfsadf saf asdk;f hsadkjfhd skjfhasdkf sadkf jasdkfj hasdkf hasdk;f hasdkfj asdkf jasd kfjas dfk;jas df ;ksajd</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}