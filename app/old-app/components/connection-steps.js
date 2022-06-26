import React from "react";
import Button from "./button";
import styles from "../styles/css/connection-steps.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function ConnectionStep(props) {
  return (
    <div className="step-container">
      <p>{props.copy}</p>
      <Button
        size="medium"
        color="green"
        title={props.buttonText}
        link={props.link}
      />
    </div>
  );
}
