import classes from "./topNav.module.scss";

import logoImg from "../../assets/images/logo.png";
import Button from "../../components/buttons/button/button";
import WalletButton from "../../components/buttons/walletButton/walletButton";

import { useTranslation } from "react-i18next";
import OptionInput from "../../components/inputs/optionInput/optionInput";
import { topNavConstants } from "../../helpers/constants/topNavConstants";

const TopNav = () => {
  const { t, i18n } = useTranslation();

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  const scroll = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onMintClick = () => {
    window.open("https://kabana.club/", "_blank");
  };

  return (
    <div className={classes.topNav}>
      <div className={classes.topNav__logo} id={"home-section"}>
        <img src={logoImg} alt="logo"></img>
      </div>
      <div className={classes.topNav__pages}>
        <Button
          onClick={() => {
            scroll("#home-section");
          }}
        >
          {t("home")}
        </Button>
        <Button
          onClick={() => {
            scroll("#docs-section");
          }}
        >
          {t("docs")}
        </Button>
        <Button
          onClick={() => {
            scroll("#team-section");
          }}
        >
          {t("team")}
        </Button>
        <Button onClick={onMintClick} color={"darkred"}>
          <p>MINT</p>
        </Button>
      </div>
      <div className={classes.topNav__wallet}>
        {/* <WalletButton>CONNECT WALLET</WalletButton> */}
        <div className={classes.topNav__wallet_language}>
          <OptionInput
            key={"BrokerBranch"}
            options={topNavConstants.languageOptions}
            onPushValue={handleLanguage}
            //   value={enteredBrokerBranchId}
            //   placeholder={""}
            //   id={"BrokerBranch"}
            style={{
              width: "30%",
            }}
          />
        </div>
        <WalletButton>{t("connectWallet")}</WalletButton>
      </div>
    </div>
  );
};

export default TopNav;
