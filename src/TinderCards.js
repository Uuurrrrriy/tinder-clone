import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

export const TinderCards = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // cleanup ...
      unsubscribe();
    };
  }, []);

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {!!people.length &&
          people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.id}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3> {person.name} </h3>
              </div>
            </TinderCard>
          ))}
      </div>
    </div>
  );
};
