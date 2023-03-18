import { useState } from "react";
import { validate } from "./validation";
import '../hojas-de-estilos/From.css'

function From(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
  <div className="loginTotal">
    <div className="formulario">
    <form  onSubmit={submitHandler}>
      <h3>Login</h3>
      <label className="label-form"  htmlFor="username">
        <input
          className="username"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <span className="span-form1" >username</span>
        <i></i>
      </label>

      <label htmlFor="password">
        <input
          className="password"
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <span className="span-form2" >password</span>
        <i></i>
      </label>
      <div className="links">
        <a href="#">Forgot password?</a>
        <a href="#">Sign up</a>
      </div>
      <button className="button" type="submit">Login</button>
    </form>
    </div>
  </div>
  );
}

export default From;


