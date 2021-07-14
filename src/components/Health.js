import "./Health.css";
import React from "react";

function Health(props) {
  return (
    <div id={props.key}>
      <h1>Current cases</h1>
      <ul>
        <li>{props.item}</li>
        <li>{props.index}</li>
        <li>{props.new_confirmed}</li>
        <li>{props.confirmed}</li>
        <li>{props.new_deaths}</li>
        <li>{props.deaths}</li>
        <li>{props.new_recovered}</li>
        <li>{props.recovered}</li>
      </ul>
    </div>
  );
}

export default Health;