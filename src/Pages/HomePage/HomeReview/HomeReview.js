import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
// import SingleCar from "../SingleCar/SingleCar";
import SingleReview from "./SingleReview";

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://test-7n3y.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h1 className="text-white">Reviews </h1>
      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {reviews.slice(0, 6).map((service) => (
            <SingleReview service={service} key={service.name}></SingleReview>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeReview;
