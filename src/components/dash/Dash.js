import "./Dash.css";
import UsersCard from "./UsersCard";
import PostsCard from "./PostsCard";
import { useState } from "react";

const Dash = ({ setScreenIndex }) => {
  const [component, setComponent] = useState(1);

  const logOut = () => {
    setScreenIndex(1);
  };

  return (
    <div>
      <header>
        <button id="logbtn" onClick={logOut}>
          LOGOUT
        </button>
      </header>
      <div id="side-menu" className="side-nav">
        <button
          onClick={() => {
            setComponent(1);
          }}
          className="tab"
        >
          USERS
        </button>

        <button
          onClick={() => {
            setComponent(2);
          }}
          className="tab"
        >
          POSTS
        </button>
      </div>

      {component === 1 ? (
        <UsersCard className="usercard" />
      ) : (
        <PostsCard/>
      )}
    </div>
  );
};

export default Dash;
