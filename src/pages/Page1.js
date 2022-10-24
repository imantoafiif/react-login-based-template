import React from "react";
import PrivateRoute from "../layouts/PrivateRoute";
import WithNav from "../layouts/WithNav";
// import Admin from "../layouts/Admin";

function Page1() {
    return (
       <>
       <PrivateRoute>
            <section className="hero is-fullheight-with-navbar has-text-centered">
                <div className="hero-body">
                    <div 
                        style={{width: '100%'}}
                        className="">
                    <p className="title">
                        Page 1
                    </p>
                    <p className="subtitle">
                        This is page 1
                    </p>
                    </div>
                </div>
            </section>
       </PrivateRoute>
        
       </>
    )
}

export default Page1;