import { useRef } from "react";
import classes from "./Form.module.css";

function Form(props) {
  const supervisorFirstName = useRef();
  const supervisorLastName = useRef();
  const supervisorEmailAdress = useRef();
  const supervisorPhoneNumber = useRef();
  const supervisorSelections = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const supervisorFirst = supervisorFirstName.current.value;
    const supervisorLast = supervisorLastName.current.value;
    const supervisorEmail = supervisorEmailAdress.current.value;
    const supervisorPhone = supervisorPhoneNumber.current.value;
    const supervisorSelect = supervisorSelections.current.value;

    const supervisorData = {
      firstName: supervisorFirst,
      lastName: supervisorLast,
      email: supervisorEmail,
      phone: supervisorPhone,
      selection: supervisorSelect,
    };
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
              ref={supervisorFirstName}
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
              ref={supervisorLastName}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input type="email" id="email" ref={supervisorEmailAdress} />
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="phone">
            Phone Number
          </label>
          <input type="Number" id="phone" ref={supervisorPhoneNumber} />
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="supervisor">
            Supervisor
          </label>
          <select
            name="Supervisors"
            placeholder="select"
            required
            id="supervisor"
            ref={supervisorSelections}
          >
            <option value="select">Select...</option>
            <option value="Supervisor1">Supervisor1</option>
            <option value="Supervisor2">Supervisor2</option>
            <option value="Supervisor3">Supervisor3</option>
            <option value="Supervisor4">Supervisor4</option>
            <option value="Supervisor5">Supervisor5</option>
          </select>
        </div>
        <div className={classes.action}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
