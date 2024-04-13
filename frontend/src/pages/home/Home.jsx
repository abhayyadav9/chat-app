import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/sidebar/messages/MessageContainer";
import Profilebar from "../../components/Profilebar";

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="home">
      <Profilebar toggleSidebar={toggleSidebar} />
      <div
        className={`flex md:h-[650px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ${
          isSidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <Sidebar />
      <MessageContainer />
      </div>
    </div>
  );
};
