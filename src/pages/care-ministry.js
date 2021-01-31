import React, { useEffect, useState } from "react";
import { sanity } from "../util/index";
import "../css/care-ministry.scss";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";

export default function CareMinistry() {
  const [faq, setFaq] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const query = `*[_type == "faq" && title == "Counseling Ministry"]{
      faqs
  }`;
  useEffect(() => {
    sanity.fetch(query).then((results) => {
      console.log(results);
      setFaq(results[0].faqs);
      setIsLoading(!isLoading);
    });
    //eslint-disable-next-line
  }, [query]);
  return (
    <div className="care-ministries">
      <h1>Care Ministry</h1>
      <p>
        Care Ministries offer supportive care to those in need, resting firmly
        on Galatians 6:2 - “Bear one another’s burdens, and thereby fulfill the
        law of Christ.” If you are struggling with life or with a particular
        issue and want to work through it along side a Scripturally-grounded,
        caring Christian, please contact us at{" "}
        <a href="mailto:supportcare@vbvf.org">supportcare@vbvf.org</a> or call
        the church and leave a message on the Care Ministries extension.{" "}
      </p>
      <div className="care-ministries-row">
        <span>
          <h3>Help for the Hurting</h3>
          <p>
            Those in need of supportive care begin with Help for the Hurting
            where they are paired with spiritually mature, compassionate
            Christians typically for up to 3-4 sessions either virtually or in
            person to resolve issues consistent with Scripture and the leading
            of the Holy Spirit.{" "}
          </p>
        </span>
        <div className="test-box"></div>
      </div>
      <div className="care-ministries-row">
        <span>
          <h3>Biblical Counseling</h3>
          <p>
            {" "}
            Those in need of a longer-term, more in-depth experience may
            transition to Biblical Counseling Services where they will meet with
            a certified Biblical counselor for up to 10 sessions. Our counselors
            build relationship, observe, ask questions, speak truth in love and
            encourage going deeper in relationship with God and knowledge of
            Scripture, knowing that “all Scripture is given by inspiration of
            God, and is profitable for doctrine, for reproof, for correction,
            for instruction in righteousness.” (2 Timothy 3:16
          </p>
        </span>
        <div className="test-box"></div>
      </div>
      <h3>FAQ</h3>
      <FrequentlyAskedQuestions faq={faq} />
    </div>
  );
}
