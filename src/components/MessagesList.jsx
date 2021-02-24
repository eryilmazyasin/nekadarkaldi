import React, { useState, useEffect } from "react";
import heart from "../heart.png";
import firebase from "../firebase";

const SORT_OPTIONS = {
  LOVE_ASC: { column: "love", direction: "asc" },
  LOVE_DESC: { column: "love", direction: "desc" }
};

function useMessages(sortBy = "LOVE_ASC") {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMessages(newMessages);
      });
  }, [sortBy]);

  return messages;
}

const MessagesList = () => {
  const [sortBy, setSortBy] = useState("LOVE_ASC");
  const messages = useMessages(sortBy);

  return (
    <div className="row">
      <div className="wrapper d-flex justify-content-start align-items-start flex-column">
        <label className="w-100 text-start fs-11 mb-2" >Sırala</label>{" "}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
          className="form-select w-20 order-select btn btn-outline-info mb-3"
        >
          <option value="LOVE_DESC">En çok kalp</option>
          <option value="LOVE_ASC">En az kalp</option>
        </select>
        <ul className="list-group fw-light w-100">
          {messages.map((message) => (
            <li className="bg-dark message-li list-group-item d-flex justify-content-between align-items-start text-start mb-1" key={message.id}>
              {message.message}
              <span className="love badge bg-light text-dark rounded-pill">{message.love} <img width="20px" src={heart} alt=""/> </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessagesList;
