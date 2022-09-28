import classes from "./walletButton.module.scss";

import lockImg from "../../../assets/images/lock.svg";

const WalletButton = (props) => {
  const { color, status } = props;

  return (
    <button
      onClick={props.onClick}
      className={classes.walletButton}
      style={{ backgroundColor: color }}
    >
      <img src={lockImg} alt="lock"></img>
      {props.children}
    </button>
  );
};

export default WalletButton;
