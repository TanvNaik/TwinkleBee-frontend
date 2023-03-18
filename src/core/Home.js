import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import { Link, Navigate } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const images = ['./undraw_baby_re_fr9r.svg','./undraw_children_re_c37f.svg','./undraw_motherhood_re_pk2m.svg', './undraw_toy_car_-7-umw.svg']

  return (
    <Base
      title="Twinkle Bee"
      description="Motherly care for you little ones 
    "
    >
      <div className=" d-flex  justify-content-center align-items-center">
        
        {images.map((product, index) => {
              return <div className="m-4">
                <img
                width="100%"
                src={product}
              /></div>;
            })}
        </div>
        <div className="w-100 m-0 justify-content-center align-items-center">
          <div className="d-flex  w-100 justify-content-evenly align-items-center">
            <Link to={"/signin"} className="w-25">
              <button className="btn-info  p-3 w-100">Sign In</button>
            </Link>
            <Link to={"/signup"} className="w-25">
              <button className="btn-info  p-3 w-100">Signup</button>
            </Link>
            
          </div>
        </div>
    </Base>
  );
};
export default Home;
