import React from "react";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <>
      <div>
        <h4>CommonLayout</h4>
      </div>

      <Outlet
        context={{ message: "Please contact support : 91234565465", id: 1000 }}
      />
    </>
  );
};

export default CommonLayout;
