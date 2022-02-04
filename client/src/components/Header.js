import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
      // <div style={{color:"yellow", backgroundColor:"pink"}}>
        <div className="Fixed-header">

        <Link to="/"> Home </Link> |
        <Link to="/shop"> Shop </Link> |
        <Link to="/resources"> Resources</Link> |
        <Link to="/workshop"> Workshops </Link> |
        <Link to="/coaching"> Coaching </Link> |
        <Link to="/career"> Careers </Link> |
        <Link to="/blog"> Blog </Link>
        <h1>We are KHExperts</h1>
      </div>
    );
  };
  
  export default Header