import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { IoMdCodeWorking } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const Nav = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseOver = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseOut = () => {
    setHoveredIcon(null);
  };

  const icons = [
    { to: "/", icon: <AiFillHome />, name: "Home", key: "home" },
    { to: "/about", icon: <FaPerson />, name: "About Me", key: "about" },
    {
      to: "/whatCanIDo",
      icon: <IoMdCodeWorking />,
      name: "What Can I Do",
      key: "whatCanIDo",
    },
    {
      to: "/wish",
      icon: <MdFavorite />,
      name: "What Do I Want To Do",
      key: "wish",
    },
  ];

  return (
    <div className={classes.Nav}>
      <nav className={classes.navContainer}>
        {icons.map((item) => (
          <div key={item.key}>
            <Link to={item.to}>
              <div
                className={`${classes.icon} ${
                  hoveredIcon === item.key ? classes.grow : ""
                }`}
                onMouseOver={() => handleMouseOver(item.key)}
                onMouseOut={handleMouseOut}
              >
                {item.icon}
                <span className={classes.tooltip}>{item.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
