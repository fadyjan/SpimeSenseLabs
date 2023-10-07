import React from "react";
import { Chrono } from "react-chrono";
import "./HorizontalTimeLine.css";

const customContent = [
  <div>
    <h3>Custom Card 1</h3>
    <p>This is the first custom card</p>
  </div>,
  <div>
    <h3>Custom Card 2</h3>
    <p>This is the second custom card</p>
  </div>,
];

const items = [
  {
    title: "January 2022",
  },
  {
    title: "February 2022",
  },
  {
    title: "March 2022",
  },
  {
    title: "March 2022",
  },
  {
    title: "March 2022",
  },
];

const HorizontalTimeline = () => {
  return (
      <Chrono

      theme={{
        primary: "#4e73aa",
        secondary: "#d4e1f5",
      }}
      items={items}
      mode={window.innerWidth < 560? "VERTICAL_ALTERNATING" : "HORIZONTAL"}
    >
      {customContent}
    </Chrono>
    
  );
};

export default HorizontalTimeline;
