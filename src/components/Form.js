import React from "react";
import useInput from "../hooks/useInput";
import "./design.scss";

const Form = (props) => {
  const [fromPlace, bindFromPlace, resetFromPlace] = useInput("");
  const [toPlace, bindToPlace, resetToPlace] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    const validFromLength = fromPlace.length === 3;
    const validToLength = toPlace.length === 3;
    const fromCharsOnly = !hasNumber(fromPlace);
    const toCharsOnly = !hasNumber(toPlace);

    if (validFromLength && validToLength && fromCharsOnly && toCharsOnly) {
      props.click(fromPlace, toPlace, "HUF");
      console.log(props);
    } else {
      alert(
        "Start end Destination must be 3 chars long and can not contain numbers"
      );
    }

    resetFromPlace();
    resetToPlace();
  };

  const hasNumber = (myString) => {
    return /\d/.test(myString);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="segment">
          <h1>FlightSharp</h1>
        </div>
        <label>
          <input placeholder="Going From" {...bindFromPlace} type="text" />
        </label>
        <label>
          <input placeholder="Destination" {...bindToPlace} type="text" />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
