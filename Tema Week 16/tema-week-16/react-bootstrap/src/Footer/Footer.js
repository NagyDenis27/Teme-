import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div class="container" id="footer">
      <div class="col">
        <div class="d-flex justify-content-between m-1 p-1">
          <div>
            <p>Copyright 2009 Domain Name-All Rights Reserved</p>
          </div>
          <div>
            <p>Template by OS Templates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
