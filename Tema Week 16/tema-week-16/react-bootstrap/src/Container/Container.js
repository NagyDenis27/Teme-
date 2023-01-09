import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Container.css";

const Container = () => {
  return (
    <div class="container">
      <div class="imgTechnology">
        <div class="row justify-content-md-start" id="textContent">
          <h5>Lorem Ipsum</h5>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since
        </div>
        <div class="col" id="tech">
          Todays Technology
        </div>
      </div>
    </div>
  );
};

export default Container;
