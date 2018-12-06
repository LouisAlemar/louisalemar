import React, { Component} from "react";
import Navbar from "./components/navbar/navbar.js";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <Navbar />
    );
  }
}

export default hot(module)(App);