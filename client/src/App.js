import React, { Component } from "react";
import "./App.css";
import UserList from "./components/UsersList";
import UserEdit from "./components/UserEdit";
import UserDetails from "./components/UserDetails";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UserFormAdd from "./components/UserFormAdd";
import Service from "./service/User_service";

class App extends Component {
  constructor() {
    super()
    this._service = new Service()
    this.state = {
      withCredentials: true,
      users: []
    }
  }

  updateUsersList = () => {
    this._service.getAllUsers()
        .then(allUsersFromDB => this.setState({ users: allUsersFromDB.data }))
        .catch(err => console.log("Error", err))
}

  render() {
    console.log(this.state.users)
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=> <UserList updateUsersList={this.updateUsersList } users={this.state.users} />} />
            <Route path="/users/:id" render={match=> <UserDetails updateUsersList={this.updateUsersList } {...match} users={this.state.users} />} />
            <Route path="/edit" component={UserEdit} />
            <Route path="/new" render={()=> <UserFormAdd updateUsersList={this.updateUsersList} />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
