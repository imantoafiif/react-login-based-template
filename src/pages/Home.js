import Cookies from "js-cookie";
import React from "react";
import PrivateRoute from "../middleware/PrivateRoute";
import { increment } from '../store/slices/sessionSlice';
import WithNav from "../layouts/WithNav";
import { useDispatch, useSelector } from "react-redux";

function Home() {
   
    const dispatch = useDispatch()
    const userSession = useSelector(state => state.user.user)

    console.log('session2', userSession)

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
                        Welcome, { userSession?.username }
                    </p>
                    <p className="subtitle">
                        This is home
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