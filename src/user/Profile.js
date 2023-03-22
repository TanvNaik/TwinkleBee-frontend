import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "../core/Base";
import { getUser } from "./helper/userapicalls";
const Profile = () => {
  const {userId} = useParams()
  const [viewUser, setViewUser] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    getUser(userId)
    .then(data => {
      if(data.error){
        setError(data.error)
      }else{
        setViewUser(data.user)
      }
    })
  },[])


  const profileRightSide = () => {
    return (
      <div className='card mb-4 w-100 h-100 '>
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
            {viewUser.name}
          </li>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2 '
            >
              Email:
            </span>
            &nbsp;
            {viewUser.email}
          </li>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2 '
            >
              Adhaar Number:
            </span>
            &nbsp;
            {viewUser.adhaarNumber}
          </li>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2 '
            >
              Contact Number:
            </span>
            &nbsp;
            {viewUser.contactNumber}
          </li>
          <li className='list-group-item'>
            <span className='badge bg-warning text-dark'>{viewUser.role=== 1 && <span>Babysitter</span>}
            {viewUser.role=== 2 && <span>Parent</span>}
            </span>
          </li>
          <li className='list-group-item '>
          <Link to={"/chat/" + viewUser._id}>
              <button  className="btn btn-success w-25  " style={{ borderRadius:"5px"}}>
                 Chat
                </button>
                </Link>
          </li>
        </ul>
      </div>
    );
  };

  const ProfilePicside = () => {
    return(
      <div className='card  w-100 h-100' >
        {/* <h4 className='card-header'></h4> */}
        
      
            {viewUser.profile_pic && (
              <img width={"100%"} 
                src={`http://localhost:8800/image/${viewUser.profile_pic}`}
              />
            )}
            
        
      </div>
    )
    
  }
  return (
    <Base title='Profile' className='container bg-success p-4 mb-2'>
      <div className='row '>
      <div className='col-9  '>{profileRightSide()}</div>
        <div className="col-3 d-flex justify-content-center align-items-center">{ProfilePicside()}</div>
      </div>
    </Base>
  );
};

export default Profile;
