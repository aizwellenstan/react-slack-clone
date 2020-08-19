import React, { useState, useEffect, useRef } from "react";
import "client/ui/styles/css/Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "client/ui/utils/firebase";
import Message from "client/ui/components/message";
import ChatInput from "./chatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState<any>(null);
  const [roomMessages, setRoomMessages] :any = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails);
  console.log("MESSAGES >>> ", roomMessages);

  const el = useRef(null);

  useEffect(() => {
      el.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
    
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?roomDetails.name :""}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>

        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages" id={'el'} ref={el}>
          {roomMessages.map(({ message, timestamp, user, userImage } :any) => (
            <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          ))}
      </div>
      <div id={'el'} ref={el} className="el"></div>

      <ChatInput channelName={roomDetails?roomDetails.name :""} channelId={roomId} />
    </div>
  );
}

export default Chat;
