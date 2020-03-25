import React from "react";
import "./style.css";
import image from "../featured/images/bluefood.jpg"

function CardSearch() {
  return (
<div className="col-5 card my-3 mx-1 px-0">
  <div className="row no-gutters">
    <div className="col-6">
      <img src={image} className="img-fluid" />
    </div>
    <div className="col-6">
      <div className="card-body pl-1">
        <h4 className="card-title mt-3 recResTitle">Card title</h4>
        <p className="card-text searchRecDesc">Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
         ever since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five centuries, but 
          also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.</p>
      </div>
    </div>
  </div>
  <div className="row justify-content-center no-gutters mt-2">
        <button className="col-3 mx-1 mb-1 featuredResButton">View Recipe</button>
        <button className="col-3 mx-1 mb-1 featuredResButton">Add to Meals</button>
        <button className="col-3 mx-1 mb-1 featuredResButton">Add to Favorites</button>
      </div>
</div>
  );
}

export default CardSearch;