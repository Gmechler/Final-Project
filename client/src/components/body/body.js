import React from "react";
import "./body.css";
import RecipePage from "../../pages/recipie";
import SearchResults from "../../pages/search-results";

function Body() {
  return (
    <div className="row justify-content-center body">
      <div className="col-9 content">
        <SearchResults />
      </div>
    </div>
  );
}

export default Body;
