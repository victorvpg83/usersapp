import React from 'react'
import Col from 'react-bootstrap/Col'
import Service from '../service/User_service'
import { Link } from 'react-router-dom'


const UserCard = ({ _id, name, birthdate, updateUsersList }) => {
    
    const deleteUser = (_id) => {
      const service = new Service()
        service.deleteUser(_id)
        .then(x => updateUsersList())
    }

    return (
        <Col className="userCard" md={3}>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Birthdate:</strong> {birthdate}</p>   
            < Link to={`/users/${_id}`} className = "btn btn-sm btn-primary btnDet" > Detalles </Link>
            <button className="btn btn-sm btn-danger" onClick = {()=>{deleteUser(_id)}}>Eliminar</button>
        </Col >
    )
}


export default UserCard