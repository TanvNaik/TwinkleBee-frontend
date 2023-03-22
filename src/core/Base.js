import React from "react";
import Nav from "./nav";
const Base = ({
  title = "My Title",
  className = " p-4",
  children
}) => {
  return (
    <div>
      <Nav></Nav>
      <div className='contain-fluid mt-2 title'>
        <div className=' jumbotron  text-center'>
          <h3 className=''>{title}</h3>
          
        </div>
        <div className={className}>{children}</div>
      </div>
      <div>
        {/* <footer className='footer position-absolute bottom-0 end-0 w-100 bg-dark mt-auto py-3 '>
          <div className='container-fluid bg-success text-white text-center py-6 pt-2 pb-2'>
            <h6>If you got any questions, feel free to reach out!
            <a className='text-white '>Contact Us</a></h6>
          </div>
          
        </footer> */}
      </div>
    </div>
  );
};

export default Base;
