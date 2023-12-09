import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { getPosts, likePost } from "./helper/postapicalls";

export default function ViewPosts() {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState({
    text: "",
    commenter: "",
  });
  const [values, setValues] = useState({
    error: "",
    success: "",
  });
  const { error, success } = values;
  const { user, token } = isAuthenticated();
  const addLike = (e) => {
    console.log(e.target)
    likePost(e.target.id, user._id)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, success: "Liked the post" });
          preload();
        }
      })
      .catch(() => console.log("Unable to like the post"));
  };
  const postComment = () => {
    setComment({ ...comment, commenter: user._id });
  };

  const preload = () => {
    setValues({ ...values, success: "", error: "" });
    getPosts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data.posts);
      }
    });
  };
  // useEffect(() => {
  //   preload();
  // }, []);
  return (
    <Base title="">
      <div className="row d-flex">

        <h3>Under progress...</h3>
        {posts.length > 0 &&
          posts.map((post, key) => {
            return (
              <div key={key} className="col-4 mb-4 ">
                <div
                  className="card mb-4  "
                  style={{ border: "2px solid rgb(153 152 152)" }}
                >
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span
                        className="badge bg-warning text-dark
                 mr-2  text-center"
                      >
                        {post.babysitterId.name}
                      </span>
                      &nbsp;
                      {post.caption}
                    </li>

                    <li className="list-group-item text-center ">
                      {post.image && (
                        <img
                          width={"300px"}
                          height={"300px"}
                          src={`http://localhost:8800/posts/${post.image}`}
                        />
                      )}
                    </li>
                    {/* LIKES */}
                    <li className="list-group-item w-100  ">
                      
                      {/* COMMENT */}
                      {/* <input type="text" name='comment' id={post._id} placeholder='Write a comment' className='form-control w-75 d-inline' /> */}

                      <div className="input-group mb-3">
                        <div className="input-group-prepend" style={{width:"10%"}}>
                        {post.likes.includes(user._id) && (
                        //Already Liked the post
                        <button
                            className="btn "
                            type="button"
                            id={post._id}
                          >
                            <img src="heart-filled.png" className="d-inline" alt="" width={"120%"} />
                          </button>
                      )}
                      {!post.likes.includes(user._id) && (<button
                            className="btn "
                            type="button"
                            onClick={addLike}
                            id={post._id}
                          >
                            <img id={post._id} src="heart.png" className="d-inline" alt="" width={"120%"} />
                          </button>)}
                          
                        </div>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Write a comment..."
                          aria-label="Write a comment..."
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            Post
                          </button>
                        </div>
                      </div>
                      {/* <div className="d-inline-flex  text-center justify-content-center " style={{width: "10%"}}>
            <button  className="btn btn-success " style={{ borderRadius:"5px"}}>
               comment
              </button>
            </div>
             */}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </Base>
  );
}
