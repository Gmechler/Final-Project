import React from "react";
import "./style.css";
//run "npm install react-slideshow-image -S" in your console for this component to work.
import { Fade } from 'react-slideshow-image';
import blueFood from "./images/bluefood.jpg";
import redFood from "./images/redfood.jpg";
import greenFood from "./images/greenfood.jpg";

const fadeImages = [
    blueFood,
    redFood,
    greenFood,
];
  
const fadeProperties = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
  
const Featured = () => {
      return (
    <div className="col-lg-7">
        <h2 className="text-center pb-4">Featured Recipes</h2>
    <Fade {...fadeProperties}>
      <div className="each-fade row justify-content-center">
        <div className='col-6 hidden-sm-down'>
          <div className='row pl-2 justify-content-center'>
            <h4 className='col-12'>Blue Burger</h4>
            <p className="col-12 line-clamp searchDesc">It is a long established fact that a reader will be distracted by the
             readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop publishing packages and 
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the years, 
              sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </div>
        <div className="col-lg-4 px-0">
          <img className="searchImg" src={fadeImages[0]} />
        </div>
        <button className='col-4 mt-3'>Learn More</button>
      </div>
      <div className="each-fade row justify-content-center">
        <div className='col-6 hidden-sm-down'>
          <div className='row pl-2 justify-content-center'>
            <h4 className='col-12'>Red Burger</h4>
            <p className="col-12 line-clamp">It is a long established fact that a reader will be distracted by the
             readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop publishing packages and 
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the years, 
              sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </div>
        <div className="col-lg-4 px-0">
          <img className="searchImg" src={fadeImages[1]} />
        </div>
        <button className='col-4 mt-3'>Learn More</button>
      </div>
      <div className="each-fade row justify-content-center">
        <div className='col-6 hidden-sm-down'>
          <div className='row pl-2 justify-content-center'>
            <h4 className='col-12'>Green Burger</h4>
            <p className="col-12 line-clamp">It is a long established fact that a reader will be distracted by the
             readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop publishing packages and 
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the years, 
              sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </div>
        <div className="col-lg-4 px-0">
          <img className="searchImg" src={fadeImages[2]} />
        </div>
        <button className='col-4 mt-3'>Learn More</button>
      </div>
    </Fade>
    </div>
      )
}

export default Featured;