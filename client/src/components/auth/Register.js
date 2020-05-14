import React, { useContext, useState } from "react";
import AlertContext from "../../Context/alert/alertContext";
const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("please input all the field", "danger");
    } else if (password !== password2) {
      setAlert("password not same", "danger");
    } else {
      console.log("Register Submit");
    }
  };
  return (
    <div className="form-container">
      <h1>
        account <span className="text-primary">register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">confirm password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
