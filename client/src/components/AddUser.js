import React from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'

export function AddUser(props) {
    console.log(props)
    const { register, handleSubmit, errors } = useForm()
    const addUser = data => {
        axios.post(`http://localhost:5000/api/users/`, data)
            .then(res => {
                console.log(res)
                props.setRerender(!props.rerender)
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }
    const editUser = data => {
        axios.put(`http://localhost:5000/api/users/${props.match.params.id}`, data)
        .then(res => {
            console.log(res)
            props.setRerender(!props.rerender)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <form>
            <input name='name' placeholder='Name' ref={register({required: true})} />
            {errors.name && 'Name is Required'}
            <input name='bio' placeholder='Bio' ref={register({required: true})} />
            {errors.bio && 'Bio is Required'}
            {props.match.params.id ?
            <button onClick={handleSubmit(editUser)}>Edit User</button> :
            <button onClick={handleSubmit(addUser)}>Add User</button>
            }
            
        </form>
    )
}