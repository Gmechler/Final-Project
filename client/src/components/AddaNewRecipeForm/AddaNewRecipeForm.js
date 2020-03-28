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
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="name">Ingredients needed:</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="name">Instructions:</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button className="submitbutton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddaNewRecipeForm;
