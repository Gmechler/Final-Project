import React from "react";
import "./header.css";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div className="row" className="header">
        <div className="col" className="navigation">
          <Nav className="mr-auto">
            <Nav.Link href="/">Plan to Make</Nav.Link>
            <Nav.Link href="/shopping-list">Shopping List</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="#something">Add a Recipe</Nav.Link>
          </Nav>
        </div>
        <div className="col" className="title">
          <h1>MyKitchen</h1>
        </div>
        <div className="col" className="search">
          <Form inline class="test">
            <FormControl
              type="text"
              placeholder="Search for Recipes"
              className="mr-sm-2"
              className="searchbar"
            />
            <Button className="searchbutton" variant="outline-info">
              Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Header;
