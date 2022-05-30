import React from "react";
import '../../styles/auth.css'
const Auph = () => {
    return(
        <div className="container_auth">
            <form method="post">
                <div className="login_form">

                    <label>Enter Your Username</label>
                    <input type="text"></input>
                    <label> Enter Your Password </label>

                    <input type="password"></input>
                </div>
            </form>
            <div className="buttons">
                <button className="LogIn">Log In</button>
                <button className="Create" >Create New Account?</button>
            </div>

            <form method = "post">
            <div className="signup_form" >
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
            </div>
            </form>
        </div>
)
    }
export default Auph;