import { API } from "../../backend";


export const updateUser = (userId, token, userobj) =>{
    return fetch(`${API}/user/${userId}`, {
        method: "PUT",
        headers:{
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body:  JSON.stringify(userobj)
    })
}
export const getUser = (findUser, token,userId) =>{
    return fetch(`${API}/user/${userId}/${findUser}`,{
        method: "GET",
        headers: {
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
    }).then( response => 
        console.log(response.json()))
    .catch( err => console.log(err))
}