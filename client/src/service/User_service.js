 import axios from 'axios'

export default class Service {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/server',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllUsers = () => this._service.get('/getAllUsers')
    getOneUser = id => this._service.get(`/${id}`)
    postUser = user => this._service.post('/new', user)
    deleteUser = id => {
        return this._service.get( `/delete/${id}`)
        .then(userDeleted => userDeleted)
    }
    editUser = (user, id) => {
        console.log(id)
        return this._service.post('/edit', { user, id})}
}