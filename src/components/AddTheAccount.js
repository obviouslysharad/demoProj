import react from "react";
import AddingTheAccount from "./AddingTheAccount";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AddTheAccount = (props) => {
  const [yesAccount, setYesAccount] = useState(false);

  const change = (e) => {
    props.addme(e);
  };

  return (
    <Form>
      <Row>
        <Col xs={8}>
          <Form.Control
            type="text"
            placeholder="Search for the account here"
            className="mt-2 mb-2"
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
  );
};

export default AddTheAccount;
