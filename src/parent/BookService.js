import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { addBooking, getUserBabies } from './helper/parentapicalls'

export default function BookService() {
  const {user,token} = isAuthenticated()
  const [values, setValues] = useState({
    babyId: "",
    fees:"",
    duration:"",
    hoursperday: "",
    error: "",
    success: ""
  })
  const [babies, setBabies] = useState([])
  const {babyId, fees, duration, hoursperday,error,success} = values

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(babyId)

    addBooking(user._id,values)
    .then(data => {
      if(data.error){
        setValues({...values,error: data.error})
      }
      else{
        setValues({...values, success: true})
        alert("Form Submitted successfully!")
      }
    })
    
    
  };
  
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  useEffect(()=> {
    getUserBabies(user._id)
    .then((data) => {
      if(data.error){
        setValues({...values, error: data.error})
      }else{
        setBabies(data.babies)
      }
    })
  },[])

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >Booking Request was created successfully. Please wait until the admin approves
          </div>
        </div>
      </div>
    );
  };
  const calculateFees = (e) => {
    e.preventDefault()
    console.log(hoursperday)
    if(hoursperday === "" || hoursperday === 0 || !hoursperday){
      return setValues({...values, error: [{
        param: "hoursperday",
        msg: "Please mention Hours per day"
      }]})
    }
    if(duration === ""){
      return setValues({...values, error: [{
        param: "duration",
        msg: "Please mention duration"
      }]})
    }
    if(duration === "weekly"){
      let fee = hoursperday * 50 * 6;
      return setValues({...values, fees: fee})

    }else if(duration ==="monthly"){
      let fee = hoursperday * 50 * 26;
      return setValues({...values, fees: fee})

    }else if(duration === "yearly"){
      let fee = hoursperday * 50 * 313;
      return setValues({...values, fees: fee})

    }
  }


  const bookingForm = () => {
    return (
      <form>
             <div className="d-flex justify-content-evenly align-items-center w-100 mt-4"  >
               <div className="w-50" >
                 <div className=" text-left">
                  {/* Baby */}
                 <div className="form-group">
                 <label  >Baby: </label>&nbsp; &nbsp;
                 <select className='custom-select' onChange={handleChange("babyId")} classname="custom-select w-25 text-center  text-dark " style={{border: "1px solid black", borderRadius: "5px"}}name='babyId' >
                  {
                    babies && babies.map((baby, key) => {
                      return (
                        <option key={key} value={baby._id}>{baby.name}</option>
                      )
                    })
                  }
                  
                </select>
                      <br />
                    </div>
                </div>
                {/* Gender */}
                <div className="form-group">
                            <b>
                              <span className="errorMessage  alert-danger text-danger  alert-danger text-danger  alert-danger text-danger">
                                {error &&
                                  error.map((err) => {
                                    if (err.param === "duration") return err.msg;
                                  })}
                              </span>
                            </b><br/>
                            Duration:
                            <input
                              onChange={handleChange("duration")}
                              type="radio"
                              className="m-2"
                              name="duration"
                              value="weekly"
                            />
                            Weekly
                            <input
                              onChange={handleChange("duration")}
                              type="radio"
                              name="duration"
                              className="m-2"
                              value="monthly"
                            />
                            Monthly
                            <input
                              onChange={handleChange("duration")}
                              type="radio"
                              name="duration"
                              className="m-2"
                              value="yearly"
                            />
                            Yearly
                          </div><br/>
                
                <div className="form-group">
                    <label>Hours per day: </label>
                    <input
                      className="form-control"
                      type="number"
                      name="hoursperday"
                      id="hoursperday"
                      required={true}
                      
                      onChange={handleChange("hoursperday")}
                    />
                    
                    <b>
                      <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                      {error &&
                                  error.map((err) => {
                                    if (err.param === "hoursperday") return err.msg;
                                  })}
                      </span>{" "}
                    </b><br/><br/>
                </div>  
                <div className="form-group">
                    <label>Fees: &nbsp; </label>
                    <input
                      className="form-control d-inline w-75"
                      type="number"
                      name="fees"
                      id="fees"
                      value={fees}
                      disabled                      
                      onChange={handleChange("fees")}
                    /> &nbsp; &nbsp;
                    <button onClick={calculateFees} className='btn-success bg-warning text-dark'>Calculate Fees</button>

                  </div>          
                      
             
                </div>
            </div><br/>
            
            <div className="w-100 text-center">

            <button onClick={onSubmit} className="btn btn-success " style={{width: "8rem"}}>
                 Book
            </button>
            </div>
           
          </form>
    )
  }
  return (
    <Base title='Booking'>
      {successMessage()}
        {bookingForm()}
    </Base>
  )
}
