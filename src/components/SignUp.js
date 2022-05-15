import React from "react";

// css style
import styles from "./SignUp.module.css"

const SignUp = () => {



    
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Sign Up</h2>
            <form action="#" className={styles.form}>
                <div className={styles.data}>
                    <label>Name</label>
                    <br />
                    <input type="text" name="name" className={styles.userInput} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>
                <div className={styles.data}>
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" className={styles.userInput} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>
                <div className={styles.data}>
                    <label>Password</label>
                    <br />
                    <input type="password" name="pass" className={styles.userInput} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>
                <div className={styles.data}>
                    <label id={styles.confrimPass}>Confirm password</label>
                    <br />
                    <input type="password" name="confrimPass" className={styles.userInput} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>
                <div className={styles.data}>
                    <div className={styles.privacy}>
                        <p>I accept terms of privacy policy</p>
                        <br />
                        <input type="checkbox" name="privacyButton" />
                    </div>
                    {/* <span className={styles.errors}>error</span> */}
                </div>
            </form>
            <div className={styles.buttons}>
                <button id={styles.login}>Login</button>
                <button id={styles.signup}>Sign Up</button>
            </div>
        </div>
    )
};

export default SignUp;