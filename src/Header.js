import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";
import TinderLogo from './assets/tinder-logo-transparent.png'

export const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <NavLink to="/">
        <img
          className="header__logo"
          src={TinderLogo}
          alt="tinder logo"
        />
      </NavLink>
      <NavLink to="/chat">
        <IconButton>
          <QuestionAnswerIcon className="header__icon" fontSize="large" />
        </IconButton>
      </NavLink>

      {/*  */}
      {/*  */}
    </div>
  );
};
