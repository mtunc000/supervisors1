//import { useState } from "react";
import classes from "./Form.module.css";
import Supervisors from "./Supervisors";

function Form(props) {
  //   const supervisorFirstName = useRef();
  //   const supervisorLastName = useRef();
  //   const supervisorEmailAdress = useRef();
  //   const supervisorPhoneNumber = useRef();
  //   const supervisorSelections = useRef();

  //   const [selectedSupervisor, setSelectedSupervisor] = useState();

  //   function handleSelectChange(event) {
  //     setSelectedSupervisor({
  //       ...selectedSupervisor,
  //       firstName: event.target.value,
  //     });
  //}

  function submitHandler(event) {
    console.log("1234", event.target.supervisor.value);
    event.preventDefault();

    // const supervisorFirst = supervisorFirstName.current.value;
    // const supervisorLast = supervisorLastName.current.value;
    // const supervisorEmail = supervisorEmailAdress.current.value;
    // const supervisorPhone = supervisorPhoneNumber.current.value;
    // const supervisorSelect = supervisorSelections.current.value;

    const supervisorData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      selection: event.target.supervisor.value,
    };
    console.log(supervisorData);
    props.onAddSupervisor(supervisorData);
  }

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
              id="firstName"
              //ref={supervisorFirstName}
            />
          </div>
          <div className={classes.control}>
            <label type="select" className={classes.label} htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              required
              id="lastName"
              // onChange={handleSelectChange}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input type="email" id="email" />
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="phone">
            Phone Number
          </label>
          <input type="Number" id="phone" />
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
