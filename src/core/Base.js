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
      <div className='contain-fluid title'>
        <div className=' jumbotron  text-center '>
          <h3 className='main-title'>{title}</h3>
          
        
        <div className={className} >{children}</div>
      </div></div>
      <div>
        
              
      <section className="2xl:w-max 2xl:mx-auto 2xl:mb-12 mb-12 ">
        <div className="p-4 lg:ml-4 xl:ml-32 2xl:ml-0 text-center">
          <h2 className="font-regular text-h2 text-grey-header leading-8 my-4">
            Focused on safety
          </h2>
          <p className="text-body mb-6 text-m md:text-m1 xl:max-w-5xl 2xl:max-w-max">
            Our dedicated team is working hard behind the scenes every day. For
            more information about our commitment to safety,{" "}
            <a
              className="link-secondary"
              href="https://www.sittercity.com/trust-and-safety"
            >
              Trust and Safety Center.
            </a>
          </p>
        </div>
        <div className="d-flex justify-content-evenly align-items-center">
          <div className="flex flex-col justify-center md:mr-16 xl:mr-24">
            <img
              className="m-auto w-14 h-14 md:w-16 md:h-16"
              alt=""
              loading="lazy"
              src="https://cdn.sittercity.com/c14eda457ba2f23c792f06ddf8fb18e520c349cf/packs/media/images/bg_check-ef415dde6e50d30818ea18ee4f184fff.svg"
            />
            <p className="text-center text-m lg:text-m1 md:text-body w-32 lg:w-full m-auto mt-2">
              Buy background checks
            </p>
          </div>
          <div className="flex flex-col justify-center md:mr-16 xl:mr-24">
            <img
              className="m-auto w-14 h-14 md:w-16 md:h-16"
              alt=""
              loading="lazy"
              src="https://cdn.sittercity.com/c14eda457ba2f23c792f06ddf8fb18e520c349cf/packs/media/images/id_verif-7fa55f0ccd898ab23e5ba817395930b5.svg"
            />
            <p className="text-center text-m lg:text-m1 md:text-body w-32 lg:w-full m-auto mt-2">
              Identity verification
            </p>
          </div>
          <div className="flex flex-col justify-center md:mr-16 xl:mr-24 mt-8 md:mt-0 mb-auto">
            <img
              className="m-auto w-16 h-16 md:w-20"
              alt=""
              loading="lazy"
              src="https://cdn.sittercity.com/c14eda457ba2f23c792f06ddf8fb18e520c349cf/packs/media/images/messaging-e86e58b0d1fab165d981fdd5688d6a51.svg"
            />
            <p className="text-center text-m lg:text-m1 md:text-body w-32 lg:w-full m-auto mt-2">
              Fraud prevention
            </p>
          </div>
          <div className="flex flex-col justify-center md:mr-16 xl:mr-24 mt-8 md:mt-0">
            <img
              className="m-auto w-14 h-14 mb-0 mt-2 md:w-20 md:h-16 md:mt-0"
              alt=""
              loading="lazy"
              src="https://cdn.sittercity.com/c14eda457ba2f23c792f06ddf8fb18e520c349cf/packs/media/images/tools-8b9a34e95fea59bf11234343bd27c34e.svg"
            />
            <p className="text-center text-m lg:text-m1 md:text-body w-max lg:w-full m-auto mt-2">
              Safety screenings
            </p>
          </div>
        </div>
      </section>
        <footer >
        <div className="container align-items-center w-100 footer-anchors">
          
          

          <hr/>

          <div className="row between-md lg-vertical-spacing ">
            <div className="col-xs-12 col-md-5 centered md-vertical-spacing">
              <h3 className="h5 xs-vertical-spacing">Resources</h3>
              <ul className="list-unstyled ">
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Affiliates
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Trust &amp; Safety Center
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a
                    className="link--secondary"
                    href="https://support.sittercity.com/hc/en-us/articles/360018694973-Sittercity-Community-Inclusion-Policy"
                  >
                    Community Inclusion Policy
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Resources for Parents
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="/sitters">
                    Resources for Sitters
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-md-5 centered md-vertical-spacing">
              <h3 className="h5 xs-vertical-spacing">
                Find Child, Pet, & Senior Care
              </h3>
              <ul className="list-unstyled ">
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Babysitters
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Nannies
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Child Care
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Special Needs Care
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Senior Care
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Pet Care
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-md-2 centered md-vertical-spacing">
              <h3 className="h5 xs-vertical-spacing">Find Jobs</h3>
              <ul className="list-unstyled ">
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Babysitting Jobs
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Nannying Jobs
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Child Care Jobs
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Special Needs Care Jobs
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Senior Care Jobs
                  </a>
                </li>
                <li className="xs-vertical-spacing">
                  <a className="link--secondary" href="#">
                    Pet Sitting Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr/>

          <ul className="d-flex d-flex-row justify-content-center w-100 nav  mt-4 mb-4">
            <li className="mx-2">
              <a
                rel="noopener"
                target="_blank"
                className="link--secondary"
                aria-label="Sittercity on Facebook"
                href="#"
              >
                <svg
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Sittercity on Facebook</title>
                  <path
                    fill="#4b4c52"
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                  />
                </svg>
              </a>{" "}
            </li>
            <li className="mx-2">
              <a
                rel="noopener"
                target="_blank"
                className="link--secondary"
                aria-label="Sittercity on Twitter"
                href="#"
              >
                <svg
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>TwinkleBee on Twitter</title>
                  <path
                    fill="#4b4c52"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>{" "}
            </li>
            <li className="mx-2">
              <a
                rel="noopener"
                target="_blank"
                className="link--secondary"
                aria-label="Sittercity on Instagram"
                href="#"
              >
                <svg
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Sittercity on Instagram</title>
                  <path
                    fill="#4b4c52"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>{" "}
            </li>

          </ul>

          <div className="md-vertical-spacing">
            <p className="copyright  sm:pb-1">
              © 2023 TwinkleBee Incorporated. All Rights Reserved.
            </p>
            <p className="copyright  sm:pb-1">
              By using this site you agree to the{" "}
              <a
                className="link-primary underline whitespace-nowrap"
                href="#"
              >
                Terms of Use
              </a>
              . See our{" "}
              <a
                className="link-primary underline whitespace-nowrap"
                href="#"
              >
                Privacy Policy
              </a>
              . Make updates to{" "}
              <a
                className="link-primary underline whitespace-nowrap"
                href="#"
              >
                Do Not Sell My Personal Information
              </a>
              .
            </p>
            <address className="copyright">
              If you are having difficulty using assistive technology with this
              website, please contact twinklebee Member Services
              <br /> by{" "}
              <a href="#" className="link--copy">
                phone at 888.748.2489
              </a>{" "}
              or by email at{" "}
              <a className="link--copy" href="mailto:support@twinklebee.com">
                support@twinklebee.com
              </a>{" "}
              .
            </address>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Base;
