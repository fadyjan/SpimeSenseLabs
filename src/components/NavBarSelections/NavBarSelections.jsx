import React from "react";
import module from './NavBarSelections.module.css'
const NavBarSelections = ({screenType}) => {
    console.log(screenType)
  return (
    <ul id={screenType === 'desktop' ?module.DesktopAnchorsContainer : module.MobileAnchrosContainer}>
      <li>SOLUTIONS</li>
      <li>PLATFORM</li>
      <li>SERVICES</li>
      <li>CUSTOMERS</li>
      <li>ABOUT US</li>
      <li>PARTNERS</li>
      <li>CONTACT US</li>
    </ul>
  );
};

export default NavBarSelections;
