import classes from "./home.module.scss";

import islandkc1Img from "../../assets/images/islandKC1.svg";
import island2Img from "../../assets/images/island2.png";
import island3Img from "../../assets/images/island3.png";

import kabanaClubImg from "../../assets/images/kabanaClub.png";
import mushroomsImg from "../../assets/images/mushrooms.png";
import caveImg from "../../assets/images/cave.png";
import rainbowMushroomImg from "../../assets/images/rainbowMushroom.png";
import foxImg from "../../assets/images/fox.png";

import spellbookImg from "../../assets/images/spellbook.png";
import jihnImg from "../../assets/images/jihn.png";
import toxicbeastImg from "../../assets/images/toxicbeast.png";

import clubButton from "../../assets/images/CLUB.png";
import papersButton from "../../assets/images/PAPERS.png";
import arenaButton from "../../assets/images/ARENA.png";
import Article from "../../components/article/article";
import { useTranslation } from "react-i18next";
import TripleCardArticle from "../../components/tripleCardArticle/tripleCardArticle";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.home}>
      <div className={classes.home__cloud1}></div>
      <div className={classes.home__cloud2}></div>
      <div className={classes.home__cloud3}></div>
      <div className={classes.home__cloud4}></div>
      <div className={classes.home__ellipse3}></div>
      <div className={classes.home__ellipse4}></div>
      <div className={classes.home__ellipse5}></div>
      <div className={classes.home__tunam1}></div>
      <div className={classes.home__island1}>
        <img src={islandkc1Img} alt="island1"></img>
        <div className={classes.home__island1_button}>
          <img src={clubButton} alt="button"></img>
        </div>
      </div>
      <div className={classes.home__island2}>
        <img src={island2Img} alt="island2"></img>
        <div className={classes.home__island2_button}>
          <img src={papersButton} alt="button"></img>
        </div>
      </div>
      <div className={classes.home__island3}>
        <img src={island3Img} alt="island3"></img>
        <div className={classes.home__island3_button}>
          <img src={arenaButton} alt="button"></img>
        </div>
      </div>

      <div className={classes.home__articles}>
        <Article
          image={kabanaClubImg}
          title={t("KabanaClub")}
          content={t("KabanaClubDescription")}
        />

        <Article
          image={mushroomsImg}
          title={t("collectionOfNFTMushrooms")}
          content={t("collectionOfNFTMushroomsDescription")}
          direction="rtl"
        />

        <Article
          image={caveImg}
          title={t("gameToken")}
          content={t("gameTokenDescription")}
        />

        <Article
          image={rainbowMushroomImg}
          title={t("howTheMining")}
          content={t("howTheMiningDescription")}
          direction="rtl"
        />

        <TripleCardArticle
          image1={spellbookImg}
          image2={jihnImg}
          image3={toxicbeastImg}
          title={t("mine")}
          content={t("mineDescription")}
        />

        <Article
          title={t("gamingSmartContract")}
          content={t("gamingSmartContractDescription")}
          direction="rtl"
        />

        <Article
          image={foxImg}
          title={t("token")}
          content={t("tokenDescription")}
        />
      </div>
    </div>
  );
};

export default Home;
