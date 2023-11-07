import React from 'react'
import Base from './Base'

export default function ContactUs() {
  return (
    <Base title={"Contact us"} className={"text-center"}>
      For any query Connect with us throught email or phone call <br></br>
      Email Id :
      <ul className="list-group">
        <li className="list-group-item">
          twinklebee@gamil.com

        </li>
        <li className="list-group-item">
          naiktanvi30@gamil.com

        </li>
      
      </ul>
      Phone Numbers :
      <ul className="list-group">
        <li className="list-group-item">
          78469512

        </li>
        <li className="list-group-item">
          597216488

        </li>
      
      </ul>
      
    </Base>
  )
}
