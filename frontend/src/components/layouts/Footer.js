import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=" flex justify-between mt-20 w-auto pr-40 pl-40 pb-20 footer-styles ">
      <ul className=" flex container justify-between ">
        <div>
          <Link to="#">
            <li className=" p-2 "> FAQ</li>
          </Link>
          <Link to="#">
            <li className="  p-2 "> Privacy</li>
          </Link>
          <Link to="#">
            <li className="  p-2 "> About Us</li>
          </Link>
          <Link to="#">
            <li className="  p-2 "> Speed Test</li>
          </Link>
        </div>

        <div>
          <Link to="#">
            <li className="  p-2 "> Help Center</li>
          </Link>
          <Link to="#">
            <li className="  p-2 "> Play Online</li>
          </Link>
          <Link to="#">
            <li className="  p-2 "> Ways to play</li>
          </Link>
          <Link to="#">
            <li className="  p-2 "> Cookie Preferences</li>
          </Link>
        </div>

        <div>
          <Link to="#">
            <li className=" p-2 "> Account</li>
          </Link>
          <Link to="#">
            <li className=" p-2 "> Legal Notices</li>
          </Link>
          <Link to="#">
            <li className=" p-2 "> Contact Us</li>
          </Link>
          <Link to="#">
            <li className=" p-2 "> Legal Notices</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
