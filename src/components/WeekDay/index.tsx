import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import getPratoByDate from "../../services/getPratoByDate";

type Props = {
  dia: Date;
};

const WeekDay = ({ dia }: Props) => {
  const getDayName = (day: number) => {
    switch (day) {
      case 0:
        return "DOM";
      case 1:
        return "SEG";
      case 2:
        return "TER";
      case 3:
        return "QUA";
      case 4:
        return "QUI";
      case 5:
        return "SEX";
      case 6:
        return "SAB";
      default:
        return "";
    }
  };
  const formattedDateUTC = dia.toISOString().split("T")[0];
  const [nome, setNome] = useState("");
  const [image, setImage] = useState("loading");

  useEffect(() => {
    const getWeekDayData = async () => {
      const data = await getPratoByDate(formattedDateUTC);
      setNome(data?.nome || "-");
      setImage(data?.imagem || "");
    };
    getWeekDayData();
  });
  return (
    <div className={styles.weekRow}>
      <div className={styles.dayCollum}>
        <span className={styles.infoText} style={{ fontSize: 32 }}>
          {dia.getDate()}
        </span>
        <span className={styles.infoText} style={{ fontSize: 16 }}>
          {getDayName(dia.getDay())}
        </span>
      </div>
      <div className={styles.titleCollum}>
        <span className={styles.infoText} style={{ fontSize: 16 }}>
          {nome}
        </span>
      </div>
      <div className={styles.disheCollum}>
        {image === "loading" ? (
          <span className={styles.infoText} style={{ fontSize: 16 }}>
            Carregando...
          </span>
        ) : (
          <>
            {!image ? (
              <span className={styles.infoText} style={{ fontSize: 16 }}>
                -
              </span>
            ) : (
              <img className={styles.img} src={image} alt={nome} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WeekDay;
