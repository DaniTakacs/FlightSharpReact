import React from "react";

const Flight = (props) => {
  console.log(props);
  return (
    <li>
      <span className="flNum">
        <h1>Flight Num: {props.flight.flight_number}</h1>
      </span>

      <span className="from">
        <h1>From: {props.from}</h1>
      </span>
      <span className="toDes">
        <h1>To: {props.to}</h1>
      </span>
      <span className="price">
        <h1>{props.flight.price} HUF</h1>
      </span>
      <span >
        <h1>Airline: {props.flight.airline}</h1>
      </span>
      <span >
        <h1>✈️</h1>
      </span>
    </li>
  );
};

export default Flight;
