import { API } from "../../backend";


export const getFeedbacks = (userId) =>{
    return fetch(`${API}/feedbacks/user/${userId}`,{
        method: "GET"
    }).then( response =>  response.json())
    .catch( err => console.log(err))
}
export const getAssignedBookings =(userId) => {
    return fetch(`${API}/${userId}/get-assigned-bookings`,{
      method: "GET"
    }
   ).then(response => response.json())
   .catch(err => console.log(err))
  }