import React, { useState, useEffect } from "react";
import Base from "../core/Base.js";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index.js";
import { approveBooking, getAllBookings, rejectBooking } from "./helper/adminapicall.js";


const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    error: "",
    success: ""
  })
  const {error, success} = values
  const preload = () => {
    setValues({...values, success: "", error: ""})
    getAllBookings().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBookings(data.bookings);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const approveBookingbyId = (e) => {
    approveBooking(e.target.id, user._id)
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error})
        setTimeout( () => setValues({...values, success: "", error: ""}),1000)
      }else{
        setValues({...values, success: true})
        setTimeout( preload,1000)
      }
    })
  }
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Booking Updated Successfully
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
  const rejectBookingbyId = (e) =>{
    rejectBooking(e.target.id, user._id)
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error})
        setTimeout( () => setValues({...values, success: "", error: ""}),1000)
      }else{
        setValues({...values, success: true})
        setTimeout( preload,1000)
      }
    })
  }

  

  return (
    <Base title='Manage bookings here'>
      {successMessage()}
      {errorMessage()}
      <div className="row  text-start">
        {bookings && bookings.map((booking,key) => {
          return(
            <div key={key} className=' col-3 card mb-4 w-25 ' >
            
            <ul className='list-group' >
            <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Baby Name:
                </span>
                &nbsp;
                {booking.babyId.name}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Duration:
                </span>
                &nbsp;
                {booking.duration}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Hours Per Day:
                </span>
                &nbsp;
                {booking.hoursperday}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Fees
                </span>
                &nbsp;
                {booking.fees}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Status:
                </span>
                &nbsp;
                {booking.status === 'Approved'  && (<span className="text-success">Approved</span>)}
                {booking.status === 'Pending'  && (<span className="text-warning">Pending</span>)}
                {booking.status === 'Rejected'  && (<span className="text-danger">Rejected</span>)}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Payment Status:
                </span>
                &nbsp;
                {booking.paymentStatus === true  && (<span className="text-success">Paid</span>)}
                {booking.paymentStatus === false  && (<span className="text-danger">Pending</span>)}
              </li>
              {booking.status === "Pending" && (
                <li className='list-group-item text-center'>
              
              <button  onClick={approveBookingbyId} className="btn btn-success  " id={booking._id} style={{ borderRadius:"5px", marginRight: "1rem", background: "green"}}>
               Approve
              </button>
              <button onClick={rejectBookingbyId} className="btn btn-success " id={booking._id} style={{ borderRadius:"5px", marginLeft: "1rem" , background: "red"}}>
               Reject
              </button>
              
            </li>
              )} {
                (booking.status === "Approved" && !booking.babysitterAssigned)
                &&
                (<li className='list-group-item text-center'>
              
              <Link to={"/assign-babysitter/" + booking._id}>
              <button  className="btn btn-success " style={{width: "100%", borderRadius:"5px"}}>
                 Assign Babysitter
                </button>
                </Link>
                
                
              </li>)
              }
              {
                (booking.status === "Approved" && booking.babysitterAssigned) && (
                  <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Babysitter
                </span>
                &nbsp;
                {booking.babysitter.name}
              </li>
                )

              }
              <li className='list-group-item'>
              <Link to={"/baby/" + booking.babyId._id}>
              <button  className="btn btn-success " style={{width: "100%", borderRadius:"5px"}}>
                 View Baby Profile
                </button>
                </Link>
              </li>
              
            </ul>
          </div>
          )
          
        })}
      </div>
    </Base>
  );
};

export default ManageBookings;
