import React from 'react'
import Service from '../service/User_service'
import { Container, Row, Button, Modal, Col } from 'react-bootstrap'
import UserCard from './UserCard'


class UserList extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            withCredentials: true,
            users: [],

        }
    }

    componentDidMount = () => this.updateUsersList()

    updateUsersList = () => {
        this._service.getAllUsers()
            .then(allUsersFromDB => this.setState({ users: allUsersFromDB.data }))
            .catch(err => console.log("Error", err))
    }


    render() {
        return (


            <section>

                <Container>

                    <Row>
                        <Col md={8}>
                    <h1>Listado de Usuarios</h1>
                        </Col>
                        <Col md={4}>
                     <Button variant="dark" onClick={this.handleShow}>Nuevo Usuario</Button>
                        </Col>
                    </Row>

                    <Row>
                        {this.state.users.map(users => <UserCard key={users._id} {...users} history={this.props.history} />)}
                    </Row>
                </Container>

            </section>

        )
    }
}


export default UserList