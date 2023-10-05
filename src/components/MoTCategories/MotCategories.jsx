import React from "react";
import module from "./MotCategories.module.css";
import MotLogo from "../../assets/Mot.png";
import HalfAnArc from "../../assets/HalfAnArc.png";
import DootedArc from "../../assets/Ellipse 7.png";
const MotCategories = () => {
  return (
    <div id={module.MotCategories}>
      <img id={module.MoTLogo} src={MotLogo}></img>
      <img src={HalfAnArc}></img>
      <img id={module.DootedArc} src={DootedArc}></img>

      <div id={module.CardCategories} >
        <div className={module.CategoryCardWrapper} style={{left:'-150px'}}>
          <label className={module.CategoryNumber} >01</label>
          <div className={module.CategoryDesciptionWrapper} style={{backgroundColor:'#A0C5E0'}}>
            <label>Category1</label>
            <p>abcdefalkjflkasjlkfjalskjalksjdlkasjlkdjaslkjdlkasjdlkasjdas</p>
          </div>
        </div>
        <div className={module.CategoryCardWrapper} style={{left:'-100px'}}>
          <label className={module.CategoryNumber} >01</label>
          <div className={module.CategoryDesciptionWrapper }style={{backgroundColor:'#193F5B',color:'white'}}>
            <label>Category1</label>
            <p>abcdefalkjflkasjlkfjalskjalksjdlkasjlkdjaslkjdlkasjdlkasjdas</p>
          </div>
        </div>

        <div className={module.CategoryCardWrapper}>
          <label className={module.CategoryNumber} >01</label>
          <div className={module.CategoryDesciptionWrapper} style={{backgroundColor:'#A0C5E0'}}>
            <label>Category1</label>
            <p>abcdefalkjflkasjlkfjalskjalksjdlkasjlkdjaslkjdlkasjdlkasjdas</p>
          </div>
        </div>

        <div className={module.CategoryCardWrapper} style={{left:'-100px'}}>
          <label className={module.CategoryNumber} >01</label>
          <div className={module.CategoryDesciptionWrapper} style={{backgroundColor:'#193F5B',color:'white'}}>
            <label>Category1</label>
            <p>abcdefalkjflkasjlkfjalskjalksjdlkasjlkdjaslkjdlkasjdlkasjdas</p>
          </div>
        </div>

        <div className={module.CategoryCardWrapper} style={{left:'-150px'}}>
          <label className={module.CategoryNumber} >01</label>
          <div className={module.CategoryDesciptionWrapper} style={{backgroundColor:'#A0C5E0'}}>
            <label>Category1</label>
            <p>abcdefalkjflkasjlkfjalskjalksjdlkasjlkdjaslkjdlkasjdlkasjdas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotCategories;
