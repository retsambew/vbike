import React from "react";
import '../../styles/auth.css'

const Auph = () => {
    return (
        <div className="container_auth">
            <form method="post">
                <div className="form">

                    <label>Enter Your Username</label>
                    <input typeof="text"></input>
                    <label> Enter Your Password </label>

                    <input typeof="password"></input>
                </div>
            </form>
            <div className="buttons">
                <button className="LogIn">Log In</button>
                <button className="Create">Create New Account?</button>
            </div>
        </div>
    )
}

export default Auph;