import React from "react";
import Attendee from "../images/connect/attending_meeting.jpg";
import SteveTalking from "../images/connect/steve_talking.jpg";
import ConnectionStep from "../components/connection-steps";
import "../css/connect-page.scss";

const ConnectPage = () => {
  return (
    <div className="connect-container">
      <div id="connect-header"></div>
      <h1>Connect Here.</h1>
      <div className="first-row">
        <div className="connection-meeting">
          <h2>Connection Meeting</h2>
          <p>
            Our monthly Connection Meeting offers prospective VBVF members the
            opportunity to hear more about our church distinctives, our history,
            vision, beliefs and style of ministry. Meet Pastor Steve and the
            other VBVF pastors, ask questions and get to know us.
          </p>
        </div>
        <img src={Attendee} alt="vbvf member in connection meeting" />
      </div>
      <div className="second-row">
        <img src={SteveTalking} alt="pastor steve talking with vbvf members" />
        <div className="word-section">
          <h2>Ready to learn more?</h2>
          <h4>Follow these two steps</h4>
          <ul>
            <li>
              <h2>1</h2>
              <ConnectionStep
                copy="Submit a Connection Card using the link below."
                link="https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true"
                buttonText="Connection Card"
              />
            </li>
            <li>
              <h2>2</h2>
              <ConnectionStep
                copy="Attend a Connection Meeting. Sign up using the link below."
                link="https://vbvf.churchcenter.com/registrations/events/category/21158"
                buttonText="Connection Meeting"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;