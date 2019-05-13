import React, { Component } from 'react';
import './Info.css';
import { NavLink } from "react-router-dom";



class Info extends Component {
    render() {
        return (
            <div className="section1Info">
                <div className="container1Info">
                    <h1>Välkommen till WCDE</h1>
                </div>
                <div className="container3Info">
                    <h1>Om oss</h1>
                </div>
                <div className="container2Info">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis tristique consequat sollicitudin. Integer id dictum metus, sit amet varius erat. Aenean a lacus libero.
                        Nunc libero erat, volutpat eu varius et, blandit in augue. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vulputate porta velit, a tempus erat gravida eget.
                        Sed sed pulvinar libero, in porttitor orci. Nunc lorem justo, malesuada nec nibh sed, ultrices varius quam.</h4>
                </div>
                <div className="containerbutton">
                    <NavLink to="/Prices"><h5>Klicka här för mer info</h5></NavLink>
                 </div>
                 <div className="containerpic1">
                   
                   </div>
                   <div className="containerpic2">
                      
                   </div>
                   <div className="containerpic3">
                      
                   </div>
                   <div className="containerpic4">
                      
                   </div>
                   <div className="containerpic5">
                      
                   </div>
                   <div className="containerpic6">
                      
                   </div>
                   <div className="containerpic7">
                      
                   </div>
            </div>
        );
    }
}

export default Info;