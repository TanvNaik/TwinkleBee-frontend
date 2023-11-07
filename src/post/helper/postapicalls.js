import { API } from "../../backend";

export const getPosts = () => {
    return fetch(`${API}/posts/all`,{
        method:"GET"
    }).then( response => 
        response.json())
    .catch( err => console.log(err))
}

export const addComment = (postId, userId, comment) => {
    return fetch(`${API}/comment/${postId}/${userId}`, {
        method: "PUT",
        body: comment
    }).then( response => 
        response.json())
    .catch( err => console.log(err))
}
export const likePost = (postId, userId)=>{
    return fetch(`${API}/like/${postId}/${userId}`,{
        method: "PUT"
    }).then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
}
export const createPost  = (userId, post) => {
    return fetch(`${API}/createPost/${userId}`,{
        method: "POST",
        body: post
    })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}