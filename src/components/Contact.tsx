import React from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";

const Contact = () => {
  // const context = useOutletContext();

  const isNavigate = false;

  const navigate = useNavigate();

  const clickHandler = () => {
    //navigate("/users", { state: { title: "User List - 2023", role: "Admin" } });

    navigate(1);
  };

  return (
    <div>
      <h2>Contact</h2>
      <button onClick={clickHandler}>Click</button>
      {/* <h4>{context.message}</h4> */}

      {isNavigate && <Navigate to="/about" />}
    </div>
  );
};

export default Contact;
