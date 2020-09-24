import React from "react";
import { A } from "hookrouter";

function Footer() {
  return (
    <div className=" flex justify-between mt-20 w-auto pr-40 pl-40 pb-20 footer-styles ">
      <ul className=" flex container justify-between ">
        <div>
          <A href="">
            <li className=" p-2 "> FAQ</li>
          </A>
          <A href="">
            <li className="  p-2 "> Privacy</li>
          </A>
          <A href="">
            <li className="  p-2 "> About Us</li>
          </A>
          <A href="">
            <li className="  p-2 "> Speed Test</li>
          </A>
        </div>

        <div>
          <A href="">
            <li className="  p-2 "> Help Center</li>
          </A>
          <A href="">
            <li className="  p-2 "> Play Online</li>
          </A>
          <A href="">
            <li className="  p-2 "> Ways to play</li>
          </A>
          <A href="">
            <li className="  p-2 "> Cookie Preferences</li>
          </A>
        </div>

        <div>
          <A href="">
            <li className=" p-2 "> Account</li>
          </A>
          <A href="">
            <li className=" p-2 "> Legal Notices</li>
          </A>
          <A href="">
            <li className=" p-2 "> Contact Us</li>
          </A>
          <A href="">
            <li className=" p-2 "> Legal Notices</li>
          </A>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
