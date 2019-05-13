    
import React, { Component } from 'react';
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Info from "./Components/Info/Info";
import Prices from "./Components/Prices/Prices";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Work/Work";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <div className="gridContainer">
          <Route exact path="/" component={Home} />
          <Route path="/Info" component={Info} />
          <Route path="/Prices" component={Prices} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
