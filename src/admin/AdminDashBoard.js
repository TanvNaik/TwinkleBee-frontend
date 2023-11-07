import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
const AdminDashBoard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();


  const adminLeftSide = () => {
    return (
      <div className='card text-start'>
        <h4 className='card-header text-start ' style={{fontSize: "1.2rem"}}> Admin Navigation </h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link to='/admin/babysitters' className='nav-link text-success'>
              Manage Babysitters
            </Link>
           
            <Link to='/admin/bookings' className='nav-link text-success'>
              Manage Bookings
            </Link>

            <Link to='/admin/payments' className='nav-link text-success'>
              Check Payments
            </Link>
            {/* <Link to='/admin/add-admin' className='nav-link text-success'>
              Add Admin
            </Link> */}


          </li>
        </ul>
      </div>
    );
  };
  const adminRightSide = () => {
    return (
      <div className='card text-start mb-4'>
        <h4 className='card-header'>Admin Information</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2'
            >
              Name:
            </span>
            &nbsp;
            {name}
          </li>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2 '
            >
              Email:
            </span>
            &nbsp;
            {email}
          </li>
          <li className='list-group-item'>
            <span className='badge bg-danger'>Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title='Welcome to Admin area '
      className='container bg-success p-4 mb-2'
    >
      <div className='row'>
        <div className='col-3'>{adminLeftSide()}</div>
        <div className='col-9'>{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
