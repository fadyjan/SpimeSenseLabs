import React from "react";
import module from "./MotFeatures.module.css";
import DeviceLogo from "../../assets/Group.png";
const MoTFeatures = () => {
  return (
    <div id={module.FeatureSection }>
      <label id={module.FeaturesMainTittle}>MASTER OF THINGS FEATURES </label>
      <div id={module.FeaturesWrapper}>
        <div className={module.FeatureDiv}>
          <div className={module.FetureTittle}>
            <img src={DeviceLogo} className={module.FeatureIcon}></img>
            <label>Device Management</label>
          </div>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>
        <div className={module.FeatureDiv}>
          <div className={module.FetureTittle}>
            <img src={DeviceLogo} className={module.FeatureIcon}></img>
            <label>Device Management</label>
          </div>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>

        <div className={module.FeatureDiv}>
          <div className={module.FetureTittle}>
            <img src={DeviceLogo} className={module.FeatureIcon}></img>
            <label>Device Management</label>
          </div>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>

        <div className={module.FeatureDiv}>
          <div className={module.FetureTittle}>
            <img src={DeviceLogo} className={module.FeatureIcon}></img>
            <label>Device Management</label>
          </div>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>
      </div>
      <button id={module.FreeTrialButton}>Request a free trial </button>
    </div>
  );
};

export default MoTFeatures;
