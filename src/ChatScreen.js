import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ChatScreen.css";
import database from "./firebase";

export const ChatScreen = () => {
  const paramsName = useParams();
  //   console.log(paramsName.person);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  //       [
  //     {
  //       name: "Sarah",
  //       image:
  //         "https://static.wikia.nocookie.net/outer-banks-netflix/images/3/30/Sarah-cameron-outer-banks-outfits.jpg/revision/latest?cb=20200508111724",
  //       message: " Hey! how are you ? ",
  //     },
  //     {
  //       name: "Sarah",
  //       image:
  //         "https://static.wikia.nocookie.net/outer-banks-netflix/images/3/30/Sarah-cameron-outer-banks-outfits.jpg/revision/latest?cb=20200508111724",
  //       message: " Hows it going on! ",
  //     },
  //     {
  //       message: "Hi! Whats up",
  //     },
  //   ]

  useEffect(() => {
    const unsubscribe = database
      .collection("chatPeople")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
        // console.log(snapshot.docs.map((doc) => doc.data()));
      });
    return () => {
      // cleanup ...
      unsubscribe();
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        {" "}
        YOU WATCHED WITH SARAH on 11.12.20{" "}
      </p>
      {!!messages.length &&
        messages.map(({ message, name, image }) =>
          name === paramsName.person ? (
            <div className="chatScreen__message">
              <Avatar className="chatScreen__image" alt={name} src={image} />
              <p className="chatScreen__text">{message}</p>
            </div>
          ) : !name ? (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message}</p>
            </div>
          ) : (
            ""
          )
        )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message ..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          {" "}
          Send{" "}
        </button>
      </form>
    </div>
  );
};
