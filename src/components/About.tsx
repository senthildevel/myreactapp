import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";

const About = () => {
  // const context = useOutletContext();
  return (
    <div>
      <h2>About </h2>
      {/* <p>{context.message}</p>
      <p>{context.id}</p> */}
    </div>
  );
};

export default About;
