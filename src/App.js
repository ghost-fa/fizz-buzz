import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    fizzBuzzBox: null,
    fizzBuzzCounter: 0,
    limitNumber: 100
  };

  NumbersGenerator = limit => {
    if (limit) {
      const Box = [];
      for (let i = 1; i <= limit; i++) {
        Box.push(i);
      }
      if (Box.length === limit) {
        this.setState({
          numbers: Box
        });
      }
      return Box;
    }
  };
  render() {
    return <div className="App" />;
  }
}

export default App;
