import React from "react";
import styles from "../styles/css/photo-title.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function PhotoTitle(props) {
  return (
    <div className="person">
      <img
        loading={props.role === "Elder" ? "eager" : "lazy"}
        src={props.photo}
        alt={props.name}
      />
      <p>
        {props.name}
        {props.role ? <span>{props.role}</span> : <span></span>}
        {props.title ? <span>{props.title}</span> : <span></span>}
        {props.email ? <span>{props.email}</span> : <span></span>}
      </p>
    </div>
  );
}
