import React, { Component } from 'react';
import './Info.css';
import { NavLink } from "react-router-dom";
import "animate.css";
import logo from "./logofix.png";



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
                   
                   </div>
                   <div className="containerpic2 animated fadeInDown delay-1s">
                      
                   </div>
                   <div className="containerpic3 animated fadeInLeft delay-1s">
                      
                   </div>
                   <div className="containerpic4 animated fadeInRight delay-1s">
                      
                   </div>
                   <div className="containerpic5 animated fadeInUp delay-1s">
                      
                   </div>
                   <div className="containerpic6 animated fadeInUp delay-1s">
                      
                   </div>
                   <div className="containerpic7 animated fadeInRight delay-1s">
                      
                   </div>
            </div>
        );
    }
}

export default Info;