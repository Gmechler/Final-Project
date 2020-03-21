import React from "react";
import Featured from "../components/featured/featured.js";
import RecipeResults from "../components/recipeResults/recipeResults.js";

function SearchResults() {

    return (
    <div className="row justify-content-center">
        <Featured/>
        <h2 className="col-12 text-center mt-3">Search Results</h2>
        <RecipeResults/>
    </div>   
    );
}

export default SearchResults;