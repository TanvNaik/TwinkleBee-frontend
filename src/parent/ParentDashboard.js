import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const ParentDashboard = () => {
  const {
    user: { name, email, profile_pic, adhaarNumber, contactNumber,  role }
  } = isAuthenticated();

  const parentLeftSide = () => {
    return (
      <div className='card w-100 h-100'>
        <h4 className='card-header ' style={{fontSize: "1.2rem"}}> Parent Dashboard </h4>
        <ul className='list-group'>
          <li className='list-group-item'>
          <Link to={"../../update-profile"} className='nav-link ' style={{color: "#6C70FE"}}>
              Update Profile
            </Link>
            <Link to={"../../search"} className='nav-link ' style={{color: "#6C70FE"}}>
              Search Medicines
            </Link>
            <Link to={"../../chat"} className='nav-link ' style={{color: "#6C70FE"}}>
              Chat
            </Link>
            <Link to={"../../add-baby"} className='nav-link ' style={{color: "#6C70FE"}}>
              Add a Baby Profile
            </Link>
            <Link to={"../../manage-babies"} className='nav-link ' style={{color: "#6C70FE"}}>
              Manage Babies
            </Link>
            <Link to={"../../booking"} className='nav-link ' style={{color: "#6C70FE"}}>
              Book a Service
            </Link>
            <Link to={"../../bookings/view"} className='nav-link ' style={{color: "#6C70FE"}}>
              View Bookings
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const parentRightSide = () => {
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
            <span className='badge bg-warning text-dark'>Parent Area</span>
          </li>
        </ul>
      </div>
    );
  };

  const parentProfilePic = () => {
    return(
      <div className='card  w-100 h-100' >
   
        
            
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
      className='container bg-success p-4 mb-2 mt-4'
    >
      <div className='row '>
        <div className='col-3 d-flex justify-content-center align-items-center'>{parentLeftSide()}</div>
        <div className='col-6  '>{parentRightSide()}</div>
        <div className="col-3 d-flex justify-content-center align-items-center">{parentProfilePic()}</div>
      </div>
    </Base>
  );
};

export default ParentDashboard;
