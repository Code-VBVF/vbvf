import React, { useEffect, useState } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import "../css/connect-widget.scss";
import { sanity } from "../util/index";
import { Spinner } from "reactstrap";

export default function ConnectWidget() {
  const [kidsUnit, setKidsUnit] = useState("");

  const kidsQuery = `*[_type == "childrensUnit"] | order(_createdAt desc) [0] {unitNumber}`;
  useEffect(() => {
    sanity.fetch(kidsQuery).then((unit) => {
      setKidsUnit(unit.unitNumber);
    });
  }, [kidsQuery]);

  return (
    <div className="connect-widget">
      <h5>VBVF Resources</h5>
      <ul>
        <li>
          {kidsUnit === "" ? (
            <>
              Loading <Spinner color="dark" />
            </>
          ) : (
            <Link to={`/childrens-content/unit-${kidsUnit}`}>
              Journey Kids Lesson
            </Link>
          )}
        </li>
        <li>
          <Link to="/about/faq">Read our FAQ</Link>
        </li>
        <li>
          <Link to="/about/beliefs">What we believe</Link>
        </li>
        <li>
          <Link to="/bible-studies">More bible teaching</Link>
        </li>
      </ul>
      <h5>Get in Touch</h5>
      <div className="connect-widget-button-container">
        <Button
          buttonFunc={() =>
            window.open(
              "https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true"
            )
          }
          title="Connect with us"
        />
        <Button
          buttonFunc={() =>
            window.open(
              "https://vbvf.churchcenter.com/people/forms/34407?open-with-church-center-modal=true"
            )
          }
          title="Prayer Request"
        />
      </div>
    </div>
  );
}
