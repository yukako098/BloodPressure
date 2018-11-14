import React from "react";
import PropTypes from "prop-types";
import "./Sidenav.css";

const Header = props => {
  const { name, isActive } = props;

  return (
    <nav className="sidenav">
      <div className="account">
        <img src="./img/profile.png" alt="profile_pic" />
        <div className="account_right">
          <div className="user_status">
            <h2 className="user_name">{name}</h2>
            <p className="login_status">{isActive}</p>
          </div>
          <p className="show_user_detail">v</p>
        </div>
      </div>
      <ul>
        <li>
          <img src="./img/todo.png" alt="" className="nav_icon check" />
          <h2 className="menus todo">TODO</h2>
        </li>
        <li>
          <img src="./img/graph.png" alt="" className="nav_icon graph.png" />
          <h2 className="menus charts">CHARTS</h2>
        </li>
        <li>
          <img src="./img/calendar.png" alt="" className="nav_icon events" />
          <h2 className="menus events">EVENTS</h2>
        </li>
        <li>
          <img src="./img/chat.png" alt="" className="nav_icon chat" />
          <h2 className="menus chat">CHAT</h2>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.oneOf(["active", "offline"])
};
export default Header;
