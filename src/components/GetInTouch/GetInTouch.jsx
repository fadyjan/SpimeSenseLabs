import React from "react";
import module from "./GetInTouch.module.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const GetInTouch = () => {
  return (
    <div id={module.ContactUsSection}>
      <label id={module.GetInTouchLabel}>GET IN TOUCH WITH US</label>
      <div id={module.ContactUsInfo}>
        <div className={module.ContactMethodCard}>
          <div className={module.IconWrapper}>
            <PhoneAndroidIcon></PhoneAndroidIcon>
          </div>

          <lable className={module.ColumnName}>phone</lable>
          <lable className={module.ColumnValue}>01234356111</lable>
        </div>
        <div className={module.ContactMethodCard}>
          <div className={module.IconWrapper}>
            <LocationOnIcon></LocationOnIcon>
          </div>

          <lable className={module.ColumnName}>address</lable>

          <lable className={module.ColumnValue}>
            giza 6thof october abcd agh
          </lable>
        </div>
        <div className={module.ContactMethodCard}>
          <div className={module.IconWrapper}>
            <MailOutlineIcon></MailOutlineIcon>
          </div>

          <lable className={module.ColumnName}>email</lable>

          <lable className={module.ColumnValue}>abcd@gmail.com</lable>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
