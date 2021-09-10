import React from 'react'
import Header from './header.js'
import Monika from './images/MonikaHeadshot.jpg'
import MonikaHorizontal from './images/MonikaH.jpg'


export default function AboutPage() {
    return(
        <>
            <Header />
            <div id="aboutPage">


                <p id="aboutPageTitle">ABOUT MONIKA</p>

                <div id="aboutPageContextArea"> 
             
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