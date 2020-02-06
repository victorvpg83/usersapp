import React from 'react'
import Col from 'react-bootstrap/Col'
import Service from '../service/User_service'
import { Link } from 'react-router-dom'


const UserCard = ({ _id, name, birthdate, history }) => {
    
    const deleteUser = (_id) => {
      const service = new Service()
        service.deleteUser(_id)
        .then(x => history.push("/"))
    }

    return (
        <Col className="user-card" md={4}>
            <p>Nombre: {name}</p>
            <p>Birthdate: {birthdate}</p>
       
            < Link to={`/users/${_id}`} className = "btn btn-sm btn-dark" > Detalles </Link>
            <button className="btn btn-sm btn-dark" onClick = {()=>{deleteUser(_id)}}>Eliminar</button>
        </Col >
    )
}

// 

export default UserCard