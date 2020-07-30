import React from "react";

const Flight = (props) => {
  console.log(props);
  return (
    <li>
      <span className="flNum">
        <h1>Flight Number: {props.flight.flight_number}</h1>
      </span>

      <span className="from">
        <h1>{props.from}</h1>
      </span>
      <span className="toDes">
        <h1>{props.to}</h1>
      </span>
      <span className="price">
        <h1>{props.flight.price} HUF</h1>
      </span>
      <span className="badge">
        <i className="fa fa-plane" aria-hidden="true"></i>
      </span>
    </li>
  );
};

export default Flight;
