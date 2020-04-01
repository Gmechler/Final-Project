import React from "react";
import "./PlanToMakeList.css";
import CardPlan from "../card-plantomake/card-plantomake";

function PlanToMakeList() {
  return (
    <div>
      <h2>My List of Recipes to Make</h2>
      <div className="col">
        <div className="row justify-content-center mb-3 favContainer">
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
        </div>
      </div>
    </div>
  );
}

export default PlanToMakeList;
