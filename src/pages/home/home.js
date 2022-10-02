import classes from "./home.module.scss";

import islandkc1Img from "../../assets/images/islandKC1.svg";
import islandkc1MobileImg from "../../assets/images/islandKC1.png";
import island2Img from "../../assets/images/island2.png";
import island3Img from "../../assets/images/island3.png";

// import kabanaClubImg from "../../assets/images/kabanaClub.png";
import mushroomsImg from "../../assets/images/mushrooms.png";
import caveImg from "../../assets/images/cave.png";
import caveMobileImg from "../../assets/images/caveMobile.png";
import rainbowMushroomImg from "../../assets/images/rainbowMushroom.png";
import gifka1Gif from "../../assets/images/gifka1.gif";

import spellbookImg from "../../assets/images/spellbook.png";
import jihnImg from "../../assets/images/jihn.png";
import toxicbeastImg from "../../assets/images/toxicbeast.png";

import clubButton from "../../assets/images/CLUB.png";
import papersButton from "../../assets/images/PAPERS.png";
import arenaButton from "../../assets/images/ARENA.png";
import Article from "../../components/article/article";
import { useTranslation } from "react-i18next";
import TripleCardArticle from "../../components/tripleCardArticle/tripleCardArticle";
import OurTeam from "../../components/ourTeam/ourTeam";
import Footer from "../../layout/footer/footer";
import MobileArticle from "../../components/mobileArticle/mobileArticle";
import MobileTripleCardArticle from "../../components/mobileTripleCardArticle/mobileTripleCardArticle";
import IFrame from "../../components/iFrame/iFrame";
import IFrameArticle from "../../components/iFrameArticle/iFrameArticle";

const Home = () => {
  const { t } = useTranslation();

  const iframeDesktop = `<iframe
  src="https://gateway.ipfscdn.io/ipfs/Qmej3ewrU7UMh4G5Sjp9rb5kjcAtByujUo7fXYpPgKE2pW/bundledrop.html?contract=0x46d0DD5aafeb3cd3Ec75907312e911ea806bDFA7&chainId=137&tokenId=2"
  width="600px"
  height="600px"
  style={"max-width:100%"}
  frameBorder="0"
></iframe>`;

  const iframeMobile = `<iframe
  src="https://gateway.ipfscdn.io/ipfs/Qmej3ewrU7UMh4G5Sjp9rb5kjcAtByujUo7fXYpPgKE2pW/bundledrop.html?contract=0x46d0DD5aafeb3cd3Ec75907312e911ea806bDFA7&chainId=137&tokenId=2"
  width="300px"
  height="500px"
  style={"max-width:100%"}
  frameBorder="0"
></iframe>`;

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
      <div className={classes.home__island1Mobile}>
        <img src={islandkc1MobileImg} alt="island1"></img>
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

      <div className={classes.home__articles} id={"docs-section"}>
        <Article
          image={gifka1Gif}
          title={t("KabanaClub")}
          content={t("KabanaClubDescription")}
          flip={false}
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
          flip={false}
        />

        <Article
          image={rainbowMushroomImg}
          title={t("howTheMining")}
          content={t("howTheMiningDescription")}
          direction="rtl"
        />

        <TripleCardArticle
          image1={toxicbeastImg}
          image2={jihnImg}
          image3={spellbookImg}
          title={t("mine")}
          content={t("mineDescription")}
        />

        <Article
          title={t("gamingSmartContract")}
          content={t("gamingSmartContractDescription")}
          direction="rtl"
        />

        <IFrameArticle
          iFrame={iframeDesktop}
          title={t("token")}
          content={t("tokenDescription")}
        />

        <OurTeam />

        <div className={classes.home__articles_footer}>
          <Footer />
        </div>
      </div>

      <div className={classes.home__mobileArticles}>
        <div
          className={classes.home__articles_mobileFooter}
          id={"mobile-docs-section"}
        >
          <Footer />
        </div>

        <MobileArticle
          title={t("KabanaClub")}
          content={t("KabanaClubDescription")}
        />

        <Article
          image={gifka1Gif}
          title={t("NFTMushroomNeeded")}
          content={t("NFTMushroomNeededDescription")}
        />

        <MobileArticle
          title={t("collectionOfNFTMushrooms")}
          content={t("collectionOfNFTMushroomsDescription")}
        />

        <MobileArticle image={mushroomsImg} />

        <MobileArticle
          title={t("gameToken")}
          content={t("gameTokenDescription")}
        />

        <MobileArticle image={caveMobileImg} />

        <MobileArticle
          title={t("howTheMining")}
          content={t("howTheMiningDescription")}
        />

        <MobileArticle image={rainbowMushroomImg} />

        <MobileArticle title={t("mine")} content={t("mineDescription")} />

        <MobileArticle
          title={t("gamingSmartContract")}
          content={t("gamingSmartContractDescription")}
        />

        <MobileTripleCardArticle
          image1={toxicbeastImg}
          image2={jihnImg}
          image3={spellbookImg}
        />

        <MobileArticle title={t("token")} content={t("tokenDescription")} />

        {/* <MobileArticle image={foxImg} /> */}

        <IFrame iframe={iframeMobile} />

        <OurTeam />

        <div
          className={classes.home__articles_mobileFooter}
          id="mobile-team-section"
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
