import React from "react";
import FavoritesContainer from "../components/favorites-container/favorites-container";
import FavoritestoMylist from "../components/favorites-to-mylist/favorites-to-mylist";

function Favorites() {

    return (
    <div className="row justify-content-center">
        <FavoritesContainer />
        <FavoritestoMylist />
    </div>   
    );
}

export default Favorites;