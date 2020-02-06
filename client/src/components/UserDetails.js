import React, { Component } from 'react'
import Service from '../service/User_service'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserEdit from './UserEdit'


class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            user: {},
            showModalWindow: false
    }
        this._service = new Service()
    }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })
    
    componentDidMount = () => {
        const userId = this.props.match.params.id
        this._service.getOneUser(userId)
            .then(theUser => this.setState({ user: theUser.data }))
            .catch(err => console.log(err))
    }



    render() {
        console.log(this.state.user)
    return (
        <>
        <Col className="user-card" md={8}>

            <h3>Nombre: {this.state.user.name}</h3>
            <p>Birthdate: {this.state.user.birthdate}</p>
            <p>Id: {this.state.user._id}</p>
            <br></br>
            {/* <Link className="btn btn-sm btn-dark" to={`/edit`} >Editar</Link> */}
            <button className="btn btn-sm btn-dark" >Eliminar</button>
            <Button className="button-card" variant="dark" onClick={this.handleShow}>Editar</Button>
        </Col >

        <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserEdit
            user={this.props}
            updateUsersList={this.props.updateUsersList}
            closeModalWindow={this.handleClose}
          />
        </Modal.Body>
        </Modal>
        </>
    )
    }

}


export default UserDetails
