import React, { Component } from "react";
import "./App.css";
import UserList from "./components/UsersList";
import UserEdit from "./components/UserEdit";
import UserDetails from "./components/UserDetails";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route path="/users/:id" component={UserDetails} />
            <Route path="/edit" component={UserEdit} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
