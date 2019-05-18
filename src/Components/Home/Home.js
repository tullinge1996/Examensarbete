import React, { Component } from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";
import "animate.css";
import logo from "./logofix.png";
import logo2 from "./websiteanimation.gif";
import {Helmet} from "react-helmet";


class Home extends Component {
   render() {
       return (
          <React.Fragment>
         <Helmet>
         <title> Digital Webbyrå som levererar hemsidor till ett billigt pris - CEDWebb</title>
         <meta name="description" content="Välkommen till CEDWebb, en Webbyrå som levererar hemsidor till ett billigt pris" charSet="utf-8" />
         </Helmet>
           <div className="section2">
               <div className="container1 animated bounceInLeft">
               <img className ="logolayouthome animated bounceInLeft" src={logo} alt="Bild på företagslogga" />
                </div>
               <div className="container2 animated bounceInLeft">
                   <h1>Sveriges 
                   bästa 
                   webbyrå
                   </h1>
                </div>
                <div className="container3 animated bounceInLeft">
                   <h4>Snabbt, billigt och bra</h4>
                </div>
                <div className="container35 animated bounceInLeft">
                   <h4>CEDW är en nystartad liten Webbyrå i Stockholm som består av ett par nyexaminerade studenter.
                       Vi levererar väldesignade, stabila och sökoptimerade hemsidor till företag och privatpersoner.
                        Vi arbetar främst med Wordpress och React och kan skapa  unika designer för just ditt företag.
                        Vi har som mål att göra din vision till verklighet, det som vi skapar tillsammans ska vara orginellt, skräddarsytt efter era krav och hålla hög kvalité.
                        </h4>
                </div>
                <div className="container4 animated bounceInLeft delay-1s">
                   <NavLink to="/Prices"><h5>Klicka här för prislista</h5></NavLink>
                </div>
                <div className="container5 animated bounceInLeft delay-1s">
                   <NavLink to="/Contact"><h5>Kontakta oss</h5></NavLink>
                </div>
                <div className="container6 animated">
                   <img className="animatedImage" src={logo2} alt="Animerat bildspel på olika enheter"></img>
                </div>
           </div>
           </React.Fragment>
       );
   }
}

export default Home;