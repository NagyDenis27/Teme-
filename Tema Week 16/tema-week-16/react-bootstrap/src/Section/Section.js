import "./Section.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Section = () => {
  return (
    <div class="container text-center" id="rootContainer">
      <div class="row">
        <div class="col" id="Pc">
          <img
            src={require(".//pc.jpg")}
            class="card-img-top"
            alt="Card"
            id="img"
          />
        </div>
        <div class="col" id="randomText">
          <h5>Indonectetus facilis leo nibh</h5>
          <hr class="hr1" />
          <div>
            <p>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate."
            </p>
          </div>
          <p>Continue Reading</p>
        </div>
        <div class="col">
          <div class="card-body">
            <h5>Categories</h5>
            <hr class="hr1" />
            <ul>
              <li>Link Text Goes Here</li>
              <li>Link Text Goes Here</li>
              <li>Link Text Goes Here</li>
              <li>Link Text Goes Here</li>
              <li>Link Text Goes Here</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <hr class="hr2" />
      </div>
    </div>
  );
};

export default Section;
