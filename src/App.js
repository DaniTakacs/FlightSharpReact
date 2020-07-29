import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = (props) => {
  const [State, SetAppState] = useState({});

  let content;

  const getFlights = (from, to, currency) => {
    axios.get("");
  };

  return <div className="App">{content}</div>;
};

export default App;
