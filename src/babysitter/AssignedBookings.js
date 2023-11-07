import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from "../core/Base";
import { getAssignedBookings } from './helper/babysitterapicalls';

export default function AssignedBookings() {
  const [bookings, setBookings] = useState([])
  const {user} = isAuthenticated()
  const [values, setValues] = useState({
    error: "",
    success: ""
  })
  const {error, success} = values
  const preload = () => {
    setValues({...values, success: "", error: ""})
    getAssignedBookings(user._id).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({...values, error: data.error})
      } else {
        console.log(data.bookings)
        setBookings(data.bookings);
        
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
    <Base title='Assigned Bookings'>
      {errorMessage()}

      <div className="row d-flex text-start">
      {bookings && bookings.map((booking,key) => {
        console.log(booking)
          return(
            <div key={key}  className="col-4 mb-4  ">
            <div className='card mb-4  'style={{border: "2px solid rgb(153 152 152)"}} >
             
            <ul className='list-group' >
            <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
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
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Payment Status :
                </span>
                &nbsp;
                {!booking.paymentStatus && (<span>Pending</span>)}
                {booking.paymentStatus && (<span className='text-success'>Paid</span>)}
              </li>
              
              <li className='list-group-item'>
              <Link to={"/baby/" + booking.babyId._id}>
                  <button  className="btn btn-success " style={{ borderRadius:"5px"}}>
                   View Baby profile
                  </button></Link>
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
