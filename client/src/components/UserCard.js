import React from 'react'
import axios from 'axios'

export function UserCard(props) {

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/users/${props.user.id}`)
        .then(res => {
            console.log(res)
            props.setRerender(!props.rerender)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    


    console.log(props)
    return (
        <div>
            <h2> {props.user.name} </h2>
            <p> {props.user.bio} </p>
            <button onClick={(e) => {
                e.preventDefault()
                handleDelete()
            }}>Delete </button>
        </div>
    )
}