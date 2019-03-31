import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Knobs from "./Knobs";
import Button from "./Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Knobs options={{ variant: ["solid", "outlined"] }}>
          <Button color="red" withPadding variant="solid">
            Test button
          </Button>
        </Knobs>
      </div>
    );
  }
}

export default App;
