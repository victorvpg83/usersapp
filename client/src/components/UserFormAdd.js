import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

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
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h1 className='h1Form' >Crear nuevo usuario</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label><strong>Nombre</strong></Form.Label>
                            <Form.Control type="text" name="name" onChange={this.handleInputChange} value={this.state.user.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><strong>Birthdate</strong></Form.Label>
                            <Form.Control type="date" name="birthdate" onChange={this.handleInputChange} value={this.state.user.birthdate} />
                        </Form.Group>

                        <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>Crear usuario</Button>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
        )
    }
}


export default UserFormAdd