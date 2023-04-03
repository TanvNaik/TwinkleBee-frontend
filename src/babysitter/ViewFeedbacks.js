import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getFeedbacks } from './helper/babysitterapicalls';

export default function ViewFeedbacks() {

    const [error, setError] = useState("")
    // const {user, token} = isAuthenticated();
    const [feedbacks, setFeedbacks] = useState([]);
    const {babysitterId} = useParams()
    
    useEffect(()=>{
        getFeedbacks(babysitterId)
        .then(data => {
            if(data.error){
              setError(data.error)
            }else{
                setFeedbacks(data.feedbacks)
            }
        })
    },[])


  return (
    <Base title={"Feedbacks"}>
      <div className="row d-flex ">

       
        {feedbacks && feedbacks.map((feedback,key) => {
          return(
            <div className="col-4 mb-4">
              <div className='  card w-75'>
              <h4 className='card-header ' style={{fontSize: "1rem"}}>{feedback.feedbacker.name} </h4>
              <ul className='list-group'>
                <li className='list-group-item'>
                {[...Array(feedback.rating)].map((e, i) => {
                    return <span  style={{color: "yellow", fontSize: "1.3rem"}} key={i} classname="star">★</span>
                })}
                <br/>
                {feedback.feedbackText}
                </li>
                
              </ul>
            </div>
            </div>
            
          )
          
        })}
        
      </div>
      {feedbacks.length === 0 && (
          <div className='w-100 text-danger alert-warning text-center' style={{fontSize: "1.2rem"}}>
              No Feedbacks Received
          </div>
        )}
        
    </Base>
  )
}
