import React from "react";
import "./Cards.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <div class="container text-center">
      <div class="row m-4 justify-content-evenly">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <img
              src={require(".//imgcard1.jpg")}
              class="card-img-top"
              alt="Card"
            />
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            Read More
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <img
              src={require(".//imgcard2.jpg")}
              class="card-img-top"
              alt="Card"
            />
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            Read More
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <img
              src={require(".//imgcard3.jpg")}
              class="card-img-top"
              alt="Card"
            />

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <hr class="hr2" />
      </div>
    </div>
  );
};

export default Cards;
