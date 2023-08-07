import React from "react";
import { BsOutlet } from "react-icons/bs";
import { Outlet } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <div>
        <h4>User Navigation</h4>
      </div>

      <Outlet />
    </>
  );
};

export default UserNav;
