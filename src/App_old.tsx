import React from "react";
import "./variable.scss";
import "./main.scss";

const App = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        maiores, nobis dolores libero rerum vel tempora officia, fugiat fuga
        quasi aliquam numquam sed corrupti maxime?
      </p>
      <div className="section1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
        alias.
      </div>
      <div className="section2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
        alias.
      </div>

      <button className="button-report">Report</button>

      <button className="button-submit">Submit</button>

      <nav>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
