import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export function UserCard(props) {

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/users/${props.user.id}`)
        .then(res => {
            props.setRerender(!props.rerender)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h2> {props.user.name} </h2>
            <p> {props.user.bio} </p>
            <button onClick={(e) => {
                e.preventDefault()
                handleDelete()
            }}>Delete </button>
            <Link to={`/edituser/${props.user.id}`}>
                <button>Edit</button>
            </Link>

        </div>
    )
}