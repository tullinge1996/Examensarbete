import React, { Component } from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";
import "animate.css";



class Home extends Component {
    render() {
        return (
            <div className="section2">
                <div className="container1 animated bounceInLeft">
                    <h1>WCDE</h1>
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
                    <h4>vitae felis suscipit pulvinar nec ut ligula. Vivamus nisi nunc, dictum nec imperdiet et, hendrerit at quam.
                        Etiam eleifend odio in luctus aliquet. Sed ultricies lectus at dapibus consequat.
                        Cras ante nibh, scelerisque at sollicitudin a, mattis ut neque.
                        Praesent vesti mattis bibendum, sapien erat euismod mi, eget vehicula tellus ligula nec odio.
                        Cras eu auctor massa Cras ante nibh, scelerisque at.</h4>
                 </div>
                 <div className="container4 animated bounceInLeft delay-1s">
                    <NavLink to="/Prices"><h5>Klicka här för prislista</h5></NavLink>
                 </div>
                 <div className="container5 animated bounceInLeft delay-1s">
                    <NavLink to="/Contact"><h5>Kontakta oss</h5></NavLink>
                 </div>
                 <div className="container6 animated">
                    <img className="animatedImage" src="https://useroom.com/wp-content/uploads/2017/05/website_wordpress_animation.gif" alt="Animated Computer gif"></img>
                 </div>
            </div>
        );
    }
}

export default Home;