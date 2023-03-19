// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import { isAuthenticated } from '../auth/helper';
// import Base from '../core/Base';
// import { getUser, updateUser } from './helper/userapicalls';
// import {signUpForm} from "./Signup";

// export default function UpdateProfile() {

//     const { user, token } = isAuthenticated();

//       const [values, setValues] = useState({
//         name: "",
//         username: "",
//         email: "",
//         occupation: "",
//         contactNumber: "",
//         pp: "",
//         password: "",
//         cfPassword: "",
//         error: [],
//         success: false,
//         formData: new FormData(),
//       });

//       const {
//         name,
//         username,
//         email,
//         occupation,
//         contactNumber,
//         pp,
//         password,
//         cfPassword,
//         error,
//         success,
//         formData,
//       } = values;

//       useEffect(()=>{
//         getUser(user._id, token)
//         .then(data=> {
//             console.log(data)
//             if(data.error){
//                 setValues({...values, error: data.error})
//             }else{
//                 let user = data.user
//                 setValues({...values,
//                 name: user.name,
//                 username: user.username,
//                 email: user.email,
//                 contact_number: user.contact_number
//             })
//             }
//         })
//     },[])
//       const successMessage = () => {
//         return (
//           <div className="row">
//             <div className="col-md-6 offset-sm-3 text-left">
//               <div
//                 className="alert alert-success"
//                 style={{ display: success ? "" : "none" }}
//               >
//                 Edited Successfully {
//                     user.role === "1" ? (
//                         <Link to="/babysitter/dashboard">Login Here</Link>
//                     ) : (
//                         <Link to="/parent/dashboard">Login Here</Link>
//                     )
//                 }
                
//               </div>
//             </div>
//           </div>
//         );
//       };

//       const onSubmit = (event) => {
//         event.preventDefault();
           
//         setValues({ ...values, error: "" });
//         // signup(formData).then((data) => {
//         //   if (data.error) {
//         //     console.log(data.error);
//         //     setValues({ ...values, error: data.error });
//         //   } else {
//         //     setValues({ ...values, success: true })
//         //     alert("Successfully Registered");
//         //   }
//         // });
//         updateUser(user._id, token, formData)
//         .then(data => {
//             if(data.error){
//                 setValues({...values, error: data.error})
//             }else{
//                 setValues({...values, success: true})
//                 alert("Profile Updated Successfully")
//             }
//         })
//       };


//       const handleChange = (name) => (event) => {
//         const value = name === "pp" ? event.target.files[0] : event.target.value;
    
//         formData.set(name, value);
//         setValues({ ...values, [name]: value });
//       };
    
//     const editForm = () => {
//         return (
//             <form>
//             <div className="d-flex justify-content-evenly w-100 mt-4"  >
//               <div className="w-25" >
//                 <div className=" text-left">
//                 <div className="form-group">
//                       <label  >Name:</label>
//                       <input
//                         className="form-control"
//                         onChange={handleChange("name")}
//                         type="text"
//                         value={name}
//                       />
//                       <b>
//                         <span className="errorMessage  alert-danger text-danger  ">
//                           {error &&
//                             error.slice(0, 10).map((err) => {
//                               if (err.param === "name")
//                                 return (
//                                   <>
//                                     {err.msg}
//                                     <br />
//                                   </>
//                                 );
//                             })}
//                         </span>{" "}
//                       </b>{" "}
//                       <br />
//                     </div>
//                 </div>
//                 <div className="form-group">
//                       <label  >Username:</label>
//                       <input
//                         className="form-control"
//                         onChange={handleChange("username")}
//                         type="text"
//                         value={username}
//                       />
                      
//                       <b>
//                         <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
//                           {error &&
//                             error.slice(0, 10).map((err) => {
//                               if (err.param === "username")
//                                 return (
//                                   <>
//                                     {err.msg}
//                                     <br />
//                                   </>
//                                 );
//                             })}
//                         </span>{" "}
//                       </b>{" "}
//                       <br />
//                     </div>
//                 <div className="form-group">
//                           <label  >Email:</label>
//                           <input
//                               className="form-control"
//                               onChange={handleChange("email")}
//                               type="email"
//                               value={email}
//                             />
//                             <br />
//                             <b>
//                               <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
//                                 {error &&
//                                   error.map((err) => {
//                                     if (err.param === "email") return err.msg;
//                                   })}
//                               </span>{" "}
//                             </b><br/>
//                           </div>
                    
                    
//               </div>

//               <div className="w-25">
//               <div className="form-group">
//                       <label  >Occupation:</label>
//                       <input
//                         className="form-control"
//                         onChange={handleChange("occupation")}
//                         type="text"
//                         value={occupation}
//                       />
//                     </div>
//                   <div className="form-group">
//                     <label  >Contact Number:</label>
//                     <input
//                       className="form-control"
//                       onChange={handleChange("contactNumber")}
//                       type="number"
//                       value={contactNumber}
//                     />
                    
//                     <b>
//                       <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
//                         {error &&
//                           error.map((err) => {
//                             if (err.param === "contactNumber") return err.msg;
//                           })}
//                       </span>{" "}
//                     </b><br/>
//                   </div>
//                  <div className="form-group">
//                     <label  >Password:</label>
//                     <input
//                       className="form-control"
//                       onChange={handleChange("password")}
//                       type="password"
//                       value={password}
//                     />
                    
//                     <b>
//                       <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
//                         {error &&
//                           error.slice(0, 10).map((err) => {
//                             if (err.param === "password")
//                               return (
//                                 <>
//                                   {err.msg}
//                                   <br />
//                                 </>
//                               );
//                           })}
//                       </span>{" "}
//                     </b><br/>
//                 </div>
//                 <div className="form-group">
//                     <label>Confirm Password:</label>
//                     <input
//                       className="form-control"
//                       onChange={handleChange("cfPassword")}
//                       type="password"
//                       value={cfPassword}
//                     />
                    
//                     <b>
//                       <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
//                         {error &&
//                           error.map((err) => {
//                             if (err.param === "cfPassword") return err.msg;
//                           })}
//                       </span>{" "}
//                     </b><br/>
//                 </div>
//                 <div className="form-group">
//                     <label  >Profile Pic:</label>
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="pp"
//                       id="pp"
//                       required={true}
//                       accept="image/*"
//                       onChange={handleChange("pp")}
//                     />
                    
//                     <b>
//                       <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
//                         {error &&
//                           error.map((err) => {
//                             if (err.param === "pp") return err.msg;
//                           })}
//                       </span>{" "}
//                     </b><br/>
//                 </div>            
//               </div>

//             </div><br/>
//             <div className="w-100 text-center">
//             <button onClick={onSubmit} className="btn btn-success " style={{width: "8rem"}}>
//                  Submit
//             </button>
//             </div>
            
//           </form>

//         )
//     }

//   return (
//     <Base title='Edit Profile'
//     className='container mt-4' >
//         {successMessage()}
//         {editForm()}
//     </Base>
//   )
// }
