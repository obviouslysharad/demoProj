import React from "react";
import { Form, Col, Row, Container, Button, Modal, Table } from "react-bootstrap";
import { useState, useRef } from "react";
import "./AccountCard.css";

function PersonDetails() {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([{ accNo : "", name: "", dob: "",}])
  function handleSubmit(event){
    event.preventDefault();
    console.log(event.target[4].value, event.target[5].value, event.target[6].value, event.target[7].value);
    setShow(false);
    setDetails([...details, {accNo : event.target[4].value, name: event.target[5].value, dob: event.target[6].value,}])
  }

  const renderTable = details.map(e => {
    return(
      <tr>
        <td> {e.accNo}</td>
        <td> {e.name} </td>
        <td> {e.dob}</td>
      </tr>
    )
  })


  if (show) {
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add the person details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit = {e => handleSubmit(e)}>
            <Form.Group as={Row} controlId="accountNo">
              <Form.Label column>
                Account:
              </Form.Label>
              <Col sm="3">
                <Form.Control type="number" placeholder="Account Number" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2" controlId="gender">
              <Form.Label column>
                Gender:
              </Form.Label>
              <Col className="mt-2">
                <Form.Check name="gender" inline label="Male" type="radio" />
                <Form.Check name="gender" inline label="Female" type="radio" />
                <Form.Check name="gender" inline label="Others" type="radio" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2" controlId="accountName">
              <Form.Label column>
                Name:
              </Form.Label>
              <Col sm="3">
                <Form.Control type="plain-text" placeholder="Account Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2" controlId="DOB">
              <Form.Label column>
                DOB:
              </Form.Label>
              <Col sm="3">
                <Form.Control type="date" placeholder="Date of Birth" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2" controlId="accountName">
              <Form.Label column sm="1">
                S/O:
              </Form.Label>
              <Col sm="3">
                <Form.Control type="plain-text" placeholder="S/O" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2" controlId="accountName">
              <Form.Label column sm="1">
                Address:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  type="plain-text"
                  style={{ height: "100px" }}
                  placeholder="Address"
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Button type = "submit">Submit</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <div>Hi</div>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <Container>
      <Row className="searchBox">
        <Col>
          <Form.Control type="text" placeholder="Search for the person" />
        </Col>
        <Col>
          <Button
            variant="primary"
            onClick={() => {
              return setShow(true);
            }}>
            Add new person
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Name</th>
            <th>DOJ</th>
          </tr>
        </thead>
        <tbody>
          {renderTable}
        </tbody>

      </Table>
      
      
    </Container>
  );
}
export default PersonDetails;
