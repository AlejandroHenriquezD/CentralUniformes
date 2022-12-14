import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo_pequeño from '../logo_pequeño.png';

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowClients = () => {
    const [clients, setClients] = useState([])
    useEffect ( ()=> {
        getAllClients() 
    }, [])


    const getAllClients = async () => {
        const response = await axios.get(`${endpoint}/clientes`)
        setClients(response.data)
    }

    const deleteClient = async (id) => {
        await axios.delete(`${endpoint}/cliente/${id}`)
        getAllClients()
    }

    return (
        <div>
            <div className='d-grip gap-2'>
                <Link to="/create_client" className='btn btn-danger btn-lg mt-2 mb-2 text-white'>Crear</Link>
            </div>
            <img className='lg mt-2 mb-2 ' src={logo_pequeño} alt="Logo" />

            <table className='table table-striped'>
                <thead className='bg-success text-white'>
                    <tr>
                        <td>Usuario</td>
                        <td>Teléfono</td>
                        <td>Email</td>
                        <td>Dirección</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {clients.map( (client) => (
                        <tr key={client.id}>
                            <td> {client.usuario} </td>
                            <td> {client.telefono} </td>
                            <td> {client.email} </td>
                            <td> {client.direccion} </td>
                            <td>
                                <Link to={`/edit_client/${client.id}`} className='btn btn-primary'>Editar</Link>
                                <button onClick={ ()=>deleteClient(client.id)} className='boton danger'>Eliminar</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ShowClients