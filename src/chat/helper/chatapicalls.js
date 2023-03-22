import Conversation from "../conversations/Conversation"
import { API } from "../../backend";
export const getUserConversations = (userId, token) => {
    return fetch(`${API}/getUserConversations/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
}

export const createConversation = (members) => {
    return fetch(`${API}/createConversation`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(members)
    }).then(res => res.json())
    .catch(err => console.log(err))
}
export const createMessage = (message) => {
    return fetch(`${API}/createMessage`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    }).then(res => res.json())
    .catch(err => console.log(err))
}


export const getMessages = (conversationId) => {
    return fetch(`${API}/${conversationId}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}