import React from "react";
import "./Aside.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Aside = () => {
  return (
    <div className="container">
      <div class="row align-items-start">
        <div className="col" id="asideDiv">
          <h5>TechCorporate</h5>
        </div>
        <div className="col" id="asideDiv">
          <h7>Free PSD Website</h7>
        </div>
        <div className="col-4" id="asideDiv"></div>
        <div className="col" id="asideDiv">
          <h7>Tel.xxxx.xxx.xx </h7>
        </div>
      </div>
    </div>
  );
};

export default Aside;
