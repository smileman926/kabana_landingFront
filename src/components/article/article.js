import classes from "./article.module.scss";

const Article = (props) => {
  const { image, backImage, flip, title, content, direction } = props;

  return (
    <div className={classes.article} style={{ direction: direction }}>
      {image && (
        <div className={classes.article__image}>
          <div
            className={
              flip === false ? classes.flip_card_fixed : classes.flip_card
            }
          >
            <div
              className={
                flip === false
                  ? classes.flip_card_inner_fixed
                  : classes.flip_card_inner
              }
            >
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
      <div className={classes.article__content}>
        <div className={classes.article__content_title}>
          {title}
          <div className={classes.article__content_des}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Article;
