import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import FlightList from "./Components/FlightList";
import axios from "axios";

const App = (props) => {
  const [State, SetAppState] = useState({
    accessToken: "237f37871102101c4ec439ba6c98520e",
    filteredFlights: {},
  });

  useEffect(() => {}, []);

  let content;

  const getFlights = (from, to, currency) => {
    const axios = require("axios");
    axios({
      method: "GET",
      url:
        "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap",
      headers: {
        "content-type": "application/octet-stream",
        "x-access-token": `${State.accessToken}`,
        "x-rapidapi-host":
          "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
        "x-rapidapi-key": "8cc5a982f3msha7010a92e8c909ap14602cjsneeae413a870c",
        useQueryString: true,
      },
      params: {
        destination: `${to}`,
        origin: `${from}`,
        currency: `${currency}`,
        page: "None",
      },
    })
      .then((response) => {
        const respFlights = response.data.data[`${to}`];
        SetAppState({ ...State, filteredFlights: respFlights });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div>
        <Form
          click={(from, to, currency) => getFlights(from, to, currency)}
        ></Form>
      </div>
      <FlightList></FlightList>
      <div>{content}</div>
    </div>
  );
};

export default App;
