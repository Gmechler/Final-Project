// dependencies go here
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages go here
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import SearchResults from './pages/search-results';
import Recipe from './pages/recipie';
import ShoppingList from "./pages/ShoppingList";

export default function App() {
  return (
    <>
      <Header />
      <Body>
        <ShoppingList />
      </Body>
      <Footer />
    </>
  );
}
