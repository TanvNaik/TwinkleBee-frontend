import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { addBaby } from './helper/parentapicalls'

export default function AddBaby() {
    const {user,token} = isAuthenticated()

    const [values, setValues] = useState({
        name: "",
        parent: "",
        gender: "",
        pp: "",
        height: "",
        weight: "",
        age: "",
        dob: "",
        error: "",
        success: "",
        address: "",
        id:"",
        formData: new FormData()
    })


    

    const {name, gender, id, success, error, pp, height, weight, age, dob, address, formData} = values;

    const handleChange = (name) => (event) => {
        const value = name === "pp" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
      };
      const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, parent: user._id})
        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
    
        setValues({ ...values, error: "" });
        
        addBaby(user._id, formData).then((data) => {
          if (data.error) {
            console.log(data.error);
            setValues({ ...values, error: data.error });
          } else {
            setValues({ ...values, success: true, id: data.babyId })

            alert("Successfully added");
          }
        });
      };

      const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                Baby Details added successfully. Please add
                <Link to={"/" + id + "/vacccine"} > vaccination details</Link>
              </div>
            </div>
          </div>
        );
      };
    const addBabyForm = () => {
        return (
            <form>
             <div className="d-flex  text-start justify-content-evenly w-100 mt-4"  >
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
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "gender") return err.msg;
                                  })}
                              </span>
                            </b><br></br>
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
                      <label  >Height (in inches):</label>
                      <input
                        className="form-control"
                        onChange={handleChange("height")}
                        type="text"
                        value={height}
                      />
                      
                      <b>
                        <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                          {error &&
                            error.slice(0, 10).map((err) => {
                              if (err.param === "height")
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
                          <label  >Weight(in kgs):</label>
                          <input
                              className="form-control"
                              onChange={handleChange("weight")}
                              type="text"
                              value={weight}
                            />
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "weight") return err.msg;
                                  })}
                              </span>{" "}
                            </b><br/>
                          </div>
                    
                    
              </div>

              <div className="w-25">
              <div className="form-group">
                      <label  >Age:</label>
                      <input
                        className="form-control"
                        onChange={handleChange("age")}
                        type="number"
                        value={age}
                      />
                    </div>
                  <div className="form-group">
                    <label  >Date of Birth:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("dob")}
                      type="date"
                      value={dob}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "dob") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                  </div>
                 <div className="form-group">
                    <label  >Address:</label>
                    <input
                      className="form-control"
                      onChange={handleChange("address")}
                      type="textarea"
                      value={address}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.slice(0, 10).map((err) => {
                            if (err.param === "address")
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

        )
    }
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
    <Base title={"Add Baby Profile"}>
        {successMessage()}
      {errorMessage()}
        {addBabyForm()}
        


    </Base>
  )
}
