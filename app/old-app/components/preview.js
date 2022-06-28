import React from "react";
import Button from "./button";
import PreviewStyles from "../styles/css/preview.css";

export function links() {
  return [{ rel: "stylesheet", href: PreviewStyles }];
}
export default function Preview(props) {
  return (
    <div className="preview">
      <img src={props.image} alt="" />
      <h4>{props.title}</h4>
      <p>{props.body}</p>
      <Button
        size="medium"
        color={props.color ? props.color : "green"}
        link={props.link}
        title={props.buttonTitle}
      />
    </div>
  );
}
