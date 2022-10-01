import classes from "./mobileArticle.module.scss";

const MobileArticle = (props) => {
  const { image, backImage, title, content, direction } = props;

  return (
    <div className={classes.mobileArticle} style={{ direction: direction }}>
      {image && (
        <div className={classes.mobileArticle__image}>
          <div className={classes.flip_card}>
            <div className={classes.flip_card_inner}>
              <div className={classes.flip_card_front}>
                <img src={image} alt="image1"></img>
              </div>
              <div className={classes.flip_card_back}>
                <img src={image} alt="image1"></img>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={classes.mobileArticle__content}>
        <div className={classes.mobileArticle__content_title}>{title}</div>
        <div className={classes.mobileArticle__content_des}>{content}</div>
      </div>
    </div>
  );
};

export default MobileArticle;
