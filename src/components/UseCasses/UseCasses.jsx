import React from "react";
import module from "./UseCasses.module.css";
import AgricultureLogo from '../../assets/Agriculture.png'
const UseCasses = () => {
  return (
    <div id={module.gridParent}>
      <div id={module.gridContainer}>
        <div className={module.gridItem}>
          <label>Tomorrow is now</label>
        </div>
        <div className={module.gridItem}>
            <img src={AgricultureLogo}></img>
          <label className={module.UsecassesLabels}> AGRICULTURE</label>
          <p className={module.UsecassesParaphraphs}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>

        <div className={module.gridItem}>
            <img src={AgricultureLogo}></img>
          <label className={module.UsecassesLabels}> AGRICULTURE</label>
          <p className={module.UsecassesParaphraphs}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>

        <div className={module.gridItem}>
            <img src={AgricultureLogo}></img>
          <label className={module.UsecassesLabels}> AGRICULTURE</label>
          <p className={module.UsecassesParaphraphs}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>

        <div className={module.gridItem}>
            <img src={AgricultureLogo}></img>
          <label className={module.UsecassesLabels}> AGRICULTURE</label>
          <p className={module.UsecassesParaphraphs}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>

        <div className={module.gridItem}>
            <img src={AgricultureLogo}></img>
          <label className={module.UsecassesLabels}> AGRICULTURE</label>
          <p className={module.UsecassesParaphraphs}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default UseCasses;
