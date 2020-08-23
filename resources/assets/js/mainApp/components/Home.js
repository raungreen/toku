import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import ComposeSection from "./ComposeSection";
import Posts from "./Posts";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentWillMount() {
    this.setState(
      {
        initialData: this.props.initialData,
      },
      () => {
        console.log(this.props);
      }
    );
  }

  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <div className="content-area">
        <ComposeSection
          initialData={
            this.state.initialData == undefined
              ? "loading"
              : this.state.initialData
          }
        />
        <Posts
          initialData={
            this.state.initialData == undefined
              ? "loading"
              : this.state.initialData
          }
        />
      </div>
    );
  }
}

export default Home;
