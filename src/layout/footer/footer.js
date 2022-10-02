import classes from "./footer.module.scss";

import telegramImg from "../../assets/images/telegram.svg";
import discordImg from "../../assets/images/discord.svg";
import twitterImg from "../../assets/images/twitter.svg";
import githubImg from "../../assets/images/github.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a href="https://t.me/kabanaclub" target="_blank">
        <img src={telegramImg} alt="telegram"></img>
      </a>
      <a href="https://discord.gg/kabanaclub" target="_blank">
        <img src={discordImg} alt="discord"></img>
      </a>
      <a href="https://twitter.com/_kabanaclub" target="_blank">
        <img src={twitterImg} alt="twitter"></img>
      </a>
      <a href="https://github.com/Kabana-Club" target="_blank">
        <img src={githubImg} alt="github"></img>
      </a>
    </div>
  );
};

export default Footer;
