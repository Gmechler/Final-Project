import React from "react";
import ListItem from "../components/ListItem";

export default function ShoppingList() {
  return (
    <>
      <div className="column">
        <div className="box shopping-list">
          <div className="subtitle">Shopping List</div>
          <form className="columns is-mobile">
            <input
              className="input column is-three-fifths-desktop is-two-fifths-mobile"
              type="text"
              placeholder="Add ingredient"
              id="addItem"
            />
            <button
              type="submit"
              id="addItemBtn"
              className="column appButton is-2-desktop is-2-tablet is-2-mobile"
            >
              <i className="fa fa-plus"></i>
            </button>
          </form>
          <ul id="shoppingList"></ul>
        </div>
      </div>
      <ListItem />
    </>
  );
}
