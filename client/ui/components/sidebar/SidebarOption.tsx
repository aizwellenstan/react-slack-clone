import React from "react";
import "client/ui/styles/css/SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "client/ui/utils/firebase";

function SidebarOption({ Icon, title, id, addChannelOption } :any) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      // db.collection("rooms").add({
      //   name: channelName,
      // });
      db.collection("rooms").where('name', '==', channelName).get()
        .then(snapshot => {
          if (snapshot.empty) {
            db.collection("rooms").add({
              name: channelName,
            });
            // return;
          } else {
            alert("Channel Exist!");
          }
        })
    }
  }

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
