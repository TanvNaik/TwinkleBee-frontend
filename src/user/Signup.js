import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    gender: "",
    adhaarNumber: "",
    occupation: "",
    contactNumber: "",
    pp: "",
    role: "",
    password: "",
    cfPassword: "",
    error: [],
    success: false,
    formData: new FormData(),
  });
  const [section, setSection] = useState("");
  const {
    name,
    username,
    email,
    gender,
    adhaarNumber,
    occupation,
    contactNumber,
    pp,
    role,
    password,
    cfPassword,
    error,
    success,
    formData,
  } = values;

  const changeSection = (name) => (event) => {
    setSection(event.target.value);
    if (section === "parent") formData.set("role", 2);
    else formData.set("role", 1);
  };

  const handleChange = (name) => (event) => {
    const value = name === "pp" ? event.target.files[0] : event.target.value;

    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    formData.set("role", (section === 'parent' ? 2 : 1) );
    setValues({ ...values, error: "" });
    console.log(formData)
    signup(formData).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, success: true })
        alert("Successfully Registered");
      }
    });
  };
  const signUpForm = () => {
    return (
      <div>
        {section === "parent" && (
          <form>
            <div className="d-flex justify-content-evenly w-100 mt-4"  >
              <div className="w-25" >
                <div className=" text-left">
                <div className="form-group">
                      <label  >Name:</label>
                      <input
                        className="form-control"
                        onChange={handleChange("name")}
                        type="text"
                        value={name}
                      />
                      <b>
                        <span className="errorMessage  alert-danger text-danger  ">
                          {error &&
                            error.slice(0, 10).map((err) => {
                              if (err.param === "name")
                                return (
                                  <>
                                    {err.msg}
                                    <br />
                                  </>
                                );
                            })}
                        </span>{" "}
                      </b>{" "}
                      <br />
                    </div>
                </div>
                <div className="form-group">
                      <label  >Username:</label>
                      <input
                        className="form-control"
                        onChange={handleChange("username")}
                        type="text"
                        value={username}
                      />
                      
                      <b>
                        <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                          {error &&
                            error.slice(0, 10).map((err) => {
                              if (err.param === "username")
                                return (
                                  <>
                                    {err.msg}
                                    <br />
                                  </>
                                );
                            })}
                        </span>{" "}
                      </b>{" "}
                      <br />
                    </div>
                <div className="form-group">
                          <label  >Email:</label>
                          <input
                              className="form-control"
                              onChange={handleChange("email")}
                              type="email"
                              value={email}
                            />
                            <br />
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "email") return err.msg;
                                  })}
                              </span>{" "}
                            </b><br/>
                          </div>
                    <div className="form-group">
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "gender") return err.msg;
                                  })}
                              </span>
                            </b>
                            Gender:
                            <input
                              onChange={handleChange("gender")}
                              type="radio"
                              className="m-2"
                              name="gender"
                              value="Female"
                            />
                            Female
                            <input
                              onChange={handleChange("gender")}
                              type="radio"
                              name="gender"
                              className="m-2"
                              value="Male"
                            />
                            Male
                          </div><br/>
                  <div className="form-group">
                    <label  >Adhaar Number:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("adhaarNumber")}
                      type="text"
                      value={adhaarNumber}
                    />
                  </div>
                    
              </div>

              <div className="w-25">
              <div className="form-group">
                      <label  >Occupation:</label>
                      <input
                        className="form-control"
                        onChange={handleChange("occupation")}
                        type="text"
                        value={occupation}
                      />
                    </div>
                  <div className="form-group">
                    <label  >Contact Number:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("contactNumber")}
                      type="number"
                      value={contactNumber}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "contactNumber") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                  </div>
                 <div className="form-group">
                    <label  >Password:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("password")}
                      type="password"
                      value={password}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.slice(0, 10).map((err) => {
                            if (err.param === "password")
                              return (
                                <>
                                  {err.msg}
                                  <br />
                                </>
                              );
                          })}
                      </span>{" "}
                    </b><br/>
                </div>
                <div className="form-group">
                    <label  >Confirm Password:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("cfPassword")}
                      type="password"
                      value={cfPassword}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "cfPassword") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                </div>
                <div className="form-group">
                    <label  >Profile Pic:</label>
                    <input
                      className="form-control"
                      type="file"
                      name="pp"
                      id="pp"
                      required={true}
                      accept="image/*"
                      onChange={handleChange("pp")}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "pp") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                </div>            
              </div>

            </div><br/>
            <div className="w-100 text-center">
            <button onClick={onSubmit} className="btn btn-success " style={{width: "8rem"}}>
                 Submit
            </button>
            </div>
            
          </form>
          
        )}
        {section === "babysitter" && (
          <form>
            <div className="d-flex justify-content-evenly w-100 mt-4 ">
              <div className="w-25">
                <div className=" text-left">
                <div className="form-group">
                      <label  >Name:</label>
                      <input
                        className="form-control"
                        onChange={handleChange("name")}
                        type="text"
                        value={name}
                      />
                      <b>
                        <span className="errorMessage  alert-danger text-danger alert-danger text-danger ">
                          {error &&
                            error.slice(0, 10).map((err) => {
                              if (err.param === "name")
                                return (
                                  <>
                                    {err.msg}
                                    <br />
                                  </>
                                );
                            })}
                        </span>{" "}
                      </b>{" "}
                      <br />
                    </div>
                </div>
                <div className="form-group">
                      <label  >Username:</label>
                      <input
                        className="form-control"
                        onChange={handleChange("username")}
                        type="text"
                        value={username}
                      />
                      
                      <b>
                        <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                          {error &&
                            error.slice(0, 10).map((err) => {
                              if (err.param === "username")
                                return (
                                  <>
                                    {err.msg}
                                    <br />
                                  </>
                                );
                            })}
                        </span>{" "}
                      </b>{" "}
                      <br />
                    </div>
                <div className="form-group">
                          <label  >Email:</label>
                          <input
                              className="form-control"
                              onChange={handleChange("email")}
                              type="email"
                              value={email}
                            />
                            <br />
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "email") return err.msg;
                                  })}
                              </span>{" "}
                            </b><br/>
                          </div>
                    <div className="form-group">
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "gender") return err.msg;
                                  })}
                              </span>
                            </b>
                            Gender:
                            <input
                              onChange={handleChange("gender")}
                              type="radio"
                              className="m-2"
                              name="gender"
                              value="Female"
                            />
                            Female
                            <input
                              onChange={handleChange("gender")}
                              type="radio"
                              name="gender"
                              className="m-2"
                              value="Male"
                            />
                            Male
                          </div><br/>
                  <div className="form-group">
                    <label  >Adhaar Number:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("adhaarNumber")}
                      type="text"
                      value={adhaarNumber}
                    />
                  </div>
                    
              </div>

              <div className="w-25">
              
                  <div className="form-group">
                    <label  >Contact Number:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("contactNumber")}
                      type="number"
                      value={contactNumber}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "contactNumber") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                  </div>
                 <div className="form-group">
                    <label  >Password:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("password")}
                      type="password"
                      value={password}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.slice(0, 10).map((err) => {
                            if (err.param === "password")
                              return (
                                <>
                                  {err.msg}
                                  <br />
                                </>
                              );
                          })}
                      </span>{" "}
                    </b><br/>
                </div>
                <div className="form-group">
                    <label  >Confirm Password:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("cfPassword")}
                      type="password"
                      value={cfPassword}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "cfPassword") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                </div>
                <div className="form-group">
                    <label  >Profile Pic:</label>
                    <input
                      className="form-control"
                      type="file"
                      name="pp"
                      id="pp"
                      required={true}
                      accept="image/*"
                      onChange={handleChange("pp")}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "pp") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                </div>            
              </div>

            </div><br/>
            <div className="w-100 text-center">
            <button onClick={onSubmit} className="btn btn-success " style={{width: "8rem"}}>
                 Submit
            </button>
            </div>
            
          </form>
          
        )}
        
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage   = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          {error &&
            error.map((err, key) => {
              if (err.param == "general")
                return (
                  <div key={key} className="errorMessage  alert-danger text-danger">
                    <h2 style={{ fontSize: "1.2rem" }}>{err.msg}</h2>
                  </div>
                );
            })}
          
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign up page" description="A page for user to sign up!">
      <div className="form-group text-center">
        <input
          onChange={changeSection("babysitter")}
          type="radio"
          className="m-2"
          name="section"
          value="babysitter"
        />
        Babysitter
        <input
          onChange={changeSection("parent")}
          type="radio"
          name="section"
          className="m-2"
          value="parent"
        />
        Parent
      </div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
