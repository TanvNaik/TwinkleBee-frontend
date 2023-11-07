import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getAllInvoices } from './helper/adminapicall'

export default function CheckPayments() {
  const [invoices, setInvoices] = useState([])
  const {user} = isAuthenticated()
  const [values, setValues] = useState({
    error: "",
    success: ""
  })
  const {error, success} = values
  const preload = () => {
    setValues({...values, success: "", error: ""})

    getAllInvoices(user._id).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setInvoices(data.invoices);
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
    <Base title='All Payments'>
      {errorMessage()}

      <div className="row d-flex text-start">
      {invoices && invoices.map((invoice,key) => {
        console.log(invoice)
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
                {invoice.babyId.name}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Parent :
                </span>
                &nbsp;
                {invoice.parent.name}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Fees :
                </span>
                &nbsp;
                {invoice.bookingId.fees}
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
