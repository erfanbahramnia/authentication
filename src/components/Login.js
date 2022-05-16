import React, { useState, useEffect } from "react";

// function for vaildate the data
import validation from "../functions/validation";
// toastify
import notification from "../functions/toast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// css style
import styles from "./Login.module.css";

const Login = () => {

    // for saving data
    const [data, setData] = useState({
        email: "",
        pass: "",
    });

    // for changing the class of inputs when focused on them 
    const [focus, setFocus] = useState({})
    // for knowing that data is valid or not
    const [error, setError] = useState({})

    // validation whenever data changed
    useEffect(() => {
        setError(validation(data, "login"));
    }, [data, focus]);

    // this function take data and save them in data state
    const changeHandler = (event) => {
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
            email: true,
            pass: true,
        })


        if (Object.keys(error).length) {
            notification("error");
        } else {
            notification("noError");
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Login</h2>
            <form>
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
            </form>
            <div className={styles.buttons}>
                <button id={styles.login} onClick={clickHandler}>Login</button>
            </div>
            <ToastContainer />
        </div>
    )
};

export default Login;