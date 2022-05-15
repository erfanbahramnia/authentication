import React from "react";

// components
import SignUp from "./components/SignUp";

// css style
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
};

export default App;
