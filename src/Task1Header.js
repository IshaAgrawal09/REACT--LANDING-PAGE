import React from "react";

const Task1Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <a href="/">
            <img src="../logo-university.png" alt="" />
          </a>
        </div>
        <div className="signup">
          <button id="subscribe">SUBSCRIBE</button>
          <span>or</span>
          <button id="login">LOGIN</button>
        </div>
      </div>
      <div className="landing-header">
          <div className="heading">
              <h1>Want to Make Facebook Advertising easy Again?</h1>
              <p>Welcome to AdEspresso University!</p>
          </div>
          <div className="dude"></div>
      </div>
    </div>
  );
};

export default Task1Header;
