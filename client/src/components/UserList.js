import React from 'react'
import { UserCard } from './UserCard'

export function UserList(props) {
    console.log(props)
    return (
        <div>
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