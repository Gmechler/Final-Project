import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Featured from "../components/featured/featured.js";
import RecipeResults from "../components/recipeResults/recipeResults.js";

function SearchResults() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        loadSearchResult()
    }, []);

    function loadSearchResult() {
        API.getRecipe()
          .then(res => {setSearchResult(res.data)
        console.log(res.data)})
          .catch(err => console.log(err));
    };



    return (
    <div className="row justify-content-center">
        <Featured/>
        <RecipeResults/>
    </div>   
    );
}

export default SearchResults;