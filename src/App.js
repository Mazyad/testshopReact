import React, { Component } from "react";
import { Switch, Route } from "react-router";

import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import Apiii from "./Apiii";
import Up from "./Up";

import PostForm from "./PostForm";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Apiii} />
            <Route path="/PostForm" exact component={PostForm} />
            <Route path="/Up" component={Up} />
            <Route path="/:ID" exact component={Apiii} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
