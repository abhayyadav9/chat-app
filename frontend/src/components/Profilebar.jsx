import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { FaCog, FaBars } from "react-icons/fa"; // Import icons from react-icons
import useGetConversation from "../hooks/useGetConversation";

function Profilebar({ toggleSidebar }) {
  const { loading, conversations } = useGetConversation();
  const { authUser } = useAuthContext();
  const pic = `https://ui-avatars.com/api/?name=${authUser.fullName}`;

  return (
    <nav
      className="navbar bg-body-black text-white"
      // style={{ backgroundColor: "green", borderStartStartRadius: "10px", margin:"0px"}}
    >
      <div className="container-fluid">
        <a className="navbar-brand flex" href="#">
          <img
            src={pic}
            alt="Profile Pic"
            style={{ borderRadius: "50%", marginRight: "5px" }}
            width="50"
            height="30"
            className="d-inline-block align-text-top "
          />
          <h1 className="name" style={{ margin: 10 }}>
            {authUser.fullName.toUpperCase()}
          </h1>

          <div className=" setting">
            <button
              className="btn btn-link text-white me-5"
              onClick={toggleSidebar}
            >
              <FaBars size={20} />
            </button>
          </div>
        </a>
        <div className="container">
          <button className="btn btn-link text-white">
            <FaCog size={20} /> {/* Setting button */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Profilebar;
