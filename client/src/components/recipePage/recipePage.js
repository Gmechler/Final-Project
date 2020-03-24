import React from "react";
import "./style.css"
import Blueburg from "../featured/images/bluefood.jpg"

function RecipePage() {

    return (
    <div className="col-12 mt-3">
        <h1 className="row justify-content-center recipeTitle"> Blue Burger</h1>
        <div className="row justify-content-center">
            <div className="col-lg-5 px-0">
                <img className="recipeImg" src={Blueburg}/>
            </div>
            <div className="col-lg-2 px-0">
                <h4 className="text-center mb-3 recIngTitle">Ingredients</h4>
                <ul className="mt-1 recipeIng">
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                    <li>stuff.</li>
                </ul>
            </div>
        </div>
        <div className="row mt-3 justify-content-center">
        <p className="col-lg-7 col-sm-10 pb-3">It is a long established fact that a reader will be distracted by the
             readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop publishing packages and 
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the years, 
              sometimes by accident, sometimes on purpose (injected humour and the like).
              It is a long established fact that a reader will be distracted by the
             readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop publishing packages and 
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the years, 
              sometimes by accident, sometimes on purpose (injected humour and the like). </p>
        </div>
    </div>   
    );
}

export default RecipePage;