import React from "react";
import "./UnderSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UnderSection = () => {
  return (
    <div class="container text-center" id="unders">
      <div class="row">
        <div class="col">
          <div class="card" id="c">
            <img src={require(".//sc1.png")} class="card-img-top" alt="Card" />
          </div>
        </div>
        <div class="col">
          <div class="card" id="c">
            <img src={require(".//sc1.png")} class="card-img-top" alt="Card" />
          </div>
        </div>
        <div class="col">
          <div class="card" id="c">
            <img src={require(".//sc1.png")} class="card-img-top" alt="Card" />
          </div>
        </div>
        <div class="col">
          <div class="card" id="c">
            <img src={require(".//sc1.png")} class="card-img-top" alt="Card" />
          </div>
        </div>
        <div class="col">
          <div class="card" id="c">
            <img src={require(".//sc1.png")} class="card-img-top" alt="Card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderSection;
