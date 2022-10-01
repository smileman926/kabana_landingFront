import { Link } from "react-router-dom";
import classes from "./footer.module.scss";

import telegramImg from "../../assets/images/telegram.svg";
import discordImg from "../../assets/images/discord.svg";
import twitterImg from "../../assets/images/twitter.svg";
import githubImg from "../../assets/images/github.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Link to="#" target="_blank">
        <img src={telegramImg} alt="telegram"></img>
      </Link>
      <Link to="#" target="_blank">
        <img src={discordImg} alt="discord"></img>
      </Link>
      <Link to="#" target="_blank">
        <img src={twitterImg} alt="twitter"></img>
      </Link>
      <Link to="#" target="_blank">
        <img src={githubImg} alt="github"></img>
      </Link>
    </div>
  );
};

export default Footer;
