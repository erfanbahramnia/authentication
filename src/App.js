import React  from "react";
import {Routes, Route} from "react-router-dom";

// components
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// css style
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
};

export default App;
