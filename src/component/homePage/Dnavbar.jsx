import React from "react";
import { GiStrong } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CiCalculator1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Dnavbar d-flex flex-column align-items-center justify-content-center">
      <p className="pb-4 pt-4">
        <Link
          to="/home"
          className="Dlink d-flex align-items-center justify-content-center"
        >
          <IoHomeOutline />
        </Link>
      </p>
      <p className="pb-4 pt-4">
        <Link
          to="/exercies"
          className="Dlink d-flex align-items-center justify-content-center"
        >
          <GiStrong />
        </Link>
      </p>
      <p className="pb-4 pt-4">
        <Link
          to="/equipment"
          className="Dlink d-flex align-items-center justify-content-center"
        >
          <IoIosFitness />
        </Link>
      </p>
      <p className="pb-4 pt-4">
        <Link
          to="/calculator"
          className="Dlink d-flex align-items-center justify-content-center"
        >
          <CiCalculator1 />
        </Link>
      </p>
      <p className="pb-4 pt-4">
        <Link
          to="/task"
          className="Dlink d-flex align-items-center justify-content-center"
        >
          <BiTask />
        </Link>
      </p>
      <p className="pb-4 pt-4">
        <Link
          to="/setting"
          className="Dlink d-flex align-items-center justify-content-center"
        >
          <IoSettingsOutline />
        </Link>
      </p>
    </div>
  );
}
export default Navbar;
