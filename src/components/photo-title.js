import React from "react";
import "../css/photo-title.scss";

export default function PhotoTitle(props) {
  return (
    <div className="person">
      <img loading={props.isLazy} src={props.photo} alt={props.name} />
      <p>
        {props.name}
        {props.title ? <span>{props.title}</span> : <span></span>}
        {props.role ? <span>{props.role}</span> : <span></span>}
        {props.email ? <span>{props.email}</span> : <span></span>}
      </p>
    </div>
  );
}
