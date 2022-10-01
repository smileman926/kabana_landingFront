import { Fragment } from "react";

import classes from "./curtainMenu.module.scss";

import CurtainMenuLink from "./curtainMenuLink/curtainMenuLink";

import homeSvg from "../../assets/images/home.svg";
import teamSvg from "../../assets/images/team.svg";
import docsSvg from "../../assets/images/docs.svg";
import messageSvg from "../../assets/images/message.svg";
import discSvg from "../../assets/images/disc.svg";
import { useTranslation } from "react-i18next";

const CurtainMenu = (props) => {
  function openNav() {
    document.getElementById("curtainNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("curtainNav").style.width = "0%";
  }

  const { t, i18n } = useTranslation();

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  const onChangeLangClick = (lang) => {
    handleLanguage(lang);
    closeNav();
  };

  return (
    <Fragment>
      <div id="curtainNav" className={classes.overlay}>
        <div className={classes.overlayContent}>
          <div className={classes.overlayContent__header}>
            <p onClick={closeNav}>&#10006;</p>
          </div>
          <div className={classes.overlayContent__body}>
            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={t("home")}
                iconAlt={"signUp"}
                icon={homeSvg}
                link={"/userInfo/accountInfo"}
              />
            </div>
            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={t("team")}
                iconAlt={"signUp"}
                icon={teamSvg}
                link={"/userInfo/reports"}
              />
            </div>
            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={t("docs")}
                iconAlt={"signUp"}
                icon={docsSvg}
                link={"/userInfo/requests"}
              />
            </div>
            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={t("contact")}
                iconAlt={"signUp"}
                icon={messageSvg}
                link={"/userInfo/operations"}
              />
            </div>

            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={"DISCORD"}
                iconAlt={"signUp"}
                icon={discSvg}
                link={"/userInfo/setting"}
              />
            </div>

            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={"MINT"}
                // iconAlt={"signUp"}
                // icon={discSvg}
                link={"/userInfo/setting"}
              />
            </div>

            <div className={classes.hr}></div>

            <div
              className={classes.row}
              onClick={() => onChangeLangClick("en")}
            >
              <CurtainMenuLink
                title={"English"}
                // iconAlt={"signUp"}
                // icon={discSvg}
                link={"/userInfo/setting"}
              />
            </div>
            <div
              className={classes.row}
              onClick={() => onChangeLangClick("du")}
            >
              <CurtainMenuLink
                title={"Deutsch"}
                // iconAlt={"signUp"}
                // icon={discSvg}
                link={"/userInfo/setting"}
              />
            </div>
            <div
              className={classes.row}
              onClick={() => onChangeLangClick("ru")}
            >
              <CurtainMenuLink
                title={"Русский"}
                // iconAlt={"signUp"}
                // icon={discSvg}
                link={"/userInfo/setting"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.children} onClick={openNav}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default CurtainMenu;
