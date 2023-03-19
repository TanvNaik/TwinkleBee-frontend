import React from "react";
import { isAuthenticated } from "../auth/helper";
import { Link, Navigate } from "react-router-dom";

import Base from "../core/Base";



const BabysitterDashboard = () => {
  const {
    user: { name, email, profile_pic, adhaarNumber, contactNumber,  role }
  } = isAuthenticated();

  const babysitterLeftSide = () => {
    return (
      <div className='card w-100 h-100'>
        <h4 className='card-header ' style={{fontSize: "1.2rem"}}> Babysitter Dashboard </h4>
        <ul className='list-group'>
          <li className='list-group-item'>
          <Link to={"../../update-profile"} className='nav-link ' style={{color: "#6C70FE"}}>
              Update Profile
            </Link>
            <Link to={"../../search"} className='nav-link ' style={{color: "#6C70FE"}}>
              Search Medicines
            </Link>
            <Link to={"../../feedbacks"} className='nav-link ' style={{color: "#6C70FE"}}>
              Feedbacks
            </Link>
            <Link to={"../../chat"} className='nav-link ' style={{color: "#6C70FE"}}>
              Chat
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const babysitterRightSide = () => {
    return (
      <div className='card mb-4 w-100 h-100'>
        <h4 className='card-header'>Profile</h4>
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
            <span
              className='badge bg-success 
               mr-2 '
            >
              Adhaar Number:
            </span>
            &nbsp;
            {adhaarNumber}
          </li>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2 '
            >
              Contact Number:
            </span>
            &nbsp;
            {contactNumber}
          </li>
          <li className='list-group-item'>
            <span className='badge bg-warning text-dark'>Babysitter Area</span>
          </li>
        </ul>
      </div>
    );
  };

  const babysitterProfilePic = () => {
    return(
      <div className='card  w-100 h-100' >
        {/* <h4 className='card-header'></h4> */}
        
      
            {profile_pic && (
              <img width={"100%"} 
                src={`http://localhost:8800/image/${profile_pic}`}
              />
            )}
            {!profile_pic && (
              <img src={`http://localhost:8800/image/default_female_pp.png`} />
            )}
        
        
      </div>
    )
    
  }
  return (
    <Base
      title='Welcome to Dashboard '
      className='container bg-success p-4 mb-2'
    >
      <div className='row '>
        <div className='col-3 d-flex justify-content-center align-items-center'>{babysitterLeftSide()}</div>
        <div className='col-6  '>{babysitterRightSide()}</div>
        <div className="col-3 d-flex justify-content-center align-items-center">{babysitterProfilePic()}</div>
      </div>
    </Base>
  );
};

export default BabysitterDashboard;

