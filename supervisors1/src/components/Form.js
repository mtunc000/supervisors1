import classes from "./Form.module.css";
import Supervisors from "./Supervisors";
import React, { useState } from "react";

function Form(props) {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLasttName, setEnteredLasttName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [enteredSupervisor, setEnteredSupervisor] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (
      enteredFirstName.trim().length === 0 ||
      enteredLasttName.trim().length === 0
    ) {
      return;
    }
    console.log(
      enteredFirstName,
      enteredLasttName,
      enteredEmail,
      enteredPhoneNumber,
      enteredSupervisor
    );
    setEnteredFirstName("");
    setEnteredLasttName("");
    setEnteredEmail("");
    setEnteredPhoneNumber("");
    setEnteredSupervisor("");

    const supervisorData = {
      id: event.target.id.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      selection: event.target.supervisor.value,
    };
    console.log(supervisorData);
    props.onAddSupervisor(supervisorData);
  }
  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLasttName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };
  //   const supervisorChangeHandler = (event) => {
  //     setEnteredSupervisor(event.target.value);
  //   };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2 className={classes.h2}>Notification Form</h2>

        <div>
          <div className={classes.control}>
            <label className={classes.label} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              required
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
              id="firstName"
            />
          </div>
          <div className={classes.control}>
            <label type="select" className={classes.label} htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              required
              value={enteredLasttName}
              onChange={lastNameChangeHandler}
              id="lastName"
            />
          </div>
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            id="email"
          />
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="phone">
            Phone Number
          </label>
          <input
            type="Number"
            value={enteredPhoneNumber}
            onChange={phoneNumberChangeHandler}
            id="phone"
          />
        </div>
        <Supervisors />

        <div className={classes.action}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
