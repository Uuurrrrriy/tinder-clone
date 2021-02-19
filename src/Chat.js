import React from "react";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Chat.css";

export const Chat = ({ person: { name, message, timestamp, profilePic } }) => {
  return (
    <NavLink to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h2> {name} </h2>
          <p> {message} </p>
        </div>
        <p className="chat__timestamp"> {timestamp} </p>
      </div>
    </NavLink>
  );
};
