import React from 'react'
import { UserCard } from './UserCard'
import { Link } from 'react-router-dom'

export function UserList(props) {
    return (
        <div>
            <Link to='/adduser'>
                <button>Add User</button>
            </Link>
            {props.users && props.users.map((item, index) => {
                return <UserCard 
                        user={item} 
                        key={index} 
                        history={props.history}
                        rerender={props.rerender}
                        setRerender={props.setRerender}
                        />
            })}
        </div>
    )
}