import classes from "./staffCard.module.scss";

const StaffCard = (props) => {
  const { image, name, post } = props;
  return (
    <div className={classes.staffCard}>
      <div className={classes.staffCard__image}>
        <img src={image} alt="staffImage"></img>
      </div>
      <div className={classes.staffCard__name}>{name}</div>
      <div className={classes.staffCard__post}>{post}</div>
    </div>
  );
};

export default StaffCard;
