
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getUserBookings } from './helper/parentapicalls'

export default function WriteFeedback() {
  const [bookings, setBookings] = useState([])
  const {user} = isAuthenticated()
  const [values, setValues] = useState({
    error: "",
    success: ""
  })
  const {error, success} = values
  const preload = () => {
    setValues({...values, success: "", error: ""})
    getUserBookings(user._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBookings(data.bookings);
        console.log(bookings)
      }
    });
    
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

  useEffect(() => {
    preload();
  }, []);
  return (
    <Base title='All Your Bookings'>
      {errorMessage()}

      <div className="row d-flex text-start">
      {bookings && bookings.map((booking,key) => {
        console.log(booking)
          return(
            <div key={key}  className="col-4 mb-4  ">
            <div className='card mb-4 text-start  'style={{border: "2px solid rgb(153 152 152)"}} >
             
            <ul className='list-group' >
            <li className='list-group-item text-start'>
                <span
                  className='badge bg-warning text-dark
                   mr-2  tex'
                >
                  Baby:
                </span>
                &nbsp;
                {booking.babyId.name}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Duration :
                </span>
                &nbsp;
                {booking.duration}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Hours Per Day :
                </span>
                &nbsp;
                {booking.hoursperday}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Fees :
                </span>
                &nbsp;
                {booking.fees}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Approval Status :
                </span>
                &nbsp;
                {booking.status === "Rejected" && (<span className='text-danger'>Rejected</span>)}
                {booking.status !== "Rejected" && (<span >{booking.status}</span>)}
              </li>
              <li className='list-group-item'>
                <div className="d-flex justify-content-between">
                  <div>
                  <span
                  className='badge bg-warning text-dark
                   mr-2 '
                > Babysitter : 
                </span>
                &nbsp;
                {
                    booking.babysitterAssigned && (<span>{booking.babysitter.name}</span>)
                  }{
                    !booking.babysitterAssigned && (<span>Not Assigned</span>)
                  }
                  </div>
                  {
                    booking.babysitterAssigned && <div>
                    
                    <Link to={"/profile/" + booking.babysitter._id}>
                  <button  className="btn btn-success " style={{ borderRadius:"5px"}}>
                   Visit profile
                  </button></Link>
                    </div>
                  }
                  
                </div>
                  
              </li>
              <li className='list-group-item'>
                
                {!booking.paymentStatus && (<span>Pending</span>)}
                {booking.paymentStatus && (<Link to={"/feedback/" + booking._id}>
                <button  className="btn btn-success  " style={{ borderRadius:"5px"}}>
                   Feedback
                  </button>
                  </Link>)}
              </li>
              

              
            </ul>
          </div>
          </div>
          )
          
        })}
      </div>
    </Base>
  )
}
