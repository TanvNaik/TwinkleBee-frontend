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
export const getUser = (findUser) =>{
    return fetch(`${API}/user/${findUser}`,{
        method: "GET"
    }).then( response => 
        response.json())
    .catch( err => console.log(err))
}