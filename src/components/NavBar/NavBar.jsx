import React, { useLayoutEffect, useState } from "react";
import module from "./NavBar.module.css";
import SpimeSenseLogo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavBarSelections from "../NavBarSelections/NavBarSelections";

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const HandleOpeningMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  useLayoutEffect(() => {
    // Function to update the isSmallScreen state based on screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    // Initial call to set the initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id={module.NavBarContainer}>
      {isSmallScreen ? (
        <div id={module.NvBarRowWrapper}>
          <img src={SpimeSenseLogo}></img>
          <button onClick={HandleOpeningMenu}>
            {isMenuOpened ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
          </button>
        </div>
      ) : (
        <>
          <img src={SpimeSenseLogo}></img>
          <NavBarSelections screenType="desktop"></NavBarSelections>
        </>
      )}

      {isMenuOpened && isSmallScreen ? (
        <NavBarSelections screenType="mobile"></NavBarSelections>
      ) : null}
    </nav>
  );
};

export default NavBar;
