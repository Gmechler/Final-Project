// dependencies go here
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages go here
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
