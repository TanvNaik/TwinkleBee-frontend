import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../core/Base'
import { addDoctorInfo } from '../parent/helper/parentapicalls'

export default function AddDoctor() {
  const {babyId} = useParams()


  const [values, setValues] = useState({
    name: "",
    gender: "",
    contact:"",
    contact1: "",
    contact2:"",
    address: "",
    error: "",
    success:""
  })
  const {name, gender, contact1, contact2, address, error, success} = values


  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(contact1.length != 10){
      return setValues({...values, error:[
        {
          param: "contact1",
          msg:"Enter valid mobile number"
        }
      ]})
    }
    let doctor = {
      name: values.name,
      gender: values.gender,
      contact1: values.contact1,
      contact2: values.contact2,
      address: values.address
    }
  
    addDoctorInfo(babyId, doctor).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, success: true })
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
            Doctor Details added successfully. 
          </div>
        </div>
      </div>
    );
  };

  
  const doctorForm = () =>{
    return(
      <form>
             <div className="d-flex justify-content-evenly align-items-center w-100 mt-4"  >
               <div className="w-50" >
                 <div className=" text-left">
                  {/* Name */}
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
                {/* Gender */}
                <div className="form-group">
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "gender") return err.msg;
                                  })}
                              </span>
                            </b><br/>
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
                  {/* Address */}
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
                    <label>Contact Number 1: </label>
                    <input
                      className="form-control"
                      type="text"
                      name="contact1"
                      id="contact1"
                      required={true}
                      
                      onChange={handleChange("contact1")}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "contact1") return err.msg;
                          })}
                      </span>{" "}
                    </b><br/>
                </div>            
                <div className="form-group">
                    <label>Contact Number 2: </label>
                    <input
                      className="form-control"
                      type="text"
                      name="contact2"
                      id="contact2"
                      required={true}
                      
                      onChange={handleChange("contact2")}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                        {error &&
                          error.map((err) => {
                            if (err.param === "contact2") return err.msg;
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
  return (
    <Base title='Enter Doctor Details'>
      {successMessage()}
      {doctorForm()}
    </Base>
  )
}
