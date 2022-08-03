import React from "react";

const Task2Header = () => {
  return (
    <div className="header">
      <div className="sideLogo">
        <img src="task2background.png" alt="" />
      </div>
      <div className="logo">
        <img src="task2Logo.png" alt="" />
        <p id="bold">Get a helping hand with your Home Loan</p>
      </div>
      <div className="mainContent">
        <div className="content">
          <p>
            We are South Africa's largest bond originator, responsible for 1 in
            every 4 bonds granted in South Africa today. Ovber 70% of our bonds
            are approved. Our success speaks for itself.
          </p>
          <p>
            We make the process quick and easy. Just fill in our application
            form to pre-qualify for a home-loan and of our consultants will
            contact you to complete the process.
          </p>
        </div>
        <div className="form">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="number" placeholder="Title" />
                </td>
                <td>
                  <input type="text" placeholder="First Name" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="number" placeholder="Last Name" />
                </td>
                <td>
                  <input type="text" placeholder="Email" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="number" placeholder="Phone Number" />
                </td>
                <td>
                  <input type="text" placeholder="ID Number" />
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Do You have a signed sale agreement for a property?
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">Yes</label>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">No</label>
          </p>
          <button>PREQUALIFY ME</button>
        </div>
      </div>
    </div>
  );
};

export default Task2Header;
