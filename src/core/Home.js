import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  return (
    <Base
      title=""
      description="Motherly care for you little ones 
    "
    >
      {/* <h4 className="text-center">Just as good as Mom.</h4> */}
      <div className=" d-flex w-100   justify-content-between  section1">
        <div
          className="my-auto max-w-3xl w-full blub relative ml-10 w-50 "
          style={{ marginLeft: "15%" }}
        >
          <div className="">
            <div className=" text-start">
              <h1 className="text-start font-semibold md:text-left ">
                Be back-to- <br />
                school ready
              </h1>
              <p className="introduction__copy mt-4 mr-auto max-w-xs xl:max-w-md md:text-left ml-0 text-lead">
                Because your kid’s schedule is as busy as yours
              </p>
            </div>
            <div className="introduction__actions flex flex-col md:flex-row items-start mt-6 lg:mt-8 text-start">
              <Link className="btn btn-success " to="/signup">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide w-50 "
          data-bs-ride="carousel"
          style={{ maxWidth: "70%", widt: "40%", marginRight:"5%" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/img1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/img2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/img3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center section2">
        <section>
          <div className="container text-center">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              <div className="col">
                <div className="p-3">
                  <div
                    className="card text-center align-items-center pt-2"
                    style={{ width: "15rem" }}
                  >
                    <img src="./images/abc.png" alt="" width={"30%"} />
                    <div className="card-body">
                      <p className="card-text">
                        <h5>
                          <b>Babysitter</b>
                        </h5>
                        Occasional help with last-minute needs, date night, and
                        more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <div
                    className="card text-center align-items-center pt-2"
                    style={{ width: "15rem" }}
                  >
                    <img src="./images/nanny.png" alt="" width={"40%"} />
                    <div className="card-body">
                      <p className="card-text">
                        <h5>
                          <b>Nanny</b>
                        </h5>
                        Regular support for after-school, weekdays, and weekends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <div
                    className="card text-center align-items-center pt-2"
                    style={{ width: "15rem" }}
                  >
                    <img src="./images/hand.png" alt="" width={"40%"} />
                    <div className="card-body">
                      <p className="card-text">
                        <h5>
                          <b>Special Needs</b>
                        </h5>
                        Specialized care to meet the individual needs of your
                        child
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <div
                    className="card text-center align-items-center pt-2"
                    style={{ width: "15rem" }}
                  >
                    <img src="./images/book.png" alt="" width={"40%"} />
                    <div className="card-body">
                      <p className="card-text">
                        <h5>
                          <b>Tutoring</b>
                        </h5>
                        Educational care in subjects like math, Spanish, and
                        reading
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      
    </Base>
  );
};
export default Home;
