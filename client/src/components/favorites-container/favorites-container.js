import React from "react";
import "./style.css";
import CardFavorite from "../card-favorite/card-favorite";

function FavoritesContainer() {

    return (
    <div className="col-7 mt-5">
        <h2 className="row justify-content-center mb-3 favTitle">Favorite Recipes</h2>
        <div className="row justify-content-center mb-3 favContainer">
            <CardFavorite />
            <CardFavorite />
            <CardFavorite />
            <CardFavorite />
            <CardFavorite />
            <CardFavorite />
        </div>
    </div>   
    );
}

export default FavoritesContainer;