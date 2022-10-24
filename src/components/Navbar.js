import Cookies from "js-cookie";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()
    const menus = [
        {label: 'Home', url: '/home'},
        {label: 'Page1', url: '/page1'},
        {label: 'Page2', url: '/admin/page2'},
        {label: 'Admin', url: '/admin'}
    ]

    function logout() {
        Cookies.remove('auth.token')
        Cookies.remove('auth.session')
        navigate('/')
    }

    return (
        <>
            <nav
                style={{borderBottom: '1px solid #d3d3d3'}} 
                className="navbar is-transparent is-fixed-top">
                <div className="navbar-brand">
                    <a 
                        style={{fontSize: '22px'}}
                        className="navbar-item">
                        <strong>LOGO</strong>
                    </a>
                    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                    {
                        menus.map((item, key) => 
                            (<Link
                                key={key}
                                to={item.url}
                                className="navbar-item">
                                {item.label}
                            </Link>)
                        )
                    }
                    
                    {/* <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                        Docs
                        </a>
                        <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                            Overview
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                            Modifiers
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                            Columns
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                            Layout
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                            Form
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                            Elements
                        </a>
                        <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                            Components
                        </a>
                    </div>
                    </div> */}
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            {/* <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                <span className="icon">
                                    <i className="fab fa-twitter"></i>
                                </span>
                                <span>
                                    Tweet
                                </span>
                                </a>
                            </p> */}
                            <p className="control">
                                <a  
                                    onClick={logout}>
                                    <strong>LOGOUT</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;