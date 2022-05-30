import React from "react";
import '../../styles/auth.css'
<<<<<<< HEAD:client/src/components/Auth/index.js

const Auth = () => {
    return (
=======
const Auph = () => {
    return(
>>>>>>> c45b4a5e20012711b8e2d8906ce9406c4806eeef:client/src/components/Auph/index.js
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
<<<<<<< HEAD:client/src/components/Auth/index.js
    )
}

export default Auth;
=======
)
    }
export default Auph;
>>>>>>> c45b4a5e20012711b8e2d8906ce9406c4806eeef:client/src/components/Auph/index.js
