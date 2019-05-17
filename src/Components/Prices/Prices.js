    
import React, { Component } from 'react';
import './Prices.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import logo from "./logo2.png";

  class Prices extends Component {
    render() {
        return (
          <div className ="pricesection1 animated bounceInLeft">
          <h1 className ="pricetext ">Alla våra priser</h1>
          <h4 className ="pricetext2">Hitta det paket som passar just dig och dina behov</h4>
          <Card className="pricecontainer1 ">
          <CardImg className="cardImage3" src={logo} alt="Logo" />
            <CardBody>
              <CardTitle className="titletext">Mini</CardTitle>
              <CardSubtitle className="titletext2">Läs mer om Webbpaket Mini genom att trycka på knappen nedan.</CardSubtitle>
              <Button className ="cardbutton">Klicka här för att läsa mer</Button>
            </CardBody>
          </Card>
          <Card className="pricecontainer2">
          <CardImg className="cardImage3" src={logo} alt="Logo" />
            <CardBody>
              <CardTitle className="titletext">Bas</CardTitle>
              <CardSubtitle className="titletext2">Läs mer om Webbpaket Bas genom att trycka på knappen nedan.</CardSubtitle>
              <Button className ="cardbutton">Klicka här för att läsa mer</Button>
            </CardBody>
          </Card>
          <Card className="pricecontainer3">
            <CardImg className="cardImage3" src={logo} alt="Logo" />
            <CardBody>
              <CardTitle className="titletext">Premium</CardTitle>
              <CardSubtitle className="titletext2">Läs mer om Webbpaket Premium genom att trycka på knappen nedan.</CardSubtitle>
              <Button className ="cardbutton">Klicka här för att läsa mer</Button>
            </CardBody>
          </Card>
        </div>
      );
    };  
    }

export default Prices;