/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Fragment>
      <footer id="sticky-footer" className="py-4 text-white">
        <div className="container text-center">
          <h5>2021 Copyright &copy; equalize.it</h5>
          <p>This application was developed in educational purposes</p>
        </div>
        <div className="container text-center">
          <div className="template">
            {" "}
            <button
              type="button"
              className="btn btn-social-icon btn-linkedin btn-rounded"
            >
              <a
                href="https://www.linkedin.com/in/adrian-karp/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </button>
            <button
              type="button"
              className="btn btn-social-icon btn-github btn-rounded"
            >
              <a
                href="https://github.com/adriankarp"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </button>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
