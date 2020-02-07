import React from 'react'
import Service from '../service/User_service'
import { Container, Row, Button, Modal, Col } from 'react-bootstrap'
import UserCard from './UserCard'
import UserFormAdd from './UserFormAdd'
import { Link } from 'react-router-dom'


class UserList extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount = () => this.props.updateUsersList()

    render() {
        console.log(this.props)
        return (


            <section>

                <Container>
                    <Row>
                        <Col md={8}>
                    <h1>Listado de Usuarios</h1>
                        </Col>
                        <Col md={4}>
                     < Link to={`/new`} target={'_blank'} className = "btn btn-sm btn-dark" > Nuevo Usuario </Link>
                        </Col>
                    </Row>

                    <Row>
                        {this.props.users.map(users => <UserCard key={users._id} {...users} history={this.props.history} updateUsersList={this.props.updateUsersList} />)}
                    </Row>
                </Container>

            </section>

        )
    }
}


export default UserList