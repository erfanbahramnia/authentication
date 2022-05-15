import React from "react";

const SignUp = () => {
    return (
        <div>
            <h2>SignUp</h2>
            <form action="#">
                <div>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <p>error</p>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                    <p>error</p>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="pass" />
                    <p>error</p>
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="password" name="confrimPass" />
                    <p>error</p>
                </div>
                <div>
                    <p>I accept terms of privacy policy</p>
                    <input type="radio" name="privacyButton" />
                    <p>error</p>
                </div>
            </form>
            <div>
                <button>Login</button>
                <button>signup</button>
            </div>
        </div>
    )
};

export default SignUp;