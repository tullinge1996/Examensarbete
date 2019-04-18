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
                <h1>Sveriges <br></br>
                bästa <br></br>
                webbyrå
                </h1>
                 </div>
                 <div className="container3">
                    <h4>Snabbt, billigt och bra</h4>
                 </div>
                 <div className="container4">
                    <NavLink to="/Prices"><h5>Klicka här för prislista</h5></NavLink>
                 </div>
                 <div className="container5">
                    <NavLink to="/Contact"><h5>Kontakta oss</h5></NavLink>
                 </div>
            </div>
        );
    }
}

export default Home;