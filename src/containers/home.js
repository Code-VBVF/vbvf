import React from "react";
import "../css/home.css";

import { Button } from "reactstrap";
import ConnectionImage from "../images/Connection_Meeting_Square.jpg";
import PreachingTheWord from "../images/preaching_the_word.png";
import EndTimesPromo from "../images/end_times_promo.jpg";
import CrownOfThorns from "../images/matthew_crown.png";
import RevelationLogo from "../images/revelation_logo.png";
import { Link } from "react-router-dom";
import Time from "../images/time.svg";
import Location from "../images/location.svg";
import MissionBanner from "../components/mission-banner";

const Home = () => {
  let buttonStyle = {
    color: "white"
  };
  return (
    <div>
      <div className="main-header">
        <div className="titles">
          <h1>Come find what you've been missing</h1>

          <div className="buttons">
            <h2>John 1:1</h2>
            <Button outline color="light">
              What to expect
            </Button>
          </div>
        </div>
        <span className="see-more-arrow" />
      </div>
      {/* <div className="time-and-directions-parent">
        <div className="time-and-directions-child">
          <img src={Time} />
          Saturdays at 5:30pm <br />
          Sundays at 10:30am
        </div>
        <div className="time-and-directions-child">
          <img src={Location} />
          551 E Nakoma Dr, San Antonio, TX 78216
        </div>
      </div> */}
      <MissionBanner />
      <div className="secondary-content">
        <div
          id="connection-meeting"
          className="connection-meeting content-block"
        >
          <div className="words">
            <h2>Connection Meeting</h2>
            <p>
              Learn about our vision, beliefs and how you can join in our
              journey. Attend a connect meeting to learn how to make VBVF your
              church. <Link to="about/">Learn More</Link>
            </p>
          </div>
          <img src={ConnectionImage} alt="connection meeting logo" />
        </div>
        <div className="heard-on-radio content-block">
          <img src={PreachingTheWord} alt="Preaching the word logo" />
          <div className="words">
            <h2>Heard us on the Radio?</h2>
            <p style={{ textAlign: "center" }}>
              Gospel of Matthew <br /> on AM 630 <br />
              Monday-Friday at 6:30pm
            </p>
            <p>
              VBVF has a heart to see all of San Antonio understanding the word
              of God, so we’re Preaching the Word on KSLR AM630. Click the
              button below if want to hear more of our current series on the
              book of Matthew.
              <Link to="redirect/"> Listen to Matthew series</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="full-width-promos">
        <div className="current-series-promo-container " id="revelation-series">
          <span className="current-series-desc">
            <h2>Revelation Study</h2>
            <p>
              Many Christians consider Revelation to be a mysterious and even
              frightening book of scripture. Some avoid studying it, and among
              those who do try, many find it confusing. Why does the book
              confound so many and give rise to so many conflicting
              interpretations? The answer: because it's the final book of the
              Bible.{" "}
            </p>
            <Button
              outline
              color="light"
              href="https://www.versebyverseministry.org/events/revelation-2019-2020"
            >
              Listen to Revelation
            </Button>
          </span>
          <img src={RevelationLogo} alt="crown of thorns" />
        </div>
        <div className="current-series-promo-container" id="matthew-series">
          <span className="current-series-desc">
            <h2>Current Series</h2>
            <p>
              As we present this important book, we’ll give careful attention to
              the details without losing sight of Matthew’s major ideas and
              themes. Together with our previous studies in Luke and John, we’re
              rounding out the full story of Jesus’ arrival and work on earth.
              Every Christian can profit from such a grounding.
            </p>
            <Button
              outline
              color="light"
              href="https://www.versebyverseministry.org/bible-studies/gospel-of-matthew"
            >
              Listen to Matthew
            </Button>
          </span>
          <img src={CrownOfThorns} alt="crown of thorns" />
        </div>
      </div>
    </div>
  );
};

export default Home;
