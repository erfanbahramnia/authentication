import React, { useState } from "react";

// css style
import styles from "./SignUp.module.css"

const SignUp = () => {

    // for saving data
    const [data, setData] = useState({
        name: "",
        email: "",
        pass: "",
        confirmPass: "",
        privacy: "",
    });

    // for changing the class of inputs when focused on them 
    const [focus, setFocus] = useState({})


    // this function take data and save them in data state
    const changeHandler = (event) => {
        // this is for checkbox
        if (event.target.name === "privacy") {
            // value of checkbox saved in value and will use as a value in data state
            const dataValue = event.target.checked;
            // change data state
            setData((prevState) => ({
                ...prevState,
                privacy: dataValue,
            }));
        } else { // this is for other type of inputs
            // the names of inputs taked that used for as a key in data state
            const dataKey = event.target.name;
            // value of input saved in value and will use as a value in data state
            const dataValue = event.target.value;
            // change data state
            setData((prevState) => ({
                ...prevState,
                [dataKey]: dataValue,
            }));
        };
    };
    
    // when focused in input the value of focus state will be true
    const focusHandler = event => {
        const name = event.target.name;
        setFocus((prevState) => ({
            ...prevState,
            [name]: true,
        }));
    }
    
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Sign Up</h2>
            <form action="#" className={styles.form}>

                {/* takin name */}
                <div className={styles.data}>
                    <label>Name</label>
                    <br />
                    <input type="text"
                        name="name"  
                        className={focus.name ? styles.uncomplete : styles.userInput}
                        value={data.name} 
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>

                {/* taking email */}
                <div className={styles.data}>
                    <label>Email</label>
                    <br />
                    <input type="email" 
                        name="email" 
                        className={focus.email ? styles.uncomplete : styles.userInput}
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>

                {/* taking password */}
                <div className={styles.data}>
                    <label>Password</label>
                    <br />
                    <input type="password" 
                        name="pass" 
                        className={focus.pass ? styles.uncomplete : styles.userInput}
                        value={data.pass}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>
                
                {/* confirming password */}
                <div className={styles.data}>
                    <label id={styles.confrimPass}>Confirm password</label>
                    <br />
                    <input type="password" 
                        name="confirmPass" 
                        className={focus.confirmPass ? styles.uncomplete : styles.userInput}
                        value={data.confirmPass}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {/* <span className={styles.errors}>error</span> */}
                </div>

                {/* taking accept for privacy */}
                <div className={styles.data}>
                    <div className={styles.privacy}>
                        <p>I accept terms of privacy policy</p>
                        <br />
                        <input type="checkbox" 
                            name="privacy"
                            value={data.privacy}
                            onChange={changeHandler}
                            onFocus={focusHandler} />
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