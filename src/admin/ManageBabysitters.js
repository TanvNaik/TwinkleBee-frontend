import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { deleteBabysitter, getAllBabysitters, verifyBabysitter } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";



//TODO: verify babysitter
//TODO: delete babysitter

const ManageBabysitters = () => {
  const [babysitters, setBabysitters] = useState([]);
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    error: "",
    success: ""
  })
  const {error, success} = values
  const preload = () => {
    setValues({...values, success: "", error: ""})
    getAllBabysitters().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBabysitters(data.babysitters);
      }
    });
    
  };


  const verifyBabysitterById = (e) => {
    verifyBabysitter( user._id, e.target.id)
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error})
        setTimeout( () => setValues({...values, success: "", error: ""}),1000)
      }else{
        setValues({...values, success: "Babysitter verification successful"})
        setTimeout( preload,1000)
      }
    })
  }

  const deleteBabysitterById = (e) =>{
    deleteBabysitter(user._id, e.target.id)
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error})
        setTimeout( () => setValues({...values, success: "", error: ""}),1000)
      }else{
        setValues({...values, success: "Babysitter deleted successfully"})
        setTimeout( preload,1000)
      }
    })
  }

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            {success}
          </div>
        </div>
      </div>
    );
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
    <Base title='Manage Babysitters here' >
      {successMessage()}
      {errorMessage()}
      <div className="row d-flex">
      
        {babysitters && babysitters.map((babysitter,key) => {
          return(
            <div key={key}  className="col-4 mb-4  ">
            <div className='card mb-4  'style={{border: "2px solid rgb(153 152 152)"}} >
             
            <ul className='list-group' >
            <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Name:
                </span>
                &nbsp;
                {babysitter.name}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Email:
                </span>
                &nbsp;
                {babysitter.email}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Gender :
                </span>
                &nbsp;
                {babysitter.gender}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Contact Number :
                </span>
                &nbsp;
                {babysitter.contactNumber}
              </li>
              {babysitter.verificationStatus === false && (
                <li className='list-group-item text-center'>
              
                  <button  onClick={verifyBabysitterById} className="btn btn-success w-50  " id={babysitter._id} style={{ borderRadius:"5px",  background: "green"}}>
                  Verify
                  </button>
                  
              
                </li>
              )}
              {babysitter.verificationStatus === true && (
                <li className='list-group-item text-center text-success '>
              <b>
              Verified
              </b>
                  
              
                </li>
              )}
              <li className='list-group-item d-flex w-100 justify-content-evenly'>
              <button onClick={deleteBabysitterById} className="btn btn-success  " id={babysitter._id} style={{ borderRadius:"5px", background: "red"}}>
                  Delete
                  </button>
             
                {/* TODO: */}
              <Link to={"/profile/" + babysitter._id}>
              <button  className="btn btn-success  " style={{ borderRadius:"5px"}}>
                 View Profile
                </button>
                </Link>
              </li>
              
            </ul>
          </div>
          </div>
          )
          
        })}
   
      </div>
      
    </Base>
  );
};

export default ManageBabysitters;
