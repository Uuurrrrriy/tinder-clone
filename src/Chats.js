import React, { useContext } from "react";
import { Chat } from "./Chat";
import "./Chats.css";
import { ChatPeopleContext } from "./context";

export const Chats = () => {
  const chatPeople = useContext(ChatPeopleContext);
  return (
    <div className="chats">
      {!!chatPeople.length &&
        chatPeople.map((chatPerson) => (
          <Chat key={chatPerson.id} person={chatPerson} />
        ))}
      {/* <Chat
        name="Sarah"
        message=" Hey! how are you "
        timestamp=" 35 minutes ago "
        profilePic="https://static.wikia.nocookie.net/outer-banks-netflix/images/3/30/Sarah-cameron-outer-banks-outfits.jpg/revision/latest?cb=20200508111724"
      /> */}
    </div>
  );
};
