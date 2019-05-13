import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './Work.css';
export default class Work extends React.Component {
  render() {
    return (
        <div className ="slideshow1">
        <h1 className ="slideshowtext">Några av våra tidigare arbeten</h1>
      <CarouselProvider className ="slideshow2"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
      >        
        <Slider>
          <Slide index={0}><Image className="slideshowimage"/></Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack className="button1">Back</ButtonBack>
        <ButtonNext className="button2">Next</ButtonNext>
      </CarouselProvider>
      <div className="workcontainer1"></div>
      <div className="workcontainer2"></div>
      <div className="workcontainer3"></div>
      <div className="workcontainer4"></div>
      </div>
    );
  }
}