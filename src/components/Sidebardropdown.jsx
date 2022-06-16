import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

const Sidebardropdown = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact, arrow } = props;
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  return (
    <>
      {!activeSubMenu ? (
        <div
          className="relative  justify-between"
          onClick={() => setActiveSubMenu(!activeSubMenu)}
        >
          <NavLink
            exact={exact}
            to={to}
            style={({ isActive }) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <div className="menu-icon">
              <i class={iconClassName}></i>
            </div>
            <span>{name}</span>
            <span className="ml-auto mr-3">{arrow}</span>
          </NavLink>
        </div>
      ) : (
        <>
          <div
            className="relative  justify-between"
            onClick={() => setActiveSubMenu(!activeSubMenu)}
          >
            <NavLink
              exact={exact}
              to={to}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="menu-icon">
                <i class={iconClassName}></i>
              </div>
              <span>{name}</span>
              <span className="ml-auto mr-3">{arrow}</span>
            </NavLink>
          </div>
          {/* listed item */}
          <div
            className={`pt-2 pl-4 ${
              activeSubMenu ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {subMenus && subMenus.length > 0 ? (
              <ul
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {subMenus.map((menu, index) => (
                  <li key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      to={menu.to}
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default Sidebardropdown;
