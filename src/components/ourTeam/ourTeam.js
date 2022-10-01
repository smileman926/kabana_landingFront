import StaffCard from "../cards/staffCard/staffCard";
import classes from "./ourTeam.module.scss";

import alexImg from "../../assets/images/AlexAye.png";
import kabanImg from "../../assets/images/NFTkaban.png";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  //   const { staffList } = props;

  const { t } = useTranslation();

  const staffList = [
    ["1", kabanImg, "NFTkabana", "CEO"],
    ["2", alexImg, "AlexAye", "CTO"],
  ];

  return (
    <div className={classes.ourTeam}>
      <div className={classes.ourTeam__header}>{t("ourTeam")}</div>

      <div className={classes.ourTeam__cards}>
        {staffList &&
          staffList.map((item) => {
            return (
              <StaffCard
                key={item[0]}
                image={item[1]}
                name={item[2]}
                post={item[3]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default OurTeam;
