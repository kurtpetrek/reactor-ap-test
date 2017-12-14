import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

export default () => (
  <Router>
    <switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </switch>
  </Router>
);
