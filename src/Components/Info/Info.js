import React, { Component } from 'react';
import './Info.css';
import "animate.css";
import logo1 from "./office1.jpg";
import logo2 from "./office2.jpg";
import logo3 from "./office3.jpg";
import logo4 from "./office4.jpg";
import logo5 from "./office5.jpg";
import logo6 from "./office6.jpg";
import logo7 from "./office7.jpg";
import {Helmet} from "react-helmet";


class Info extends Component {
    render() {
        return (
            <React.Fragment>
         <Helmet>
         <title>Information - CEDWebb</title>
         <meta name="description" content="Information - CEDWebb" charSet="utf-8" />
         </Helmet>
            <div className="section1Info">
                <div className="container3Info animated bounceInLeft">
                    <h1>Om oss</h1>
                </div>
                <div className="container2Info animated bounceInLeft">
                    <h4>CEDW startades av tre klasskamrater 2019 direkt efter att vi hade tagit vår examen inom Front-end utveckling.
                        Vi alla var osäkra på vad vi ville göra direkt efter examen och beslöt därför att göra något tillsammans.
                        <br></br><br></br>Vi kände att vi ville testa våra kunskaper ute i arbetslivet direkt och skapa något eget.
                        Under vår utbildning så hade vi en kurs vid namn "Lärande i arbete" där vi fick arbeta på ett företag i 3 månader, detta
                        gav oss en inblick hur det är att arbeta på ett IT-företag och vi kände att vi också har kompetensen till att göra något eget.
                        <br></br><br></br>
                        Vi har som mål att göra er vision till verklighet, det som vi skapar tillsammans ska vara orginellt,
                         skräddarsytt efter era krav och hålla hög kvalité med hjälp av vår designkunskap.
                         <br></br><br></br>
                         Vänligen klicka runt på sidan och kontakta oss under fliken "Kontakt" om ni känner att ni behöver några fler frågor besvarade.
                    </h4>
                </div>
                 <div className="containerpic1 animated fadeInDown delay-1s">
                 <img className="officeimage" src={logo7} alt="Bild på dator och blommor på webbyrån och fönster"></img>
                   </div>
                   <div className="containerpic2 animated fadeInDown delay-1s">
                   <img className="officeimage" src={logo2} alt="Bild på dator och blommor på webbyrån och lampa"></img>
                   </div>
                   <div className="containerpic3 animated fadeInLeft delay-1s">
                   <img className="officeimage" src={logo3} alt="Gruppmöte på webbyrån"></img>
                   </div>
                   <div className="containerpic4 animated fadeInRight delay-1s">
                   <img className="officeimage" src={logo4} alt="Arbetsfika på webbyrån"></img>
                   </div>
                   <div className="containerpic5 animated fadeInUp delay-1s">
                   <img className="officeimage" src={logo5} alt="Högtalare och dator på webbyrån"></img>
                   </div>
                   <div className="containerpic6 animated fadeInUp delay-1s">
                   <img className="officeimage" src={logo1} alt="Skrivbord med dator och tavla från kontoret på webbyrån"></img>
                   </div>
                   <div className="containerpic7 animated fadeInRight delay-1s">
                   <img className="officeimage" src={logo6} alt="Dator på webbyrån"></img>
                   </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Info;