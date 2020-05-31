import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./css/global.css"; // reset css //
import "./css/app.css";

import Layout from "./components/Shared/Layout";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
