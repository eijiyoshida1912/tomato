import React from "react";
import { Link } from "react-router-dom";

const AreaList = (props) => {
  return (
    <>
      <dt className="list__title">{props.title}</dt>
      <dd className="list__data">
        <ul>
          {props.data.map((pref, index) => (
            <li key={index}>
              <Link to={pref.id}>{pref.name}</Link>
            </li>
          ))}
        </ul>
      </dd>
    </>
  );
};

export default AreaList;
