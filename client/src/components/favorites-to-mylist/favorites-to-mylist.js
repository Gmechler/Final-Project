import React from "react";
import "./style.css";

function FavoritesToMylist() {

    return (
    <div className="col-2 mt-5 ml-5">
        <h4 className="row justify-content-center mb-3 mt-3 text-center toBeTitle">Adding to Meals</h4>
        <div className="row justify-content-center mb-3 toBeList">
        </div>
        <div className="row justify-content-center mb-3">
            <button className="col-10 toBeButton">Add to Meals</button>
        </div>
    </div>   
    );
}

export default FavoritesToMylist;