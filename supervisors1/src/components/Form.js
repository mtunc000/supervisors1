function Form(props) {
  return (
    <form>
      {" "}
      Notification Form
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="First Name" required id="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="Last Name" required id="lastName" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" placeholder="email" required id="email" />
      </div>
      <div>
        <label htmlFor="phone">First Name</label>
        <input type="Number" placeholder="Phone Number" required id="phone" />
      </div>
      <div>
        <label htmlFor="supervisor">Supervisor</label>
        <input type="select" placeholder="select" required id="supervisor" />
      </div>
    </form>
  );
}

export default Form;
