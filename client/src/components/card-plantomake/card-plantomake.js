import React from "react";
import "./card-plantomake.css";
import image from "../featured/images/bluefood.jpg";

function CardPlanToMake() {
  return (
    <div className="col-9 card my-3 mx-1 px-0">
      <div className="row no-gutters">
        <div className="col-6">
          <img src={image} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="card-body pl-1">
            <h4 className="card-title mt-2favResTitle">Card title</h4>
            <p className="card-text favRecDesc mr-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center no-gutters mt-2">
        <button className="col-3 mx-1 mb-1 favResButton">View Recipe</button>
        <button className="col-3 mx-1 mb-1 favResButton">
          Add To Favorites
        </button>
        <button className="col-3 mx-1 mb-1 favDelButton">
          Remove From List
        </button>
      </div>
    </div>
  );
}

export default CardPlanToMake;
