import React, { Fragment } from "react";
import { Link, Navigate , useLocation, useNavigate} from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper/index";

const Nav = ({  history }) =>{
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = (path) => {
    
    if (location ? location.pathname === path : false) {
      return { color: "#99005C" };
    } else {
      return { color: "#000000" };
    }
  };
  return (
    <div className="d-flex justify-content-between">
      <div className="">
      <h3 className="pl-2 main-title"><b>
        TwinkleBee</b></h3>

      </div>
      <div>
      <ul className='nav nav-tabs justify-content-end ' style={{fontSize:" 1rem"}}>
        <li className='nav-item'>
          <Link style={currentTab("/")} className='nav-link ' to='/'>
            Home
          </Link>
        </li>
        
        {isAuthenticated()  && (
          <li className='nav-item'>
            <Link
              style={currentTab("/user/dashboard")}
              className='nav-link '
              to='/view-posts'
            >
              Feed
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 0  && (
          <li className='nav-item'>
            <Link
              style={currentTab("/user/dashboard")}
              className='nav-link '
              to='/admin/dashboard'
            >
              Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className='nav-item'>
            <Link
              style={currentTab("/babysitter/dashboard")}
              className='nav-link '
              to='/babysitter/dashboard'
            >
              Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 2 && (
          <li className='nav-item'>
            <Link
              style={currentTab("/parent/dashboard")}
              className='nav-link '
              to='/parent/dashboard'
            >
              Dashboard
            </Link>
          </li>
        )}
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
            <Link
                style={currentTab("/chat")}
                className='nav-link '
                to='/chat'
              >
                Chat
              </Link>
          </li>
        )}
        <li className='nav-item'>
              <Link
                style={currentTab("/contact-us")}
                className='nav-link '
                to='/contact-us'
              >
                Contact Us
              </Link>
        </li>
            

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
      
    </div>
  );
} 
export default Nav;
