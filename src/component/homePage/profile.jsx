import React, { useEffect, useState } from "react";
import { Getalldata } from "../Task/helper";
import { Link } from "react-router-dom";
function Profile() {
  const [data, setdata] = useState();

  useEffect(() => {
    Getalldata().then((data) => {
      setdata(data);
    });
  }, []);
  console.log(data);

  const deleteall = () => {
    sessionStorage.removeItem("email");
  };

  return (
    <div className="profile ">
      {data?.map((val, idx) => (
        <div key={idx}>
          <div className="d-flex flex-row align-items-center justify-content-space-between">
            <h3 className="m-3">My Profile</h3>
            <button onClick={deleteall} className="logout">
              <Link to="/">
                <i className="bi bi-box-arrow-right text-danger font"></i>
              </Link>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="./images/ai-generated-8243469_1280.jpg"
              alt=""
              className="profileimg mt-3"
            />
            <h5>
              {val.fname} {val.lname}
            </h5>
          </div>
          <div className="info d-flex flex-row align-items-center justify-content-center">
            <div className="weight d-flex flex-column align-items-center justify-content-center m-4">
              <p>{val.weight}</p>
              <p>Weight</p>
            </div>
            <div className="height d-flex flex-column align-items-center justify-content-center m-4">
              <p>{val.height}</p>
              <p>Height</p>
            </div>
            <div className="Age d-flex flex-column align-items-center justify-content-center m-4">
              <p>{val.age}</p>
              <p>Age</p>
            </div>
          </div>
        </div>
      ))}

      <div className="addtask">
        <h4 className="p-2">
          Add Task{" "}
          <Link to="/task">
            <i className="bi bi-plus-square orange padding"></i>
          </Link>{" "}
        </h4>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-5288300-4411593.png?f=webp"
          alt=""
          className="taskimg"
        />
      </div>
    </div>
  );
}

export default Profile;
