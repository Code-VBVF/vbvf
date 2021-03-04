import React, { useEffect, useState } from "react";
import { getVideos, isOver } from "../util/index";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import Stream from "../components/stream";
import { sanity } from "../util/index";
import "../css/livestream.scss";
import MemorialService from "../components/memorial-service";

require("dotenv").config();

var sortBy = require("lodash.sortby");

export default function Livestream() {
  const [wednesdaySeries, setWednesdaySeries] = useState({});
  const [sundaySeries, setSundaySeries] = useState({});

  const wednesdayQuery = `*[_type == "series" && meetingTime.day == "Wednesday"]{
  title,
  description,
  endDate,
  isVbvmiStudy
}`;
  const sundayQuery = `*[_type == "series" && meetingTime.day == "Sunday"]{
  title,
  description,
  endDate,
  isVbvmiStudy
}`;

  useEffect(() => {
    sanity.fetch(wednesdayQuery).then((wednesdaySeries) => {
      setWednesdaySeries(
        wednesdaySeries.find((series) => !isOver(series.endDate))
      );
    });
  }, [wednesdayQuery]);
  useEffect(() => {
    sanity.fetch(sundayQuery).then((sundaySeries) => {
      setSundaySeries(sundaySeries.find((series) => !isOver(series.endDate)));
    });
  }, [sundayQuery]);

  const [sundayArchiveVideos, setSundayArchiveVideos] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //fetching sunday service archive videos
    getVideos("1553779").then((vidArr) => {
      setSundayArchiveVideos(vidArr.data.data);
      setIsLoading(false);
    });
  }, []);

  const day = () => {
    let today = new Date();

    if (
      today.getDay() === 3 && //wednesday
      today.getHours() >= 18 && //between 6pm
      today.getHours() <= 23 // and 9pm
    ) {
      if (process.env.REACT_APP_STREAM !== "none") {
        //check env var for value
        return process.env.REACT_APP_STREAM;
      } else {
        return "wednesday";
      }
    }
    if (
      today.getDay() === 0 && //sunday
      today.getHours() >= 10 && //between 10am
      today.getHours() <= 13 // and 1pm
    ) {
      if (process.env.REACT_APP_STREAM !== "none") {
        //check env var for value
        return process.env.REACT_APP_STREAM;
      } else {
        return "sunday";
      }
    } else {
      if (process.env.REACT_APP_STREAM !== "none") {
        //if the environment variable has been set to anything else
        //check env var for value
        return process.env.REACT_APP_STREAM;
      }
      return null;
    }
  };

  const noStreamMessage = (
    <p>
      Verse by Verse Fellowship livestreams its Sunday services. While there's
      not a service streaming right now, please feel free to check out some of
      our recent services below. Recordings of our services are available on our{" "}
      <Link to="/bible-studies">Bible Studies</Link> page.
    </p>
  );

  const streamArchive = () => {
    const sortedVideos = sortBy(
      sundayArchiveVideos,
      "last_user_action_event_date"
    ).reverse();
    return sortedVideos.slice(0, 3).map((video) => (
      <>
        <h3>{video.name}</h3>
        <div
          className="livestream-archive-video-player"
          dangerouslySetInnerHTML={createMarkup(video)}
        ></div>
      </>
    ));
  };

  function createMarkup(video) {
    return { __html: video.embed.html };
  }

  return (
    <div className="livestream">
      <h1>Livestream</h1>
      {isLoading ? (
        <>
          <p>Loading Services</p>
          <Spinner color="dark" />
        </>
      ) : (
        <>
          {day() === "wednesday" ? ( //if it's wednesday return the active series happening on wednesday
            <Stream
              streamUrl="https://vimeo.com/event/49116/embed"
              title={wednesdaySeries.title}
              description={wednesdaySeries.description}
              seriesLink={`/bible-studies/${wednesdaySeries.title}`}
            />
          ) : day() === "sunday" ? ( //return sunday stream
            <>
              <Stream
                streamUrl="https://vimeo.com/event/51649/embed"
                title={sundaySeries.title}
                description={sundaySeries.description}
                seriesLink={`/bible-studies/${sundaySeries.title}`}
              />
            </>
          ) : day() === "memorial" ? ( // environment variable is memorial
            // return memorial service
            <>
              <MemorialService />
            </>
          ) : day() === "guestTeacher" ? ( //returning component with no description for guest teacher
            <>
              <Stream
                streamUrl="https://vimeo.com/event/51649/embed"
                title=""
                description=""
              />
            </>
          ) : (
            //return livestream archive
            <div className="livestream-archive">
              <div>{noStreamMessage}</div>
              {streamArchive()}
            </div>
          )}
        </>
      )}
    </div>
  );
}
