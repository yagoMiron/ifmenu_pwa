import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";
import WeekDay from "../WeekDay";

const hoje = new Date();
const diaEmMillisegundos = 24 * 60 * 60 * 1000;

const arrayDias = [
  hoje,
  new Date(hoje.getTime() + diaEmMillisegundos),
  new Date(hoje.getTime() + diaEmMillisegundos * 2),
  new Date(hoje.getTime() + diaEmMillisegundos * 3),
  new Date(hoje.getTime() + diaEmMillisegundos * 4),
  new Date(hoje.getTime() + diaEmMillisegundos * 5),
  new Date(hoje.getTime() + diaEmMillisegundos * 6),
];

const WeekCalendar = () => {
  const { theme } = useContext(UserContext);
  return (
    <div className={styles.main}>
      <div
        className={styles.header}
        style={{ color: theme === "dark" ? "#f0f0f0" : "#0f0f0f" }}
      >
        <div className={styles.dayCollum}>
          <span className={styles.titleText}>DIA</span>
        </div>

        <div className={styles.titleCollum}>
          <span className={styles.titleText}>NOME</span>
        </div>
        <div className={styles.disheCollum}>
          <span className={styles.titleText}>PRATO</span>
        </div>
      </div>
      <div
        className={styles.calendar}
        style={{ backgroundColor: theme === "dark" ? "#ccc" : "#e5e5e5" }}
      >
        {arrayDias.map((dia, index) => (
          <WeekDay dia={dia} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
