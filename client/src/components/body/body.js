import React from "react";
import "./body.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipePage from "../../pages/recipe";
import SearchResults from "../../pages/search-results";
import Favorites from "../../pages/favorites";
import ShoppingList from "../../pages/ShoppingList";
import AddNewRecipe from "../../pages/AddNewRecipe";
import PlanToMake from "../../pages/PlanToMake";

function Body() {
  return (
    <Router>
      <div className="row justify-content-center body">
        <div className="col-10 content">
          <Route exact path="/" component={SearchResults} />
          <Route exact path="/search-results" component={SearchResults} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/shopping-list" component={ShoppingList} />
          <Route exact path="/AddaNewRecipe" component={AddNewRecipe} />
          <Route exact path="/PlanToMake" component={PlanToMake} />
        </div>
      </div>
    </Router>
  );
}

export default Body;
