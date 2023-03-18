import React from "react";
import { isAuthenticated } from "../auth/helper";
import { Link, Navigate } from "react-router-dom";

import Base from "../core/Base";
const BabysitterDashboard = () => {
  const { user, token } = isAuthenticated();
  return (
    <Base title="Dash Board" description={"Welcome " + user.name}>
      <div className="d-flex flex-column">
        <div
          className="w-100 d-flex justify-content-evenly
"
        >
          <div className="w-25">
            {user.profile_pic && (
              <img
                width="60%"
                src={`http://localhost:8800/image/${user.profile_pic}`}
              />
            )}
            {!user.profile_pic && (
              <img src={`http://localhost:8800/image/default_female_pp.png`} />
            )}
          </div>

          <div className="w-75 fs-4">
            <span
              className="text-info
                "
            >
              Name:{" "}
            </span>
            <span>{user.name}</span>
            <br />
            <span
              className="text-info
                "
            >
              Username:{" "}
            </span>
            <span>{user.username}</span>
            <br />
            <span
              className="text-info
                "
            >
              Email-Id:{" "}
            </span>
            <span>{user.email}</span>
            <br />
            <span
              className="text-info
                "
            >
              Adhaar Number:{" "}
            </span>
            <span>{user.adhaarNumber}</span>
            <br />
            <span
              className="text-info
                "
            >
              Contact Number:{" "}
            </span>
            <span>{user.contactNumber}</span>
            <br />
            <span
              className="text-info
                "
            >
              Gender:{" "}
            </span>
            <span>{user.gender}</span>
            <br />
          </div>
        </div>
        <div className="w-100 m-0 justify-content-center align-items-center">
          <div className="d-flex  w-100 justify-content-evenly align-items-center">
            <Link to={"../../update-profile"}>
              <button className="btn-info  p-3 w-100">Update Profile</button>
            </Link>
            <Link to={"../../search"}>
              <button className="btn-info  p-3 w-100">Search Medicines</button>
            </Link>
            <Link to={"../../feedbacks"}>
              <button className="btn-info m-4 p-3 w-100">Feedbacks</button>
            </Link>
            <Link to={"../../chat"}>
              <button className="btn-info m-4 p-3 w-100">Chat</button>
            </Link>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default BabysitterDashboard;
