// import { Link } from "react-router-dom";
import classes from "./curtainMenuLink.module.scss";

const CurtainMenuLink = (props) => {
  const { icon, title, iconAlt, scrollTo } = props;

  const scroll = () => {
    if (scrollTo) {
      const section = document.querySelector(scrollTo);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={classes.link} onClick={scroll}>
      <div className={classes.container}>
        <div className={classes.container__detail}>
          {icon && <img src={icon} alt="hamburger-link"></img>}

          {title}
        </div>
      </div>
    </div>
  );
};

export default CurtainMenuLink;
