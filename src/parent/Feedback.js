import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getBookingById, writeFeedback } from './helper/parentapicalls'

export default function Feedback() {
    const [values, setValues] = useState({
        booking: "",
        feedbackText:"",
        rating: 0,
        error: "",
        success: ""
      })
      const {user} = isAuthenticated()
      const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
      const {booking, error, success, rating, feedbackText} = values
      const {bookingId} = useParams()
      const preload = () => {
        getBookingById(bookingId)
        .then(data => {
            if(data.error){
                setValues({...values, error: data.error})
            }else{
                setValues({...values, booking: data.booking})
      
              }
          })
        }
        useEffect(()=>{
          preload()       
        }, [])
        const writeBabysitterFeedback = () => {
            let feedback = {
                feedbackText: feedbackText,
                rating: rating,
                feedbacker: user._id,
                receiver: booking.babysitter._id
            }

            writeFeedback(booking.babysitter._id, user._id, feedback)
            .then(data => {
                if(data.error){
                return setValues({...values, error: data.error})
                }else{
                    return setValues({...values, success: true})
                }
            })

        }
        const showSummary = () => {
            return (
              <div className='card mb-4 w-100 h-100 text-start'>
                <h4 className='card-header'>Summary</h4>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <span
                      className='badge bg-success 
                       mr-2'
                    >
                      Booking for :
                    </span>
                    &nbsp;
                    {booking.babyId.name}
                  </li>
                  <li className='list-group-item'>
                    <span
                      className='badge bg-success 
                       mr-2'
                    >
                      Babysitter :
                    </span>
                    &nbsp;
                    {booking.babysitter.name}
                  </li>
                  <li className='list-group-item'>
                    <span
                      className='badge bg-success 
                       mr-2'
                    >
                      Hours Per Day :
                    </span>
                    &nbsp;
                    {booking.hoursperday}
                  </li>
                  <li className='list-group-item'>
                    <span
                      className='badge bg-success 
                       mr-2 '
                    >
                      Fees :
                    </span>
                    &nbsp;
                    {booking.fees}
                  </li>
                  <li  className='list-group-item text-center' style={{border:"none", paddingBottom:"0"}} >
                    
                  </li>
                  <li className='list-group-item text-center'>
                  <div className="form-group">
                      <label  >Feedback: </label>
                      <input
                        className="form-control"
                        onChange={handleChange("feedbackText")}
                        type="text"
                        value={feedbackText}
                      />
                      
                      <br />
                    </div>
          
                  </li >
                  <li className='list-group-item text-center'>
                  <div className="form-group">
                      <label>Rate out of 5: </label>
                      <input
                        className="form-control"
                        onChange={handleChange("rating")}
                        type="number"
                        max={5}
                        min={0}
                        value={rating}
                      />
                      
                      <br />
                    </div>
          
                  </li>
                  <li className='list-group-item text-center'>
                  <div className="form-group">
                  <div className="text-center">
            <button onClick={writeBabysitterFeedback} className="btn btn-success w-25 p-1"  >
               Submit
             </button>
            </div>
                      
                      <br />
                    </div>
          
                  </li>
                  
                </ul>
              </div>
            )
          }  
          const successMessage = () => {
            return (
              <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                  <div
                    className="alert alert-success"
                    style={{ display: success ? "" : "none" }}
                  >Feedback saved. Thank you!
                  </div>
                </div>
              </div>
            );
          };
  return (
    <Base title='Feedback'
    className='container  p-4 mb-2 mt-4'
    >
        {successMessage()}
      {booking &&  (
        <div className='row d-flex  justify-content-center'>
        <div className='col-6 d-flex justify-content-center align-items-center'>{showSummary()}</div>
       
      </div>
      )}
      
    </Base>
  )
}
