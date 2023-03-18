import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Navigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";

const Signin = () => {
  const [values, setValues] = useState({
    username: "",
    password: "1234",
    error: "",
    eerror: "",
    perror: "",
    loading: false,
    didRedirect: false,
  });

  const { username, password, error, eerror, perror, loading, didRedirect } =
    values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      error: false,
      loading: true,
      perror: "",
      eerror: "",
    });
    if (username === "") {
      setValues({ ...values, eerror: "Please enter username" });
    } else if (password === "") {
      setValues({ ...values, eerror: "", perror: "Please enter password" });
    } else {
      signin({ username, password })
        .then((data) => {
          if (data.error) {
            setValues({
              ...values,
              error: data.error,
              perror: "",
              eerror: "",
              loading: false,
            });
          } else {
            authenticate(data, () => {
              setValues({
                ...values,
                didRedirect: true,
              });
            });
          }
        })
        
    }
  };

  // edit for babysitter dashboard/ admin dash/ parent dash
  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 0) {
        return <Navigate to="/admin/dashboard" />;
      } else if(user && user.role === 2) {
        return <Navigate to="/parent/dashboard" />;
      }else if (user && user.role === 1){
        return <Navigate to="/babysitter/dashboard" />;

      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/"></Navigate>;
    }
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email or Username:</label>
              <input
                className="form-control"
                value={username}
                onChange={handleChange("username")}
                type="email"
              />
              
              <b>
                <span className="errorMessage alert-danger">{eerror}</span>
              </b>
              <br/>
            </div>
            <div className="form-group">
              <label className="text-light">Password:</label>
              <input
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              /><b>
              <span className="errorMessage alert-danger">{perror}</span>
            </b>
            <br/>
            </div>
            <br />
            <button onClick={onSubmit} className="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign In page" description="A page for user to sign In!">
      {loadingMessage()}
      {error && error.map((err) => {
                if (err.param == 'general')
                return( <div className="errorMessage alert-danger">
                <h2 style={{"fontSize": "1.2rem"}}>{err.msg}</h2>
            </div>)
            })}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
