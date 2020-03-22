import React from "react";
import Featured from "../components/featured/featured.js";
import RecipeResults from "../components/recipeResults/recipeResults.js";

function SearchResults() {

    return (
    <div className="row justify-content-center">
        <Featured/>
        <RecipeResults/>
    </div>   
    );
}

export default SearchResults;