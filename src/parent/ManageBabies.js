import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getUserBabies } from './helper/parentapicalls'

export default function ManageBabies() {
  const{user} = isAuthenticated()
  const [values, setValues] = useState({
    error: "",
    success: ""
  })
  const [babies, setBabies] = useState([])

  useEffect(()=> {
    getUserBabies(user._id)
    .then((data) => {
      if(data.error){
        setValues({...values, error: data.error})
      }else{
        setBabies(data.babies)
      }
    })
  },[])

  return (
    <Base title='Babies'>

      <div className="row d-flex text-start ">
        {babies && babies.map((baby,key) => {
          return(
            <div key={key}className="col-4 mb-4  ">
            <div  className='card mb-4 '>
            <h5 className='card-header'>{baby.name}</h5>
            <ul className='list-group'>
              
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Age:
                </span>
                &nbsp;
                {baby.age}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Gender:
                </span>
                &nbsp;
                {baby.gender}
              </li>
              <li className='list-group-item'>
                <span
                  className='badge bg-warning text-dark
                   mr-2 '
                >
                  Date of birth:
                </span>
                &nbsp;
                {baby.dob && baby.dob.split('-')[2].split('T')[0] + "-" + baby.dob.split('-')[1] + "-" + baby.dob.split('-')[0]}
            
              </li>
              <li className='list-group-item d-flex w-100 justify-content-evenly'>
              <Link to={"/" + baby._id + "/vaccine"} >
                <button  className="btn btn-success " style={{ borderRadius:"5px"}}>
                 Add Vaccination Details
                </button></Link>
                
              
              <Link to={"/" + baby._id + "/doctor"}>
                <button  className="btn btn-success " style={{ borderRadius:"5px"}}>
                 Add Doctor Info
                </button></Link>
                
              </li>
              <li className='list-group-item'>
              <Link to={"/baby/" + baby._id}>
                <button  className="btn btn-success " style={{width: "100%", borderRadius:"5px"}}>
                View Profile
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
