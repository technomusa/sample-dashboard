import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { HeartIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import Sidebardropdown from "./Sidebardropdown";
import MenuItem from "./MenuItem";

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Ecommerce",
    exact: true,
    to: "/ecommerce",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Table",
    exact: true,
    to: "/financial",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-speedometer2",
    arrow: ">",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    arrow: ">",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  { name: "Design 2", to: `/area`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  // const activeSubMenu = false;
  const [inactive, setInactive] = useState(false);

  // an error handling the closing of sidebar
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:bg-secondary-dark-bg dark:text-white text-slate-900"
            >
              <SiShopware />
              <span className="dark:text-white ">Shash</span>
            </Link>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl round-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/* 
          {
            !links.subs ? (
              <div className="mt-10 flex flex-col">
                {links.map((item) => (
                  <div kay={item.title}>
                    <p className="text-gray-400 m-3 mt-4 uppercase">
                      {item.title}
                    </p>
                    {item.links.map((link) => (
                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        // onClick={handleCloseSidebar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : "",
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {link.icon}
                        <span className="capitalize"> {link.name}</span>
                        <span className="ml-auto mr-3">{link.icon}</span>
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            ) : null
            // <Sidebardropdown />
          } */}
          <div className="main-menu">
            <ul>
              {menuItems.map((menuItem, index) => (
                <Sidebardropdown
                  key={index}
                  name={menuItem.name}
                  exact={menuItem.exact}
                  to={menuItem.to}
                  arrow={menuItem.arrow || []}
                  subMenus={menuItem.subMenus || []}
                  iconClassName={menuItem.iconClassName}
                />
              ))}
            </ul>
          </div>
          {/* <div className="main-menu">
            <ul>
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  name={menuItem.name}
                  exact={menuItem.exact}
                  to={menuItem.to}
                  arrow={menuItem.arrow || []}
                  subMenus={menuItem.subMenus || []}
                  iconClassName={menuItem.iconClassName}
                  onClick={(e) => {
                    // if (inactive) {
                    //   setInactive(false);
                    // }
                  }}
                />
              ))}
            </ul>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Sidebar;
