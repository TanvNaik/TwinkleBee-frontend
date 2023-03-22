import { API } from "../../backend";


export const getBaby = (babyId) => {
    return fetch(`${API}/baby/${babyId}`,{
        method: "GET"
    }).then(res => res.json())
    .catch(err => console.log(err))
}