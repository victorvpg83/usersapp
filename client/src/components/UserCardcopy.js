import React from 'react'
import Col from 'react-bootstrap/Col'


class UserCard extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          showModalWindow: false
        };
    }

    render(){

    return (
        <Col className="user-card" md={4}>
            <p>Nombre: {this.props.name}</p>
            <p>Birthdate: {this.props.birthdate}</p>
            <br></br>
            <button>Detalles</button>
            <button>Eliminar</button>
        </Col >
    )
}
}


export default UserCard