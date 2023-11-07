import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../core/Base'
import StripeCheckout from '../core/StripeCheckout'
import { getBookingById } from './helper/parentapicalls'

export default function Payment() {
  const [values, setValues] = useState({
    booking: "",
    error: "",
    success: ""
  })
  const {booking, error, success} = values
  const {bookingId} = useParams()
  const preload = () => {
  getBookingById(bookingId)
  .then(data => {
      if(data.error){
          setValues({...values, error: data.error})
      }else{
        console.log(data.booking)
          setValues({...values, booking: data.booking})

        }
    })
  }
  useEffect(()=>{
    preload()       
  }, [])

  const showSummary = () => {
    return (
      <div className='card mb-4 w-100 h-100'>
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
              Duration :
            </span>
            &nbsp;
            {booking.duration}
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
            {/* Stripe Button */}
            <StripeCheckout
                        booking = {booking}
                        fee = {booking.fees}
                        
                     />
          </li>
          
          
        </ul>
      </div>
    )
  }  
  return (
    <Base title='Payment Summary'
    className='container  p-4 mb-2 mt-4'
    >
      {booking &&  (
        <div className='row d-flex  justify-content-center text-start'>
        <div className='col-6 d-flex justify-content-center align-items-center'>{showSummary()}</div>
       
      </div>
      )}
      
    </Base>
  )
}
