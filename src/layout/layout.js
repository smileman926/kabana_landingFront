import classes from "./layout.module.scss";
import TopNav from "./topNav/topNav";

export const Layout = (props) => {
  return (
    <div className={classes.container}>
      <TopNav />
      {props.children}
    </div>
  );
};
