//All section will be wrap with higher order component
import React from "react";
import SocialMedia from "../components/SocialMedia";
import NavigationDots from "../components/NavigationDots";
//rightside code will wwraping all this code
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wraper app__flex">
          <Component />
          <div className="copyright">

            <p className="p-text">@2020 GD</p>
            <p className="p-text">All rights reserved</p>

          </div>
        </div>

        <NavigationDots active={idName}/>
      </div>
    );
  };

export default AppWrap;
