import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

/**
 * @author
 * @function MenuItem
 **/
const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;
  // const [expand, setExpand] = useState(false);
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  return (
    <li onClick={props.onClick}>
      <NavLink
        exact={exact}
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        style={({ isActive }) => ({
          backgroundColor: isActive ? currentColor : "",
        })}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <div className="menu-icon">
          <i class={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={({ isActive }) => (isActive ? activeLink : normalLink)}>
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
    </li>

    // {!activeSubMenu ? (
    //   <div
    //     className="relative flex justify-between text-gray-500 hover:text-white focus-within:text-white"
    //     onClick={() => setActiveSubMenu(!activeSubMenu)}
    //   >
    //     <div className="flex items-center w-full">
    //       <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
    //         <svg
    //           className="w-5 h-5 stroke-current"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="1.5"
    //             d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
    //           ></path>
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="1.5"
    //             d="M18 9.25H13.75V5"
    //           ></path>
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="1.5"
    //             d="M9.75 15.25H14.25"
    //           ></path>
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="1.5"
    //             d="M9.75 12.25H14.25"
    //           ></path>
    //         </svg>
    //       </div>
    //       <Link
    //         exact
    //         to={to}
    //         className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
    //       >
    //         <span>{name}</span>
    //       </Link>
    //     </div>
    //     <button
    //       className="absolute right-0 flex items-center p-1"
    //       tabIndex="-1"
    //     >
    //       {arrow}
    //     </button>
    //   </div>
    // ) : (
    //   <>
    //     <div
    //       className="relative flex justify-between text-gray-500 hover:text-white focus-within:text-white"
    //       onClick={() => setActiveSubMenu(!activeSubMenu)}
    //     >
    //       <div className="flex items-center w-full">
    //         <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
    //           <svg
    //             className="w-5 h-5 stroke-current"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="1.5"
    //               d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
    //             ></path>
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="1.5"
    //               d="M18 9.25H13.75V5"
    //             ></path>
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="1.5"
    //               d="M9.75 15.25H14.25"
    //             ></path>
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="1.5"
    //               d="M9.75 12.25H14.25"
    //             ></path>
    //           </svg>
    //         </div>
    //         <Link
    //           exact
    //           to={to}
    //           className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
    //         >
    //           <span>{name}</span>
    //         </Link>
    //       </div>
    //       <button
    //         className="absolute right-0 flex items-center p-1"
    //         tabIndex="-1"
    //       >
    //         {arrow}
    //       </button>
    //     </div>
    //     {/* listed item */}
    //     <div
    //       className={`pt-2 pl-4 ${
    //         activeSubMenu ? "translate-y-0" : "translate-y-full"
    //       }`}
    //     >
    //       {subMenus && subMenus.length > 0 ? (
    //         <ul className="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
    //           {subMenus.map((menu, index) => (
    //             <li key={index}>
    //               <NavLink to={menu.to}>{menu.name}</NavLink>
    //             </li>
    //           ))}
    //         </ul>
    //       ) : null}
    //       {/* <ul className="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
    //         <li>
    //           <a
    //             href="#"
    //             className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
    //           >
    //             Courses
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
    //           >
    //             Categories
    //           </a>
    //         </li> */}
    //       {/* </ul> */}
    //     </div>
    //   </>
    // )}
  );
};

export default MenuItem;
