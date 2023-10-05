import React from "react";
import module from "./LifeTimeSpan.module.css";

const LifeTImeSpan = () => {
  return (
    <div id={module.LifeSpanMainWrapper} >
      <label id={module.HistoryToShareLabek}>SpimeSenseLabs History to share</label>
     
     <div id={module.RowsWrapper}>
     <div className={module.SingleRow}>
        <label>2013</label>
        <button className={module.RoundedButton}></button>
        <label className={module.YearDescription}>
          SPimeSense Labs Foundation
        </label>
      </div>

      <div className={module.LineConnector}></div>
      <div className={module.SingleRow}>
        <label>2013</label>
        <button className={module.RoundedButton}></button>
        <label className={module.YearDescription}>
          SPimeSense Labs Foundation
        </label>
      </div>
      <div className={module.LineConnector}></div>
      <div className={module.SingleRow}>
        <label>2013</label>
        <button className={module.RoundedButton}></button>
        <label className={module.YearDescription}>
          SPimeSense Labs Foundation
        </label>
      </div>
      <div className={module.LineConnector}></div>
      <div className={module.SingleRow}>
        <label>2013</label>
        <button className={module.RoundedButton}></button>
        <label className={module.YearDescription}>
          SPimeSense Labs Foundation
        </label>
      </div>
      <div className={module.LineConnector}></div>
      <div className={module.SingleRow}>
        <label>2013</label>
        <button className={module.RoundedButton}></button>
        <label className={module.YearDescription}>
          SPimeSense Labs Foundation
        </label>
      </div>
      <div className={module.LineConnector}></div>
      <div className={module.SingleRow}>
        <label>2013</label>
        <button className={module.RoundedButton}></button>
        <label className={module.YearDescription}>
          SPimeSense Labs Foundation
        </label>
      </div>
     </div>

    </div>
  );
};

export default LifeTImeSpan;
