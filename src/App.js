// first layer
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
// import IndexPage from "../blog/src/pages/index";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/blog" component={Blog} /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
