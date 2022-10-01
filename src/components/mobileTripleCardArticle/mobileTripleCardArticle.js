import classes from "./mobileTripleCardArticle.module.scss";

const MobileTripleCardArticle = (props) => {
  const { image1, image2, image3, backImage, title, content, direction } =
    props;

  return (
    <div
      className={classes.mobileTripleCardArticle}
      style={{ direction: direction }}
    >
      <div className={classes.mobileTripleCardArticle__image}>
        <div className={classes.flip_card}>
          <div className={classes.flip_card_inner}>
            <div className={classes.flip_card_front}>
              <img src={image1} alt="image1"></img>
            </div>
            <div className={classes.flip_card_back}>
              <img src={image1} alt="image1"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mobileTripleCardArticle__image}>
        <div className={classes.flip_card}>
          <div className={classes.flip_card_inner}>
            <div className={classes.flip_card_front}>
              <img src={image2} alt="image1"></img>
            </div>
            <div className={classes.flip_card_back}>
              <img src={image2} alt="image1"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mobileTripleCardArticle__image}>
        <div className={classes.flip_card}>
          <div className={classes.flip_card_inner}>
            <div className={classes.flip_card_front}>
              <img src={image3} alt="image1"></img>
            </div>
            <div className={classes.flip_card_back}>
              <img src={image3} alt="image1"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTripleCardArticle;
