import React from "react";
import { Card, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

const SIngleFromOrders = (props) => {
  const { name, email, price, CarName, address, phone } = props.service;

  return (
    <div>
      <Col className="shadow mb-5 bg-body">
        <Card>
          <Card.Body>
            <Card.Title className="text-primary">{CarName}</Card.Title>
            <Card.Text className="fw-bold justify mb-0 ">
              <h6>
                <span className="text-success">Name :</span> {name}
              </h6>
            </Card.Text>
            <Card.Text className="fw-bold justify mb-0 ">
              <h6>
                <span className="text-success">Email :</span> {email}
              </h6>
            </Card.Text>
            <Card.Text className="fw-bold justify mb-0 ">
              <h6>
                <span className="text-success">Address :</span>: {address}
              </h6>
            </Card.Text>
            <Card.Text className="fw-bold justify mb-0 ">
              <h6>
                <span className="text-success">Number :</span> {phone}
              </h6>
            </Card.Text>

            <Card.Text className=" justify text-danger">
              <h5> BDT : {price}</h5>
            </Card.Text>
            <Card.Text className="text-start"></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SIngleFromOrders;
