import classes from "./Form.module.css";
import Supervisors from "./Supervisors";

function Form(props) {
  function submitHandler(event) {
    event.preventDefault();

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

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2 className={classes.h2}>Notification Form</h2>

        <div>
          <div className={classes.control}>
            <label className={classes.label} htmlFor="firstName">
              First Name
            </label>
            <input type="text" required id="firstName" />
          </div>
          <div className={classes.control}>
            <label type="select" className={classes.label} htmlFor="lastName">
              Last Name
            </label>
            <input type="text" required id="lastName" />
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
