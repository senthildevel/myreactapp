import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const UserList = () => {
  const [searchParams, setSearchParms] = useSearchParams();
  const user_role = searchParams.get("role");
  const user_loc = searchParams.get("location");
  const user_id = searchParams.get("id");

  const location = useLocation();
  const statedata = location.state;

  return (
    <div>
      <h2>
        UserList - {user_role} - {user_loc} - {user_id}
        {/* {new URLSearchParams(location.search).get("role")} --
        {new URLSearchParams(location.search).get("location")} --
        {new URLSearchParams(location.search).get("id")} */}
      </h2>

      <h4>State data:</h4>
      {/* <p>{statedata.title}</p>
      <p>{statedata.role}</p> */}

      <Link to="/users/10/admin">User Detail</Link>
    </div>
  );
};

export default UserList;
