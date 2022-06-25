import React from "react";
import Form from "./components/Form";
import classes from "./App.module.css";

function App() {
  function addSupervisorHandler(supervisorData) {
    fetch(
      "https://supervisors1-e9952-default-rtdb.firebaseio.com/supervisors.json",
      {
        method: "POST",
        body: JSON.stringify(supervisorData),
        // headers: { "Content type": "application/json" },
      }
    );
  }
  return (
    <div className={classes.app}>
      <h1 className={classes.h1}> Supervisors</h1>
      <Form onAddSupervisor={addSupervisorHandler} />
    </div>
  );
}

export default App;
