import React from 'react';
import {Form, Col, Row, Container} from 'react-bootstrap';


function PersonDetails() {
    return (
        <Container>
            <Form>
                <Form.Group as = {Row} className="mb-2 mt-3" controlId = "accountNo">
                    <Form.Label column sm = "1">
                        Account:
                    </Form.Label>
                    <Col sm = "3">
                        <Form.Control type = "number" placeholder = "Account Number"/>
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-2" controlId = "gender">
                    <Form.Label column sm = "1">
                        Gender:
                    </Form.Label>
                    <Col className = "mt-2" sm = "3">
                        <Form.Check name = "gender" inline label = "Male" type = "radio" />
                        <Form.Check name = "gender" inline label = "Female" type = "radio" />
                        <Form.Check name = "gender" inline label = "Others" type = "radio" />
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-2" controlId = "accountName">
                    <Form.Label column sm = "1">
                       Name:
                    </Form.Label>
                    <Col sm = "3">
                        <Form.Control type = "plain-text" placeholder = "Account Name"/>
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-2" controlId = "DOB">
                    <Form.Label column sm = "1">
                       DOB:
                    </Form.Label>
                    <Col sm = "3">
                        <Form.Control type = "date" placeholder = "Date of Birth"/>
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-2" controlId = "accountName">
                    <Form.Label column sm = "1">
                       S/O:
                    </Form.Label>
                    <Col sm = "3">
                        <Form.Control type = "plain-text" placeholder = "S/O"/>
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-2" controlId = "accountName">
                    <Form.Label column sm = "1">
                       Address:
                    </Form.Label>
                    <Col sm = "3">
                        <Form.Control type = "plain-text" style = {{ height : '100px'}}  placeholder = "Address"/>
                    </Col>
                </Form.Group>

            </Form>
        </Container>
    )
}

export default PersonDetails
