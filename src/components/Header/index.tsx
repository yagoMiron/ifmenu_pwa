import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import ChangeThemeBtn from "../ChangeThemeBtn";
import Colors from "../../enums/colors";
import logo from "../../assets/menu2.svg";
import logout_dark_mode from "../../assets/logout_dark_mode.svg";
import logout_light_mode from "../../assets/logout_light_mode.svg";

const Header = () => {
  const { theme } = useContext(UserContext);

  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
      }}
    >
      <Link to={"/logout"}>
        {theme === "dark" ? (
          <img
            className={styles.icon}
            src={logout_dark_mode}
            alt="trocar para light mode"
          />
        ) : (
          <img
            className={styles.icon}
            src={logout_light_mode}
            alt="trocar para dark mode"
          />
        )}
      </Link>
      <div
        className={styles.logo}
        style={{
          backgroundColor: theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
        }}
      >
        <img className={styles.logo_img} src={logo} alt="IFmenu" />
      </div>
      <ChangeThemeBtn />
    </div>
  );
};

export default Header;
