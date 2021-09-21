import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

function AddingTheAccount(props) {
  var [state, setState] = useState({
    name: "",
    size: "",
  });

  const handleSubmit = (e) => {
    console.log("handlesbumit");
    console.log(e.target[0].value, e.target[1].value);
    // Prints the name and size on the console
    setState({...state, name: e.target[0].value, size: e.target[1].value});
    console.log(state);
    //Here state is not getting updated. Still showing empty name and size
    props.change(state);
  };

  useEffect(() => {
    console.log('inside useeffect')
    console.log(state)
  },[state])

  if (props.accountInfo) {
    return (
      <div>
        <Modal show={props.accountInfo}>
          <Modal.Header>
            <Modal.Title>Add you account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => handleSubmit(e)}
              >
              <Form.Group className="mb-3" controlId="name" name="name">
                <Form.Label>Capital Name</Form.Label>
                <Form.Control
                  type="text"
                  placeHolder="Enter the name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="size" name="size">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Capital Size"
                />
              </Form.Group>
              <Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => props.setYesAccount(false)}
            >
              Close
            </Button>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else return <div></div>;
}

export default AddingTheAccount;
