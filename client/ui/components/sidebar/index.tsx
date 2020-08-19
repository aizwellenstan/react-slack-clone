import React, { useState, useEffect } from "react";
import "client/ui/styles/css/Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "./SidebarOption";
import AddIcon from "@material-ui/icons/Add";
import db from "client/ui/utils/firebase";
import { useStateValue } from "client/ui/context";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot :any) =>
      setChannels(
        snapshot.docs.map((doc :any) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Vtuber</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        {/* <CreateIcon /> */}
      </div>
      {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr /> */}
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {/* Connect to dB and list all the channels */}
      {/* <SidebarOption ... /> */}
      <div className="sidebar__channels">
        {channels.map((channel) => (
          <SidebarOption title={channel.name} id={channel.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
