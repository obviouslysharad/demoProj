import react from "react";
import AddingTheAccount from "./AddingTheAccount";
import { useState } from "react";
import { CardGroup, Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AccountCard.css";

const AddTheAccount = (props) => {
  const [yesAccount, setYesAccount] = useState(false);

  const change = (e) => {
    e.preventDefault();
    console.log("inside change");
    props.addme(e);
  };

  const renderList =
    props.jagahe &&
    props.jagahe.map((jagah) => {
      return (
        <CardGroup className="myCard">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.investopedia.com/thmb/lqOcGlE7PI6vLMzhn5EDdO0HvYk=/1337x1003/smart/filters:no_upscale()/GettyImages-1054017850-7ef42af7b8044d7a86cfb2bff8641e1d.jpg"
            />
            <Card.Body>
              <Card.Title>{jagah.name}</Card.Title>
              <Card.Text>The size is {jagah.size}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      );
    });

  return (
    <div>
      <Form>
        <Row>
          <Col xs={6} className = "searchBox">
            <Form.Control
              type="text"
              placeholder="Search for the account here"
            />
          </Col>
          <Col>
            <Button
              className="mt-2 mb-2"
              variant="primary"
              active
              onClick={() => setYesAccount(true)}
            >
              Add an account
            </Button>
          </Col>

          <AddingTheAccount
            accountInfo={yesAccount}
            setYesAccount={setYesAccount}
            change={change}
          />
        </Row>
      </Form>
      <Link to={`/personDetails`}>{renderList}</Link>
    </div>
  );
};

export default AddTheAccount;
