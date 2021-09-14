import React from 'react'
import Header from './header.js'
import Monika from './images/MonikaHeadshot.jpg'
import Monikal from './images/MonikaHeadshot.jpg'

export default function AboutPage() {
    return(
        <>
            {/* <Header /> */}
            <section id="aboutSection">
                <div id="aboutPage">
                    <p id="aboutPageTitle">ABOUT MONIKA</p>
                    <div id="aboutPageContextArea"> 
                        <div id="aboutLeft">
                            <img id ="MonikaAboutImg" src={Monikal}></img>
                        </div>
                        <div id="aboutRight">
                            <p>Monika likes cats SLDKFSDLFK Sflknfsdlkf asdlf sad;fl nasf asd;lf kajsdf l;as a;jfsadasfsadf ksadkfsadf saf asdk;f hsadkjfhd skjfhasdkf sadkf jasdkfj hasdkf hasdk;f hasdkfj asdkf jasd kfjas dfk;jas df ;ksajd</p>
                        </div>
                    </div>             
                </div>
            </section>
        </>
    )
}