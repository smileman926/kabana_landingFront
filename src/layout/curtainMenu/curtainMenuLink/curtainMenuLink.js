import { Link } from "react-router-dom";
import classes from "./curtainMenuLink.module.scss";

const CurtainMenuLink = (props) => {
  const { icon, title, link, iconAlt } = props;

  return (
    <Link to={link} className={classes.link}>
      <div className={classes.container}>
        <div className={classes.container__detail}>
          {icon && <img src={icon} alt="hamburger-link"></img>}

          {title}
        </div>
      </div>
    </Link>
  );
};

export default CurtainMenuLink;
