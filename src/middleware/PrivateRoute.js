import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'
import checkvalidity from '../helper/check-validity'

const PrivateRoute = (props) => {

    const session = localStorage.getItem('auth.token')
    
    if(session &&!checkvalidity(session)) {
        localStorage.removeItem('auth.token')
    }

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