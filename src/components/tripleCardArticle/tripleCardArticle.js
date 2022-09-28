import classes from "./tripleCardArticle.module.scss";

const TripleCardArticle = (props) => {
  const { image1, image2, image3, backImage, title, content, direction } =
    props;

  return (
    <div className={classes.tripleCardArticle} style={{ direction: direction }}>
      <div className={classes.tripleCardArticle__image}>
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
      <div className={classes.tripleCardArticle__image}>
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
      <div className={classes.tripleCardArticle__image}>
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
      <div className={classes.tripleCardArticle__content}>
        <div className={classes.tripleCardArticle__content_title}>
          {title}
          <div className={classes.tripleCardArticle__content_des}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleCardArticle;
