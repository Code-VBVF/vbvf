import React, { useEffect, useState } from "react";
import { sanity } from "../util/index";
import "../css/care-ministry.scss";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import ScriptureVerse from "../components/scripture-verse";
import { Spinner } from "reactstrap";
import PortableText from "@sanity/block-content-to-react";

export default function CareMinistry() {
  const [pageData, setPageData] = useState();
  const [pageDataIsLoading, setPageDataIsLoading] = useState(true);
  const query = `*[_type == "page" && title == "Care Ministries"]{
    paragraphs,
    faq,
    scripture
  }`;
  useEffect(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
    //eslint-disable-next-line
  }, [query]);

  const serializers = {
    //this helps react understand how to present links
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return <a href={href}>{children}</a>;
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return <ul>{props.children}</ul>;
        }
        return <ol>{props.children}</ol>;
      },
      listItem: (props) => <li>{props.children}</li>,
    },
  };

  return (
    <div className="care-ministries">
      <h1>Care Ministry</h1>
      <iframe
        title="Care Ministries"
        src="https://player.vimeo.com/video/508963469?color=ffffff&title=0&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      {pageDataIsLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="care-ministries-row">
            <PortableText
              className="care-ministries-row-vision"
              blocks={pageData.paragraphs[0].bodyText}
              serializers={serializers}
              renderContainerOnSingleChild={true}
            />
            <ScriptureVerse
              verse={pageData.scripture.verseText}
              reference={pageData.scripture.reference}
            />
          </div>
          <div className="care-ministries-row">
            <span>
              <h3>Help for the Hurting</h3>
              <p>1-5 sessions</p>
            </span>
            <PortableText
              blocks={pageData.paragraphs[1].bodyText}
              serializers={serializers}
              renderContainerOnSingleChild={true}
            />
          </div>
          <div className="care-ministries-row">
            <span>
              <h3>Biblical Counseling</h3>
              <p>Up to 10 sessions</p>
            </span>
            <PortableText
              blocks={pageData.paragraphs[2].bodyText}
              serializers={serializers}
              renderContainerOnSingleChild={true}
            />
          </div>
          <div className="care-ministries-row">
            <span>
              <h3>Care and Recovery Groups</h3>
              <p>Typically 13 Weeks</p>
            </span>
            <PortableText
              blocks={pageData.paragraphs[3].bodyText}
              serializers={serializers}
              renderContainerOnSingleChild={true}
            />
          </div>
        </>
      )}
      <h3>FAQ</h3>
      <FrequentlyAskedQuestions layout="vertical" faq={pageData?.faq.faqs} />
    </div>
  );
}
