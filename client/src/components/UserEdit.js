import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Service from "../service/User_service";

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      name:this.props.user.name,
      birthdate: this.props.user.birthdate
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.service
      .editUser(this.state, this.props.user._id)
      .then(theEditedEvent => {
        
        this.props.updateUsersList(this.state);
        this.props.closeModalWindow();
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>birthdate</Form.Label>
          <Form.Control
            type="date" name="birthdate"
            onChange={this.handleInputChange}
            value={this.state.birthdate}
          />
        </Form.Group>

        <Button variant="dark" size="sm" type="submit">Editar</Button>
      </Form>
    );
  }
}
export default UserEdit;