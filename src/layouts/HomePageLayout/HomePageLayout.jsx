import React from "react";
import module from './HomePageLayout.module.css'
import Footer from "../../components/Footer/Footer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import LifeTImeSpan from "../../components/LifeTimeSpan/LifeTImeSpan";
import MotCategories from "../../components/MoTCategories/MotCategories";
import MoTFeatures from "../../components/MoTFeatures/MoTFeatures";
import NavBar from "../../components/NavBar/NavBar";
import OurServices from "../../components/OurServices/OurServices";
import UseCasses from "../../components/UseCasses/UseCasses";
import Map from "../../components/Map/Map";
import SwipperMainSliders from "../../components/SwipperMainSliders/SwipperMainSliders";


const HomePageLayout = () => {
  return (
    <>
      <NavBar></NavBar>
   
      <div id={module.MainPageContentWrapper}>
        <SwipperMainSliders></SwipperMainSliders>
        <UseCasses></UseCasses>
        <OurServices></OurServices>
        <Map></Map>
        <MotCategories></MotCategories>
        <MoTFeatures></MoTFeatures>
        <LifeTImeSpan></LifeTImeSpan>
        <GetInTouch></GetInTouch>

       
      </div>
      <Footer> </Footer>

    </>
  );
};

export default HomePageLayout;
