import React from "react";

const Resources = () => {
return (
    <div>
      <h1>⭐Resources⭐</h1>
      <p className="Page-info">📚 <br/> This is the Resources page. <br/> 
        It'll house free downloadable docs <br/ > accessible after customers enter their email addresses</p>
        <form>
          <input type="text" placeholder="type email..."></input>
          <button type="submit">submit</button> 
        </form>
    </div>
);
};

export default Resources;