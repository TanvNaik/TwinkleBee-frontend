import React, { useState } from 'react'
import { isAuthenticated } from '../auth/helper'
import StripeCheckoutButton from 'react-stripe-checkout'
import { createInvoice } from '../parent/helper/parentapicalls'

import { API } from "../backend";

const StripeCheckout = ({booking, fee}) =>  {
    const [values, setValues] = useState({
        error: "",
        paymentStatus: "",
        booking: ""
    })
    const {
        paymentStatus, error
    } = values
    const {user} = isAuthenticated()

    const userId =user._id

    const makePayment = (token) => {
       
        const body = {
            token,
            fee,
            email: user.email
        }
        const headers = {
            'Content-Type': "application/json"
        }
        return fetch(`${API}/stripepayment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then( response =>{
            const {status} = response
            
            if(status === 200){
                let body = {
                    babyId: booking.babyId._id,
                    booking: booking._id,
                    invoiceAmount: fee,
                    parent: userId
                }
                createInvoice(body, userId, booking._id, isAuthenticated().token).then(data => {
                    if(data.error){
                        setValues({...values, error: data.error})
                    }
                    else{
                        console.log(data)
                        setValues({...values, paymentStatus: status})
                    }
                })
            }
           

        }).catch(err => console.log(err))
        
    }
    const showStripeButton = () => {
        return (
            <StripeCheckoutButton
                stripeKey= {process.env.REACT_APP_STRIPE_KEY}
                token={makePayment}
                amount= {fee * 100}
                name='Pay for Ride'
            >
                <button className=' btn-success'>Pay with stripe</button>
            </StripeCheckoutButton>)
        
        
    }
    
    return (
        <div>
     
            {(paymentStatus === 200) && 
                    (
                        <b><div className='text-success' >Payment Successfull</div>
                            </b>
                    )
                }
            {(paymentStatus !== 200) &&(
                        <div>
                            {showStripeButton()}
                        </div>
                    )
            }
            
        </div>
    )
}

export default StripeCheckout
