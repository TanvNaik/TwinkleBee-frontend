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
 
  const signInForm = () => {
    return (
      <div className="my-auto max-w-3xl w-full blub relative ml-0 w-50 "
          >
      <form>
      
        <div className="w-100">
        <div className="form-group">
               <label >Email or Username: </label>
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
               <label >Password:</label>
               <input
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              /><b>
              <span className="errorMessage alert-danger">{perror}</span>
            </b>
            <br/>
            <div className="text-center">
            <button onClick={onSubmit} className="btn btn-success w-25 p-1"  >
               Submit
             </button>
            </div>
            
            </div>
        </div>
      
      </form>
      </div>
      
    );
  };
  return (
    <Base title="Sign In page" description="A page for user to sign In!">
      {loadingMessage()}
      {error && typeof error === Array && error.map((err,key) => {
                if (err.param == 'general')
                return( <div key={key}className="errorMessage alert-danger">
                <h2 style={{"fontSize": "1.2rem"}}>{err.msg}</h2>
            </div>)
            })}

      <div className=" d-flex w-100   justify-content-between  section1">
      <div
          id="carouselExampleSlidesOnly"
          className="carousel slide w-50 "
          data-bs-ride="carousel"
          style={{ maxWidth: "70%", widt: "40%", marginRight:"5%" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/img1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/img2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/img3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        {signInForm()}
        
      </div>
      
   
    
      {performRedirect()}

      {/* <div >
        <img src="./undraw_baby_re_fr9r.svg" alt="" />gwrg
      </div> */}
    </Base>
  );
};

export default Signin;
