    
import React, { Component } from 'react';
import './Prices.css';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import logo from "./logo2.png";
  import {Helmet} from "react-helmet";

  class Prices extends Component {
    render() {
        return (
          <React.Fragment>
          <Helmet>
          <title>Priser - CEDWebb</title>
          <meta name="description" content="Priser - CEDWebb" charSet="utf-8" />
          </Helmet>
          <div className ="pricesection1 animated bounceInLeft">
          <h1 className ="pricetext ">Alla våra priser</h1>
          <h4 className ="pricetext2">Hitta det paket som passar just dig och dina behov</h4>
          <Card className="pricecontainer1 ">
          <CardImg className="cardImage3" src={logo} alt="Bild på företagslogga" />
            <CardBody>
              <CardTitle className="titletext">Mini</CardTitle>
              <CardSubtitle className="titletext2">Läs om webbpaketet genom att trycka på knappen nedan.</CardSubtitle>
              <Button className ="cardbutton">Klicka här för att läsa mer</Button>
            </CardBody>
          </Card>
          <Card className="pricecontainer2">
          <CardImg className="cardImage3" src={logo} alt="Bild på företagslogga" />
            <CardBody>
              <CardTitle className="titletext">Bas</CardTitle>
              <CardSubtitle className="titletext2">Läs om webbpaketet genom att trycka på knappen nedan.</CardSubtitle>
              <Button className ="cardbutton">Klicka här för att läsa mer</Button>
            </CardBody>
          </Card>
          <Card className="pricecontainer3">
            <CardImg className="cardImage3" src={logo} alt="Bild på företagslogga" />
            <CardBody>
              <CardTitle className="titletext">Premium</CardTitle>
              <CardSubtitle className="titletext2">Läs om webbpaketet genom att trycka på knappen nedan.</CardSubtitle>
              <Button className ="cardbutton">Klicka här för att läsa mer</Button>
            </CardBody>
          </Card>
        </div>
        </React.Fragment>
      );
    };  
    }

export default Prices;