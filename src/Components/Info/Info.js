import React, { Component } from 'react';
import './Info.css';
import { NavLink } from "react-router-dom";
import "animate.css";
import logo1 from "./office1.jpg";
import logo2 from "./office2.jpg";
import logo3 from "./office3.jpg";
import logo4 from "./office4.jpg";
import logo5 from "./office5.jpg";
import logo6 from "./office6.jpg";
import logo7 from "./office7.jpg";



class Info extends Component {
    render() {
        return (
            <div className="section1Info">
                
                <div className="container3Info animated bounceInLeft">
                    <h1>Om oss</h1>
                </div>
                <div className="container2Info animated bounceInLeft">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis tristique consequat sollicitudin. Integer id dictum metus, sit amet varius erat. Aenean a lacus libero.
                        Nunc libero erat, volutpat eu varius et, blandit in augue. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vulputate porta velit, a tempus erat gravida eget.
                        Sed sed pulvinar libero, in porttitor orci. Nunc lorem justo, malesuada nec nibh sed, ultrices varius quam.</h4>
                </div>
                <div className="containerbutton animated bounceInLeft delay-1s">
                    <NavLink to="/Prices"><h5>Klicka här för mer info</h5></NavLink>
                 </div>
                 <div className="containerpic1 animated fadeInDown delay-1s">
                 <img className="officeimage" src={logo7} alt="Animated Office image"></img>
                   </div>
                   <div className="containerpic2 animated fadeInDown delay-1s">
                   <img className="officeimage" src={logo2} alt="Animated Office image"></img>
                   </div>
                   <div className="containerpic3 animated fadeInLeft delay-1s">
                   <img className="officeimage" src={logo3} alt="Animated Office image"></img>
                   </div>
                   <div className="containerpic4 animated fadeInRight delay-1s">
                   <img className="officeimage" src={logo4} alt="Animated Office image"></img>
                   </div>
                   <div className="containerpic5 animated fadeInUp delay-1s">
                   <img className="officeimage" src={logo5} alt="Animated Office image"></img>
                   </div>
                   <div className="containerpic6 animated fadeInUp delay-1s">
                   <img className="officeimage" src={logo1} alt="Animated Office image"></img>
                   </div>
                   <div className="containerpic7 animated fadeInRight delay-1s">
                   <img className="officeimage" src={logo6} alt="Animated Office image"></img>
                   </div>
            </div>
        );
    }
}

export default Info;