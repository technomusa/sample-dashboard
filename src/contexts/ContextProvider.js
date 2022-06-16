import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// these (ContextProvider) a basic react error function component
export const ContextProvider = ({ children }) => {
  // return the state context of all states which are being listened to
  //    the content in which i pass through the value would be passed through all the components
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  // const [activeSubMenu, setActiveSubMenu] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    // updating localStorage so on return previous selected color remains
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    //   no need to destructure the values so pass color straight to it
    // setCurrentColor(e.target.value);
    setCurrentColor(color);
    // updating localStorage so on return previous selected color remains
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  //   scripting a click handle function
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
        setCurrentColor,
        setCurrentMode,
        initialState,
      }}
    >
      {/* with the context, children all always to be returned */}
      {children}
    </StateContext.Provider>
  );
};

// using activeMenu at our side bar
export const useStateContext = () => useContext(StateContext);
