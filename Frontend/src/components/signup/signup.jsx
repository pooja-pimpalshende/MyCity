import React from "react";
import "./signup.css";
import useForm from "./useForm";
import validate from './validateInfo';

function SignUpComponent() {
    const {handleChange,values,handleSubmit,errors}=useForm(validate);
  return (
    <div className="form">
      <form className="signupform" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input 
          id="email"
          type="text" 
          name="email" 
          placeholder="Enter your email" 
          value={values.email}
          onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            id="password"
            type="password"
            name="password1"
            placeholder="Enter your password"
            value={values.password1}
            onChange={handleChange}
          />
          {errors.password1 && <p>{errors.password1}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password:
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit" >
          Sign Up
        </button>
        {/* <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span> */}
      </form>
    </div>
  );
}

export default SignUpComponent;
