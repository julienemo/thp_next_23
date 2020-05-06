import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const SayHello = ({ name }) => {
  const [times, setTimes] = useState(0);
  const [myString, setMyString] = useState("Mishenko");
  return (
    <h1
      onClick={() => {
        setTimes(times + 1);
        setMyString(myString.slice(1));
      }}
    >
      Hello {name}, {times},{myString}
    </h1>
  );
};

class App extends Component {
  render() {
    return <SayHello {...{ name: "Julie" }} />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
