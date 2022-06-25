import classes from "./Form.module.css";

function Form(props) {
  return (
    <div>
      <form className={classes.form}>
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
          <input type="email" required id="email" />
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="phone">
            Phone Number
          </label>
          <input type="Number" required id="phone" />
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
