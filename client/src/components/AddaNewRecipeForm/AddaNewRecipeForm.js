import React from "react";
import "./AddaNewRecipeForm.css";
import { Form, Button } from "react-bootstrap";

function AddaNewRecipeForm() {
  return (
    <div>
      <h2>Add a New Recipe</h2>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="name">Title of Dish:</Form.Label>
          <Form.Control className="bar" type="email" placeholder="" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="name">Ingredients needed:</Form.Label>
          <Form.Control className="bar" as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="name">Instructions:</Form.Label>
          <Form.Control className="bar" as="textarea" rows="3" />
        </Form.Group>
        <div className="row justify-content-center no-gutters mt-2">
          <Button className="submitbutton" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddaNewRecipeForm;
