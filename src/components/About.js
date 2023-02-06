import React from "react";
import { Outlet } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Parent - constructor");
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      console.log("OPTIMIZE THIS...");
    }, 1000);
    console.log("Parent - componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent - componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.Timer);
    console.log("Parent - componentWillUnmount");
  }

  render() {
    console.log("Parent - render");
    return (
      <>
        <h1>About Us Page...</h1>

      </>
    );
  }
}

export default About;
