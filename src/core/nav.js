import React, { Fragment } from "react";
import { Link, Navigate , useLocation, useNavigate} from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper/index";

const Nav = ({  history }) =>{
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = (path) => {
    
    if (location ? location.pathname === path : false) {
      return { color: "#6C63FF" };
    } else {
      return { color: "#000000" };
    }
  };
  return (
    <div>
      <ul className='nav nav-tabs justify-content-end ' style={{"font-size":" 1rem"}}>
        <li className='nav-item'>
          <Link style={currentTab("/")} className='nav-link ' to='/'>
            Home
          </Link>
        </li>
        
        {/* {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className='nav-item'>
            <Link
              style={currentTab("/user/dashboard")}
              className='nav-link '
              to='/user/dashboard'
            >
              Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className='nav-item'>
            <Link
              style={currentTab("/admin/dashboard")}
              className='nav-link '
              to='/admin/dashboard'
            >
              Dashboard
            </Link>
          </li>
        )} */}
        {!isAuthenticated() && (
          <Fragment>
            <li className='nav-item'>
              <Link
                style={currentTab("/signup")}
                className='nav-link '
                to='/signup'
              >
                Signup
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                style={currentTab("/signin")}
                className='nav-link '
                to='/signin'
              >
                Sign In
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <li className='nav-item'>
            <span
              className='nav-link text-danger'
              onClick={() => {
                signout(() => {
                  navigate("/")
                });
                
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
} 
export default Nav;
