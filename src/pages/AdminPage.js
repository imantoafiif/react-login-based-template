import React from "react";
// import WithNav from "../layouts/WithNav";
import Admin from "../layouts/Admin";

function AdminPage() {
    return (
       <>
        <section className="hero is-fullheight-with-navbar has-text-centered">
            <div className="hero-body">
                <div 
                    style={{width: '100%'}}
                    className="">
                <p className="title">
                    Admin
                </p>
                <p className="subtitle">
                    This page is for admin only
                </p>
                </div>
            </div>
        </section>
       </>
    )
}

export default AdminPage;