import React from "react";
import StaffCard from "./staff-card";
import styles from "../styles/css/staff-info.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function StaffInfo(props) {
  return (
    <div className="staff-info-container">
      <div className="staff-card">
        <StaffCard
          title={props.name}
          subtitle={props.role}
          email={props.email}
          image={props.image}
        />
      </div>
      <div className="staff-info">
        <h2>Meet {props.name.split(" ")[0]}</h2>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}
