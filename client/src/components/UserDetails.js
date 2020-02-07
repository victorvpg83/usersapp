import React, { Component } from 'react'
import Service from '../service/User_service'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap'
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

    userUpdate= () =>{
        const userId = this.props.match.params.id
        this._service.getOneUser(userId)
            .then(theUser => this.setState({ user: theUser.data }))
            .catch(err => console.log(err))
    }

    deleteUser = (_id) => {
          this._service.deleteUser(_id)
          .then(x => { 
            this.props.updateUsersList()
            this.props.history.push('/')
        })
          .catch(err => console.log(err, "Error borrando user"))
      }

    render() {
        console.log(this.state.user)
    return (
        <>
          <Container>
            <Row>
              <Col>
              <h1 className='h1Form'>Detalles de usuario</h1>
              </Col>
            </Row>        
            <Row>
              <Col md={3}></Col>
              <Col className="userDetails" md={6}>

                  <h3><strong>Nombre:</strong> {this.state.user.name}</h3>
                  <p><strong>Birthdate:</strong> {this.state.user.birthdate}</p>
                  <p><strong>Id:</strong> {this.state.user._id}</p>
                  <br></br>
                  <Button className="btn btn-sm btn-dark btnDet" variant="dark" onClick={this.handleShow}>Editar</Button>
                  <Button className="btn btn-sm btn-danger" onClick={this.state.user? ()=>this.deleteUser(this.state.user._id): null} >Eliminar</Button>
              </Col >
              <Col md={3}></Col>
            </Row>
          </Container>

        <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserEdit
            {...this.props}
            user={this.state.user}
            updateUsersList={this.props.updateUsersList}
            closeModalWindow={this.handleClose}
            userUpdate={this.userUpdate}
          />
        </Modal.Body>
        </Modal>
        </>
    )
    }

}


export default UserDetails
