import { API } from "../../backend";


export const getFeedbacks = (userId) =>{
    return fetch(`${API}/feedbacks/user/${userId}`,{
        method: "GET"
    }).then( response =>  response.json())
    .catch( err => console.log(err))
}