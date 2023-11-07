import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createPost } from "./helper/postapicalls";

export default function AddPost() {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    caption: "",
    image: "",
    babysitterId: "",
    success: "",
    error: "",
    formData: new FormData(),
  });
  const { caption, image, babysitterId, success, error, formData } = values;

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, babysitterId: user._id });
    console.log(values)
    setValues({ ...values, error: "" });

    createPost(user._id, formData).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, success: true });

        alert("Successfully added");
      }
    });
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Posted Successfully
          </div>
        </div>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          {error &&
            error.map((err, key) => {
              if (err.param == "general")
                return (
                  <div
                    key={key}
                    className="errorMessage  alert-danger text-danger"
                  >
                    <h2 style={{ fontSize: "1.2rem" }}>{err.msg}</h2>
                  </div>
                );
            })}
        </div>
      </div>
    );
  };
  const addPostForm = () => {
    return (
      <form>
        <div className="d-flex justify-content-evenly w-100 mt-4">
          <div className="w-25">
            <div className=" text-left">
              <div className="form-group">
                <label>Caption:</label>
                <input
                  className="form-control"
                  onChange={handleChange("caption")}
                  type="text"
                  value={caption}
                />
                <b>
                  <span className="errorMessage  alert-danger text-danger  ">
                    {error &&
                      error.slice(0, 10).map((err) => {
                        if (err.param === "name")
                          return (
                            <>
                              {err.msg}
                              <br />
                            </>
                          );
                      })}
                  </span>{" "}
                </b>{" "}
                <br />
              </div>
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                className="form-control"
                type="file"
                name="image"
                id="image"
                required={true}
                accept="image/*"
                onChange={handleChange("image")}
              />

              <b>
                <span className="errorMessage  alert-danger text-danger  alert-danger text-danger">
                  {error &&
                    error.map((err) => {
                      if (err.param === "pp") return err.msg;
                    })}
                </span>{" "}
              </b>
              <br />
            </div>
          </div>
        </div>
        <br />

        <div className="w-100 text-center">
          <button
            onClick={onSubmit}
            className="btn btn-success "
            style={{ width: "8rem" }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  };
  return (
    <Base title={"Post"}>
      {successMessage()}
      {errorMessage()}
      {addPostForm()}
    </Base>
  );
}
