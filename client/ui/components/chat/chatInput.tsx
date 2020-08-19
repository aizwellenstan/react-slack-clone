import React, { useState } from "react";
import db from "client/ui/utils/firebase";
import "client/ui/styles/css/ChatInput.css";
import { useStateValue } from "client/ui/context";
import firebase from "firebase";

function ChatInput({ channelName, channelId } :any) {
  const [input, setInput] = useState("");
  const [{ user }] :any= useStateValue();

  const sendMessage = (e :any) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
