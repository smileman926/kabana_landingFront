import CurtainMenu from "./curtainMenu/curtainMenu";
import classes from "./layout.module.scss";
import TopNav from "./topNav/topNav";

import hamburgerSvg from "../assets/images/hamburger.svg";

export const Layout = (props) => {
  return (
    <div className={classes.container}>
      <TopNav />

      <div className={classes.container__hamburgerMenu}>
        <CurtainMenu>
          <img src={hamburgerSvg} alt="hamburger-menu"></img>
        </CurtainMenu>
      </div>

      {props.children}
    </div>
  );
};
