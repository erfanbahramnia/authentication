import React, { useState, useEffect } from "react";

// function for vaildate the data
import validation from "../functions/validation";
// css style
import styles from "./SignUp.module.css"
// toastify
import notification from "../functions/toast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    // for knowing that data is valid or not
    const [error, setError] = useState({})

    // validation whenever data changed
    useEffect(() => {
        setError(validation(data, "signup"));
    }, [data, focus]);

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
    };

    // call when click on sign up button 
    const clickHandler = () => {
        // set to ture because if user doesn't fill the input show the error
        setFocus({
            name: true,
            email: true,
            pass: true,
            confirmPass: true,
            privacy: true
        })


        if (Object.keys(error).length) {
            console.log("error")
            notification("error");
        } else {
            notification("noError");
        }
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
                        className={focus.name && error.name ? styles.uncomplete : styles.userInput}
                        value={data.name} 
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {error.name && focus.name && <span className={styles.errors}>{error.name}</span> }
                </div>

                {/* taking email */}
                <div className={styles.data}>
                    <label>Email</label>
                    <br />
                    <input type="email" 
                        name="email" 
                        className={focus.email && error.email ? styles.uncomplete : styles.userInput}
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {error.email && focus.email && <span className={styles.errors}>{error.email}</span> }
                </div>

                {/* taking password */}
                <div className={styles.data}>
                    <label>Password</label>
                    <br />
                    <input type="password" 
                        name="pass" 
                        className={focus.pass && error.pass ? styles.uncomplete : styles.userInput}
                        value={data.pass}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {error.pass && focus.pass && <span className={styles.errors}>{error.pass}</span> }
                </div>
                
                {/* confirming password */}
                <div className={styles.data}>
                    <label id={styles.confirmPass}>Confirm password</label>
                    <br />
                    <input type="password" 
                        name="confirmPass" 
                        className={focus.confirmPass && error.confirmPass ? styles.uncomplete : styles.userInput}
                        value={data.confirmPass}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {error.confirmPass && focus.confirmPass && <span className={styles.errors}>{error.confirmPass}</span> }
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
                    {error.privacy && focus.privacy && <span className={styles.errors}>{error.privacy}</span> }
                </div>
            </form>
            <div className={styles.buttons}>
                <button id={styles.login}>Login</button>
                <button id={styles.signup} onClick={clickHandler}>Sign Up</button>
            </div>
            <ToastContainer />
        </div>
    )
};

export default SignUp;