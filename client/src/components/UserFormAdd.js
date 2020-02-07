import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import Service from '../service/User_service'


class UserFormAdd extends Component {

    constructor(props) {
        super(props)
        this._Service = new Service()
        this.state = {

            user: {
                name: "",
                birthdate: ''

            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this._Service.postUser(this.state.user)
            .then(x => {
                this.props.updateUsersList()
            })
            .catch(err => console.log(err))
    }


    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }

    render() {
        console.log(this.props)
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleInputChange} value={this.state.user.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control type="date" name="birthdate" onChange={this.handleInputChange} value={this.state.user.birthdate} />
                </Form.Group>

                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>Crear usuario</Button>
            </Form>
        )
    }
}


export default UserFormAdd