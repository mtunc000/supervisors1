import React from "react";
import Form from "./components/Form";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <h1 className={classes.h1}> Supervisors</h1>
      <Form />
    </div>
  );
}

export default App;
