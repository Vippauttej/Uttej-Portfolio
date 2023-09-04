import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Skills from "./components/pages/skills/Skills";

import Educations from "./components/pages/educations/Educations";
import Portfolios from "./components/pages/portfolios/Portfolios";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />

          <Route path="/educations" component={Educations} />
          <Route path="/projects" component={Portfolios} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
