import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Base from '../core/Base'
import { addBabyVaccination } from '../parent/helper/parentapicalls';


export default function AddVaccination() {
    const {babyId} = useParams()

    const [values, setValues] = useState({
        vaccine: "",
        error: "",
        success: ""
        })

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
      };
    const {vaccine, error, success} = values
    const [vaccinations, setVaccinations] = useState([])

    const addVaccination = () => {
        console.log(vaccine)
        setVaccinations([...vaccinations, vaccine ])
    }
    
    const saveVaccination = () => {
        
        addBabyVaccination(babyId,vaccinations)
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error});
            }else{
                setValues({...values, success: true})
                alert("Vaccine Details added successfully")
            }
        })
    }
    const clear = () => {
        setVaccinations([])
    }
  return (
    <Base title={"Add Vaccine Details"}>
        {/* --------------------Vaccination------------------------ */}
        <div className='d-flex flex-column justify-content-center align-items-center '>
                <div className="form-group w-100 align-items-center text-center">
                <br/>
                    
                    <input
                      className="form-control w-25 d-inline "
                      onChange={handleChange("vaccine")}
                      type="text"
                      value={vaccine}
                    />&nbsp; &nbsp;&nbsp; &nbsp;
                    <button onClick={addVaccination} className="btn btn-success " style={{width: "5rem", padding: "0"}}>
                 Add
            </button>&nbsp; &nbsp;&nbsp; &nbsp;
                    <button onClick={saveVaccination} className="btn btn-success " style={{width: "5rem", padding: "0"}}>
                 Save
            </button>
            &nbsp; &nbsp;&nbsp; &nbsp;
                    <button onClick={clear} className="btn btn-success " style={{width: "5rem", padding: "0"}}>
                 Clear
            </button>

                </div>
                {/* -----------------------Display Vaccination--------------------------- */}
                <div className='card w-50  mt-4 ' style={{minHeight: "40vh"}}>
        
                    <ul className='list-group'>
                    <li className='list-group-item'>
                    {vaccinations && vaccinations.map((vaccine, key)=> {
                                    return (
                                        <span key={key}>
                                            {vaccine}<br/>
                                        </span>
                                    )
                                })}
                    </li>
                    
                    </ul>
                </div>
                
        
        </div>
    </Base>
  )
}
