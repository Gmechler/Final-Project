// dependencies go here
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages go here
import ShoppingList from "./pages/ShoppingList";

export default function App() {
  return (
    <>
      <ShoppingList />
    </>
  );
}
