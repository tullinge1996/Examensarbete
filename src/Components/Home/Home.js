import React, { Component } from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className="section2">
                <div className="container1">
                    <h1>WCDE</h1>
                 </div>
                <div className="container2">
                    <h1>Sveriges 
                    bästa 
                    webbyrå
                    </h1>
                 </div>
                 <div className="container3">
                    <h4>Snabbt, billigt och bra</h4>
                 </div>
                 <div className="container35">
                    <h4>vitae felis suscipit pulvinar nec ut ligula. Vivamus nisi nunc, dictum nec imperdiet et, hendrerit at quam.
                        Etiam eleifend odio in luctus aliquet. Sed ultricies lectus at dapibus consequat.
                        Cras ante nibh, scelerisque at sollicitudin a, mattis ut neque.
                        Praesent vesti mattis bibendum, sapien erat euismod mi, eget vehicula tellus ligula nec odio.
                        Cras eu auctor massa Cras ante nibh, scelerisque at.</h4>
                 </div>
                 <div className="container4">
                    <NavLink to="/Prices"><h5>Klicka här för prislista</h5></NavLink>
                 </div>
                 <div className="container5">
                    <NavLink to="/Contact"><h5>Kontakta oss</h5></NavLink>
                 </div>
                 <div className="container6">
                    
                 </div>
            </div>
        );
    }
}

export default Home;