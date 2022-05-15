import React from "react";

// css style
import styles from "./SignUp.module.css"

const SignUp = () => {
    return (
        <div className={styles.container}>
            <h2>SignUp</h2>
            <form action="#" className={styles.form}>
                <div>
                    <label>Name</label>
                    <br />
                    <input type="text" name="name" />
                    <p>error</p>
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" />
                    <p>error</p>
                </div>
                <div>
                    <label>Password</label>
                    <br />
                    <input type="password" name="pass" />
                    <p>error</p>
                </div>
                <div>
                    <label>Confirm password</label>
                    <br />
                    <input type="password" name="confrimPass" />
                    <p>error</p>
                </div>
                <div>
                    <p>I accept terms of privacy policy</p>
                    <br />
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