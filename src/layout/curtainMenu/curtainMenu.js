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

  const onMintClick = () => {
    window.open("https://kabana.club/", "_blank");
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
                icon={homeSvg}
                scrollTo={"#home-section"}
              />
            </div>
            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={t("team")}
                icon={teamSvg}
                scrollTo={"#mobile-team-section"}
              />
            </div>
            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink
                title={t("docs")}
                icon={docsSvg}
                scrollTo={"#mobile-docs-section"}
              />
            </div>
            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink title={t("contact")} icon={messageSvg} />
            </div>

            <div className={classes.row} onClick={closeNav}>
              <CurtainMenuLink title={"DISCORD"} icon={discSvg} />
            </div>

            <div className={classes.row} onClick={onMintClick}>
              <CurtainMenuLink title={"MINT"} />
            </div>

            <div className={classes.hr}></div>

            <div
              className={classes.row}
              onClick={() => onChangeLangClick("en")}
            >
              <CurtainMenuLink title={"English"} />
            </div>
            <div
              className={classes.row}
              onClick={() => onChangeLangClick("du")}
            >
              <CurtainMenuLink title={"Deutsch"} />
            </div>
            <div
              className={classes.row}
              onClick={() => onChangeLangClick("ru")}
            >
              <CurtainMenuLink title={"Русский"} />
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
