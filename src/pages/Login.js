import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from "js-cookie";
import Guest from "../middleware/Guest";

function Login() {

    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    var careerPositionAspiration = null;

    //nembak 2 kali ?
    useEffect(() => {
        getListPositionAspiration()
        console.log('process.env', process.env)
    }, [])

    const getListPositionAspiration = () => {
        axios.get('/ldap/api/career/list-position-aspiration', {
            params: {
                personnel_number: '049.01.00',
                per_page: 20,
            }
        })
        .then(r => {
            if(Array.isArray(r.data.data) && r.data.data.length) {
                careerPositionAspiration = r.data.data
            } 
        })
        .catch(e => {
            console.log(e)
        })
    }

    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        Cookies.remove('auth.token')
        Cookies.remove('auth.session')
        axios.post('/ldap/api/auth/login', {
            application_id: process.env.REACT_APP_ID,
            password,
            username: user,
        })
        .then(r => {
            // setLoading(false)
            if(r.data) {
                Cookies.set('auth.token', r.data.access_token, { expires: 1 })
                console.log(Cookies.get('auth.token'))
                axios.get(`/ldap/api/auth/account`, {
                    params: {
                        include: 'user_role,role_buscd,role_pernr,avatar,notification,personal,position'
                    }
                })
                .then(re => {
                    console.log('cuk', re)
                    let session = JSON.stringify(re.data.data)
                    console.log(session)
                    Cookies.set('auth.session', session, { expires: 1 })
                    navigate('/home')
                })
                // localStorage.setItem('token', r.data.access_token)
                // navigate('/home')
            }
        })
        .catch(e => {
            setLoading(false)
            console.log(e)
        })
    }

    return (
        <>
            <Guest>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                    <form 
                                        onSubmit={submit}
                                        method="post"
                                        action="" 
                                        className="box">
                                        <div className="field">
                                            <label className="label">User</label>
                                            <div className="control has-icons-left">
                                                <input
                                                    value={user}  
                                                    onChange={e => setUser(e.target.value)}
                                                    className="input" required/>
                                                <span className="icon is-small is-left">
                                                <i className="fa fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Password</label>
                                            <div className="control has-icons-left">
                                                <input 
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                    type="password" className="input" required/>
                                                <span className="icon is-small is-left">
                                                <i className="fa fa-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div className="field">
                                            <label className="checkbox">
                                                <input type="checkbox"/>
                                                Remember me
                                            </label>
                                        </div> */}
                                        <div className="field">
                                            <button
                                                disabled={isLoading} 
                                                className={`button is-success ${isLoading ? 'is-loading' : ''}`}>
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Guest>
            
        </>
    )
}

export default Login;