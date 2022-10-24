import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'

const Guest = (props) => {

    const session = Cookies.get('auth.session')
    console.log(props.location)

    return (
        <>
            {/* { !session ? 
            props.children : 
            <Navigate to='/'></Navigate> } */}
           { 
                !session ?
                props.children : 
                <Navigate to='/home'></Navigate>
           }
        </>
    )
}

export default Guest