import React from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const { userid, type } = useParams();
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="../">Back</Link>
        </li>
        <li>
          {" "}
          <Link to="edit" replace={true}>
            Edit
          </Link>
        </li>
      </ul>

      <h2>
        User Detail - {userid} -- {type}
      </h2>
    </div>
  );
};

export default UserDetail;
