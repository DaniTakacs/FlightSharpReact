import React from "react";
import Flight from "./Flight";

const FlightList = (props) => {
  const flights = props.flights;
  return (
    <div>
      <ul>
        {Object.values(flights).map((flight) => (
          <Flight flight={flight} from={props.from} to={props.to}></Flight>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
