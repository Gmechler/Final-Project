import React from "react";
import "./style.css";
import CardSearch from "../../components/card-search/card-search";

function RecipeResults() {

    return (
    <div className="col-11 mt-5">
        <h2 className="row justify-content-center mb-3 searchresTitle">Search Results</h2>
        <div className="row justify-content-center mb-3 results">
            < CardSearch />
            < CardSearch />
            < CardSearch />
            < CardSearch />
            < CardSearch />
            < CardSearch />
            < CardSearch />
            < CardSearch />


        </div>
    </div>   
    );
}

export default RecipeResults;