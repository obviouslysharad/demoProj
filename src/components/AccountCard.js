import React from "react";
import { CardGroup, Card } from "react-bootstrap";

function AccountCard(props) {

  const renderList = props.jagahe.map((jagah) => {
    return(
      <CardGroup>
      <h1>hi</h1>
      <Card style={{ width: "20%" }}>
        <Card.Img
          style={{ width: "20%" }}
          variant="top"
          src="https://www.investopedia.com/thmb/lqOcGlE7PI6vLMzhn5EDdO0HvYk=/1337x1003/smart/filters:no_upscale()/GettyImages-1054017850-7ef42af7b8044d7a86cfb2bff8641e1d.jpg"
        />
        <Card.Body style={{ width: "20%" }}>
          <Card.Title style={{ width: "20%" }}>{props.jagah.name}</Card.Title>
          <Card.Text>The size is {props.jagah.size}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ width: "20%" }}>
          <small style={{ width: "20%" }} className="text-muted">
            Last updated 3 mins ago
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
    )

  }
  );

  return(
    <div>{renderList}</div>
  )
};

export default AccountCard;
