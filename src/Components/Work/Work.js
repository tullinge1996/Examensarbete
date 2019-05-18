import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import logo from "./davidweb.png";
import logo2 from "./emilpage.png";
import logo3 from "./carlsida.png";
import logo4 from "./casinocarlsida.png";
import './Work.css';
import {Helmet} from "react-helmet";

export default class Work extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Helmet>
          <title>Tidigare arbeten - CEDWebb</title>
          <meta name="description" content="Tidigare arbeten - CEDWebb" charSet="utf-8" />
          </Helmet>
        <div className ="slideshow1">
        <h1 className ="slideshowtext animated fadeInLeft">Några av våra tidigare arbeten</h1>
        <h5 className ="slideshowtext2 animated fadeInLeft">Klicka på bilderna för att komma till respektive hemsida</h5>
      <CarouselProvider className ="slideshow2"
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={4}
      >        
        <Slider>
          <Slide index={0}><Image className="containerlogo1" src={logo} alt="Bild på Hockeytalk"></Image></Slide>
          <Slide index={1}><Image className="containerlogo2" src={logo2} alt="Bild på Match Up"></Image></Slide>
          <Slide index={2}><Image className="containerlogo3" src={logo3} alt="Bild på Portfolio"></Image></Slide>
          <Slide index={3}><Image className="containerlogo4" src={logo4} alt="Bild på Casinocarl"></Image></Slide>
        </Slider>
        <ButtonBack className="button1">Back</ButtonBack>
        <ButtonNext className="button2">Next</ButtonNext>
      </CarouselProvider>
      <div className="workcontainer1 animated fadeInLeft delay-1s ">
      <img className="containerlogo1" src={logo} alt="Bild på Hockeytalk"></img>
      <div className="middle"><div className="text">Visa sida</div></div>
      </div>
      <div className="workcontainer2 animated fadeInLeft delay-3s">
      <img className="containerlogo2" src={logo3} alt="Bild på Portfolio"></img>
      <div className="middle"><div className="text">Visa sida</div></div>
      </div>
      <div className="workcontainer3 animated fadeInRight delay-4s">
      <img className="containerlogo3" src={logo4} alt="Bild på Casinocarl"></img>
      <div className="middle"><div className="text">Visa sida</div></div>
      </div>
      <div className="workcontainer4 animated fadeInRight delay-2s">
      <img className="containerlogo4" src={logo2} alt="Bild på Match Up"></img>
      <div className="middle"><div className="text">Visa sida</div></div>
      </div>
      </div>
      </React.Fragment>
    );
  }
}