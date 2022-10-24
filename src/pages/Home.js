import Cookies from "js-cookie";
import React from "react";
import PrivateRoute from "../middleware/PrivateRoute";
import WithNav from "../layouts/WithNav";

function Home() {
    const session = Cookies.get('auth.session')
    const user = session ? JSON.parse(session) : session

    return (
       <>
        {/* <Default
            children={'test'}> */}
        <PrivateRoute>
            <section className="hero is-fullheight-with-navbar has-text-centered">
                <div className="hero-body">
                    <div 
                        style={{width: '100%'}}
                        className="">
                    <p className="title">
                        Welcome, { user && <span>{user.username}</span> } 
                    </p>
                    <p className="subtitle">
                        This is home
                    </p>
                    </div>
                </div>
            </section>
        </PrivateRoute>
        
        {/* </Default> */}
       </>
    )
}

export default Home;