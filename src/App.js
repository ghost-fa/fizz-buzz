import React, { Component } from "react";
import FizzBuzz from "./components/FizzBuzz";
import "./App.css";

class App extends Component {
  state = {
    fizzBuzzBox: null,
    fizzBuzzCounter: 0,
    limitNumbers: 100
  };

  componentWillMount() {
    this.FizzBuzzHandler(this.state.limitNumbers);
  }

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

  FizzBuzzHandler = limit => {
    var FIZZBUZZ =
      this.NumbersGenerator(limit).length > 0 &&
      this.NumbersGenerator(limit).map(number =>
        number % 5 === 0 && number % 3 === 0
          ? `fizzbuzz`
          : number % 5 === 0
          ? `buzz`
          : number % 3 === 0
          ? `fizz`
          : number
      );

    var content =
      FIZZBUZZ && FIZZBUZZ.filter(number => number === "fizzbuzz").length;
    FIZZBUZZ &&
      this.setState({
        fizzBuzzBox: FIZZBUZZ,
        fizzBuzzCounter: content
      });
  };

  render() {
    return (
      <div>
        <p>content : {this.state.fizzBuzzCounter}</p>
        {this.state.fizzBuzzBox &&
          this.state.fizzBuzzBox.map((item, i) => (
            <FizzBuzz key={i} fizzBuzz={item} />
          ))}
      </div>
    );
  }
}

export default App;
