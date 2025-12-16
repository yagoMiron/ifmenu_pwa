import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";
import Colors from "../../enums/colors";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  icon?: string;
  image: string;
  description: string;
  to: string;
  callToAction: string;
};

const HomeCard = ({
  title,
  icon,
  image,
  description,
  to,
  callToAction,
}: Props) => {
  const { theme } = useContext(UserContext);
  const backgroundColor = theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT;
  const textColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        {icon && <img className={styles.icon} src={icon} />}
        <div className={styles.titleDiv}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <img className={styles.img} src={image} alt={title} />
        <span>{description}</span>
        <div
          className={styles.separator}
          style={{ backgroundColor: textColor }}
        />
        <Link to={to} className={styles.link}>
          {callToAction}
        </Link>
      </div>
    </>
  );
};
export default HomeCard;
