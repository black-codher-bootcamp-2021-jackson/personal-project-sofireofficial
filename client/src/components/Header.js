import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
      <div>
        <Link to="/"> Home </Link> |
        <Link to="/shop"> Shop </Link> |
        <Link to="/resources"> Resources</Link> |
        <Link to="/workshop"> Workshops </Link> |
        <Link to="/coaching"> Coaching </Link> |
        <Link to="/career"> Careers </Link> 
        <h1>We are KHExperts</h1>
      </div>
    );
  };
  
  export default Header