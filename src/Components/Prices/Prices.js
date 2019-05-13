    
import React, { Component } from 'react';
import './Prices.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  class Prices extends Component {
    render() {
        return (
          <div className ="pricesection1">
          <h1 className ="pricetext">Alla våra priser</h1>
          <h4 className ="pricetext2">Hitta det paket som passar just dig och dina behov</h4>
          <Card className="pricecontainer1">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180w=318h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="pricecontainer2">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180w=318h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="pricecontainer3">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180w=318h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      );
    };  
    }

export default Prices;