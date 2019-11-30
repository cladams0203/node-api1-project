import React from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'

export function AddUser(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        axios.post('http://localhost:5000/api/users', data)
            .then(res => {
                console.log(res)
                props.setRerender(!props.rerender)
                props.history.push('/')
            })
            .catch(err => console.log(err))
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='name' placeholder='Name' ref={register({required: true})} />
            <input name='bio' placeholder='Bio' ref={register({required: true})} />
            <button type='submit'>Add User</button>
        </form>
    )
}