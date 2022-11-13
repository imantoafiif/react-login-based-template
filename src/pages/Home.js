import Cookies from "js-cookie";
import React, { useEffect } from "react";
import PrivateRoute from "../middleware/PrivateRoute";
import { increment } from '../store/slices/sessionSlice';
import WithNav from "../layouts/WithNav";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../helper";

function Home() {

    const dispatch = useDispatch()
    // const session = useSelector(state => state.user.user)
    const session = getSession()
    console.log('s', getSession())

    // console.log('aslkdasd', getSession())

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
                    <img
                        onError={e => {
                            e.target.onerror = null
                            e.target.src = '/img/user_avatar.png'
                        }}
                        style={{borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', objectPosition: 'top', marginBottom: '15px'}}
                        src={session.avatar?.avatar}>
                    </img>
                    <p className="title">
                        Welcome, { session?.personal.complete_name } <br/>
                    </p>
                    <p className="subtitle">
                        { session.username }
                    </p>
                    <button
                        onClick={() => dispatch(increment())} 
                        className="button">
                        Increment
                    </button>
                    </div>
                </div>
            </section>
        </PrivateRoute>
        
        {/* </Default> */}
       </>
    )
}

export default Home;