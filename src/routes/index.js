import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Enter from "./Enter";

export default () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Enter} />
      <Route path="/signup" component={Enter} />
    </div>
  </Router>
);
