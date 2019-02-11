import React from "react";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />{" "}
      <div>
        <div style={{ fontWeight: "bold" }}> {props.name} </div>{" "}
        <div> {props.blog} </div>{" "}
      </div>{" "}
      <a href={props.html_url}>{props.html_url} </a>
    </div>
  );
};

export default Card;
