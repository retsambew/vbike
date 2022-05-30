import React from "react";

const Footer = () => {
    return (
        <div>
            <button id="myBtn">Open Modal</button>
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close">&times;</span>
                    <form>
                        <label typeof="text" placeholder="Username"></label>
                        <label typeof="password" placeholder="********"></label>
                    </form>
                    <p>Crteate an account ? </p>
                </div>

            </div>
        </div>
    )
}

export default Footer;