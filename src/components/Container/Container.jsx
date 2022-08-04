import React from "react";
import Select from "../Select/Select";
import Weather from "../Weather/Weather";

function Container() {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center p-4">
        <Select />
        <Weather />
      </div>
    </div>
  );
}

export default Container;
