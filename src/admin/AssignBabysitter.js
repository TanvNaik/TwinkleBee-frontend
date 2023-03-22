import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "../core/Base";
import { getBookingById } from "../parent/helper/parentapicalls";
import { assignBabysitter, getAllBabysitters } from "./helper/adminapicall";

export default function () {
  const { bookingId } = useParams();
  const [values, setValues] = useState({
    booking: "",
    babysitter: "",
    error: "",
    success: "",
  });
  const [babysitters, setBabysitters] = useState([]);
  const { booking, error, success, babysitter } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const preload = () => {
    getBookingById(bookingId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        console.log(data.booking);
        setValues({ ...values, booking: data.booking });
      }
    });
    getAllBabysitters().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        console.log(data.babysitters);
        setBabysitters(data.babysitters);
      }
    });
  };
  const assign = () => {
    assignBabysitter(babysitter, bookingId).then(data => {
        if(data,error) {
            return setValues({...values, error: data.error})
        }else{
            return setValues({...values, success: true})
        }
    }
    )
  }
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
           Babysitter is assigned succesfully
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
                  <div className="errorMessage  alert-danger text-danger">
                    <h2 style={{ fontSize: "1.2rem" }}>{error}</h2>
                  </div>
                
            }
          
        </div>
      </div>
    );
  };
  useEffect(() => {
    preload();
  }, []);
  const showSummary = () => {
    return (
      <div className="card mb-4 w-100 h-100">
        <h4 className="card-header">Summary</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span
              className="badge bg-success 
                       mr-2"
            >
              Booking for :
            </span>
            &nbsp;
            {booking.babyId.name}
          </li>
          <li className="list-group-item">
            <span
              className="badge bg-success 
                       mr-2"
            >
              Duration :
            </span>
            &nbsp;
            {booking.duration}
          </li>
          <li className="list-group-item">
            <span
              className="badge bg-success 
                       mr-2"
            >
              Hours Per Day :
            </span>
            &nbsp;
            {booking.hoursperday}
          </li>
          <li className="list-group-item">
            <span
              className="badge bg-success 
                       mr-2 "
            >
              Fees :
            </span>
            &nbsp;
            {booking.fees}
          </li>
          <li className="list-group-item">
            <div className="form-group">
              <label>Baby: </label>&nbsp; &nbsp;
              <select
                className="custom-select"
                onChange={handleChange("babysitter")}
                classname="custom-select w-25 text-center  text-dark "
                style={{ border: "1px solid black", borderRadius: "5px" }}
                name="babysitter"
              >
                {babysitters &&
                  babysitters.map((babysitter, key) => {
                    return (
                      <option key={key} value={babysitter._id}>
                        {babysitter.name}
                      </option>
                    );
                  })}
              </select>
              <br />
            </div>
          </li>

          <li className="list-group-item text-center">
            
              <button
                className="btn btn-success "
                style={{ width: "100%", borderRadius: "5px" }} onClick={assign}
              >
                Assign Babysitter
              </button>
           
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base title="Assign Babysitter" className="container  p-4 mb-2 mt-4">
        {errorMessage()}
        {successMessage()}
      {booking && (
        <div className="row d-flex  justify-content-center">
          <div className="col-6 d-flex justify-content-center align-items-center">
            {showSummary()}
          </div>
        </div>
      )}
    </Base>
  );
}
