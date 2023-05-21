import React from "react";
import {Link,Outlet} from 'react-router-dom';


import "../../styles/homeStyle/home_cv.scss";
const Homecv = () => {
  return (
    <div className="cv">
      <div className="cv_container">
        <div className="points">
        <h1><Link to="/home/about">About Me</Link></h1>
        <h1><Link to="/home/skiils">Skills</Link></h1>
        <h1><Link to="/home/project">Projects</Link></h1>
        <h1><Link to="/home/education">Education</Link></h1>
        
        </div>
        <div className="write">
          <Outlet />
          
          
        </div>
      </div>
    </div>
  );
};

export default Homecv;
