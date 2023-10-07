import React,{useState,useLayoutEffect} from "react";
import "./MotCategories.css";
import MotLogo from "../../assets/Mot.png";
import HalfAnArc from "../../assets/HalfAnArc.png";
import DootedArc from "../../assets/Ellipse 7.png";
const MotCategories = () => {

  const [widthState, setWidthState] = useState(window.innerWidth);


  useLayoutEffect(() => {
    const handleWindowResize = () => {
      setWidthState(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  return (
    <div id={"MotCategories"}>
      <div id={widthState <680 ? 'NoLogoWrapper' : 'LogoWrapper'}>
        <img id={"MoTLogo"} src={MotLogo}></img>
        <img src={HalfAnArc}></img>
        <img id={"DootedArc"} src={DootedArc}></img>
      </div>

      <div id={"CardCategories"}>
        <div className={"CategoryCardWrapper"} style={{ left: "-150px" }}>
          <label className={"CategoryNumber"}>01</label>
          <div className={"CategoryDesciptionWrapper Odd"}>
            <label>Category1</label>
            <p>abcdefalkjflkasjl kfjalskjalksjdlka sjlkdjaslkjdlkasjdl kasjdas</p>
          </div>
        </div>
        <div className={"CategoryCardWrapper"} style={{ left: "-100px" }}>
          <label className={"CategoryNumber"}>02</label>
          <div className={"CategoryDesciptionWrapper even"}>
            <label>Category1</label>
            <p>abcdefalkjflkas jlkfjalskjalksjdlkasj lkdjaslkjdlkasjdlk asjdas</p>
          </div>
        </div>

        <div className={"CategoryCardWrapper"}>
          <label className={"CategoryNumber"}>03</label>
          <div className={"CategoryDesciptionWrapper Odd"}>
            <label>Category1</label>
            <p>abcdefalkjflkasjl kfjalskjalksjdlka sjlkdjaslkj dlkasjdlkasjdas</p>
          </div>
        </div>

        <div className={"CategoryCardWrapper"} style={{ left: "-100px" }}>
          <label className={"CategoryNumber"}>04</label>
          <div className={"CategoryDesciptionWrapper even"}>
            <label>Category1</label>
            <p>abcdefalkjflkasjl kfjalskjalksjdlk asjlkdjaslkjdl kasjdlkasjdas</p>
          </div>
        </div>

        <div className={"CategoryCardWrapper"} style={{ left: "-150px" }}>
          <label className={"CategoryNumber"}>05</label>
          <div className="CategoryDesciptionWrapper Odd">
            <label>Category1</label>
            <p>abcdefalkjflkasjlkfja lskjalksjdl kasjlkdjaslkjdl kasjdlkasjdas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotCategories;
