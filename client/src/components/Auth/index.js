import React from "react";
import '../../styles/auth.css'

const Auth = () => {
    return (
        <div className="container_auth">
            <form method="post">
                <div className="form">

                    <label>Enter Your Username</label>
                    <input type="text"></input>
                    <label> Enter Your Password </label>

                    <input type="password"></input>
                </div>
            </form>
            <div className="buttons">
                <button className="LogIn">Log In</button>
                <button className="Create">Create New Account?</button>
            </div>

            <div className="signup_form">
            <form method = "post">
                <label>Enter Username</label>
                <input type="text"></input>
                <label>Enter password</label>
                <input type="password"></input>
                <label>Phone number</label>
                <input type="phone-number"></input>
                <label>Registration Number</label>
                <input type = "text"></input>
                <div className="buttons2">
                    <button>Sign UP</button>
                    <button>Log In</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Auth;