import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBaby } from '../baby/helper/babyapicalls'
import Base from '../core/Base'

export default function ViewBaby() {
    const {babyId} = useParams()
    const[section, setSection] = useState("")
  
  const [error, setError] = useState("")
  const [baby, setBaby] = useState("")


  const changeSection = (e) => {
    if(e.target.id == "vaccination"){
      section === 'vaccination' ? setSection("") : setSection("vaccination") 
    }else{
      section === 'doctor' ? setSection("") : setSection("doctor") 
    }
  }

  useEffect(()=>{
    getBaby(babyId)
    .then(data => {
      if(data.error){
        setError(data.error)
      }else{
        setBaby(data.baby)
      }
    })
  }, [])

  const showVaccinations = () => {
    return (
      <div className="">
        <ul className="list-group pb-2">
        {baby.vaccination && baby.vaccination.map((vaccine,key) => {
          return(
            <li className="list-group-item">
              {vaccine}
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
  const showDoctors = () => {
    return (
      <div className="">
        <ul className="list-group pb-2">
          <li className="list-group-item">
          <ul className='list-group list-group-horizontal'>
              <li className="list-group-item w-25 text-success">Name</li>
              <li className="list-group-item w-25 text-success">Contact No. 1</li>
              <li className="list-group-item w-25 text-success">Contact No.2</li>
              <li className="list-group-item w-25 text-success">Address</li>
          </ul>
          </li>
        {baby.doctors && baby.doctors.map((doctor,key) => {
          return(
            <li className="list-group-item">
              <ul className='list-group list-group-horizontal'>
              <li className="list-group-item w-25">
              {doctor.name}
              </li>
              
              <li  className="list-group-item w-25">
              {doctor.contact1}
              </li>
              <li  className="list-group-item w-25">
              {doctor.contact2}
              </li>
              <li  className="list-group-item w-25">
              {doctor.address}
              </li>
              </ul>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
  const babysection1 = () => {
    return (
        <div className='card mb-4  '>
        <h4 className='card-header'>Baby Information</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2'
            >
              Name :            
            </span>&nbsp;&nbsp;
            {baby.name}
          </li>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2 '
            >
              Age :
            </span>
            &nbsp;&nbsp;
            {baby.age}
          </li>
          <li className='list-group-item'>
            
            <span
              className='badge bg-success 
               mr-2 '
            >
              Gender :
            </span>
            &nbsp;&nbsp;
            {baby.gender}
          </li>
          <li className='list-group-item'>
            <span
              className='badge bg-success 
               mr-2 '
            >
              Height :
            </span>
            &nbsp;&nbsp;
            {baby.height}
          </li>
          <li className='list-group-item'>
            
            <span
              className='badge bg-success 
               mr-2 '
            >
              Weight :
            </span>
            &nbsp;&nbsp;
            {baby.weight}
          </li>
          <li className='list-group-item'>
            
            <span
              className='badge bg-success 
               mr-2 '
            >
              
              Date of Birth :
            </span>
            &nbsp;&nbsp;
            {baby.dob && baby.dob.split('-')[2].split('T')[0] + "-" + baby.dob.split('-')[1] + "-" + baby.dob.split('-')[0]}          </li>
            <li className='list-group-item d-flex justify-content-between'>
              <div>
              <span
              className='badge bg-success 
               mr-2 '
            >
              Parent :
            </span>
            &nbsp;&nbsp;
            {baby.parent.name}
              </div>
            
            <div >
            <Link to={"/profile/" + baby.parent._id}>
              <button  className="btn btn-success" style={{  borderRadius:"5px"}}>
                 View Parent Profile
                </button>
                </Link>
            </div>
          </li>
          <li className='list-group-item d-flex justify-content-between'>
              <div>
              <span
              className='badge bg-success 
               mr-2 '
            >
              Babysitter Assigned :
            </span>
            &nbsp;&nbsp;
            {!baby.babysitter && (<span className='text-warning'>Pending</span>) }
            {
              baby.babysitter && (<span>{baby.babysitter.name}</span>)
            }
              </div>
            
            <div >
            
            {
              baby.babysitter && (<Link to={"/profile/" + baby.babysitter._id}>
              <button  className="btn btn-success" style={{  borderRadius:"5px"}}>
                 View Babysitter Profile
                </button>
                </Link>)
            }
            
            </div>
          </li>
          
          
          
        </ul>
      </div>
    )
  }

  const babyRightSide = () => {
    return (
      <div className="card w-100 h-75" >
        {baby.profile_pic && (
              <img width={"100%"} height={"100%"}
                src={`http://localhost:8800/image/${baby.profile_pic}`}
              />
            )}
      </div>
    )
  }
 

  const showInfo = () => {
    return (
      <div className=' d-flex w-100 justify-content-evenly align-items-center pb-2'>
        <div className='w-25'>
        <button  onClick={changeSection} id="vaccination"className="btn btn-success w-100 "style={{ borderRadius:"5px", marginRight: "1rem", background: "purple"}}>
               Vaccinations
              </button>
        </div>
        <div className='w-25'>
        <button onClick={changeSection} id="doctor" className="btn btn-success w-100 "  style={{ borderRadius:"5px", marginLeft: "1rem" , background: "purple"}}>
               Doctor's Contact Info
              </button>
        </div>
        
        
      </div>
    )
  }
  return (
    <Base title='' className='container bg-success p-4 pb-0'>
    {baby && (<div className='row d-flex justify-content-between '>
        <div className=' col-9 '>
       
          {babysection1()}

        </div>
        <div className='col-2 w-25 d-flex justify-content-center align-items-center'>{babyRightSide()}</div>
      
      </div>)}
    
    {baby && showInfo()}

    {section === "vaccination" && showVaccinations()}
    {section === "doctor" && showDoctors()}
    </Base>
  )
}
