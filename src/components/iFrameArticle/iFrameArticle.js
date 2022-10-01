import IFrame from "../iFrame/iFrame";
import classes from "./iFrameArticle.module.scss";

const IFrameArticle = (props) => {
  const { iFrame, title, content, direction } = props;

  return (
    <div className={classes.iFrameArticle} style={{ direction: direction }}>
      {iFrame && (
        <div className={classes.iFrameArticle__image}>
          <IFrame iframe={iFrame} />
        </div>
      )}
      <div className={classes.iFrameArticle__content}>
        <div className={classes.iFrameArticle__content_title}>
          {title}
          <div className={classes.iFrameArticle__content_des}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default IFrameArticle;
