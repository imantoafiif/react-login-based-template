import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {

    const session = Cookies.get('auth.session')

    return (
        <>
            {
                session != undefined ? 
                props.children :
                <Navigate to='/'></Navigate>
            }
        </>
    )
}

export default PrivateRoute