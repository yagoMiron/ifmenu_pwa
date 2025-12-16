import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";
import { Comment } from "react-loader-spinner";
import Colors from "../../enums/colors";
import deleteFavoritos from "../../services/deleteFavoritos";
import postFavoritos from "../../services/postFavoritos";
import getAvaliacao from "../../services/getAvaliacao";
import postAvaliacao from "../../services/postAvaliacao";
import RateBtn from "../../components/RateButton";
import Separator from "../../components/Separator";
import star from "../../assets/star.svg";
import empty_star from "../../assets/star_empty.svg";
import type { Prato } from "../../types/Prato";
import getPratoByDate from "../../services/getPratoByDate";
import formatDateInString from "../../services/formatDateInString";
import getFavoritoById from "../../services/getFavoritoById";

const Plate = () => {
  const { theme, token } = useContext(UserContext);
  const [avaliacao, setAvaliacao] = useState(0);
  const [fav, setFav] = useState(false);
  const [pratoDoDia, setPrato] = useState<Prato | null>(null);

  const backgroundColor = theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT;
  const fontColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;

  const avaliar = (avaliacao: number) => {
    if (!pratoDoDia) {
      return;
    }
    setAvaliacao(avaliacao);
    postAvaliacao({
      id: pratoDoDia._id,
      token: token,
      avaliacao: avaliacao,
    });
  };

  useEffect(() => {
    (async () => {
      const formattedDateUTC = formatDateInString();
      const prato = await getPratoByDate(formattedDateUTC);
      if (!prato) {
        return;
      }
      setPrato(prato);
      const avaliacao = await getAvaliacao({
        id: prato._id,
        token: token,
      });
      setAvaliacao(avaliacao);
      const favoritado = await getFavoritoById(token, prato._id);
      setFav(favoritado);
    })();
  }, [token]);
  return (
    <div className={styles.main}>
      {pratoDoDia ? (
        <div className={styles.section}>
          <button
            className={styles.fav_btn}
            onClick={() => {
              if (fav === true) {
                deleteFavoritos({
                  pratoId: pratoDoDia._id,
                  token: token,
                });
                setFav(false);
              } else {
                postFavoritos({
                  pratoId: pratoDoDia._id,
                  token: token,
                });
                setFav(true);
              }
            }}
          >
            {avaliacao > 3 &&
              (fav ? (
                <img src={star} className={styles.imgStar} alt="favoritar" />
              ) : (
                <img
                  src={empty_star}
                  className={styles.imgStar}
                  alt="desfavoritar"
                />
              ))}
          </button>
          <div
            className={styles.pratoDoDia}
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <div>
              <img
                src={pratoDoDia?.imagem ? pratoDoDia.imagem : ""}
                className={styles.disheImg}
              />
            </div>
            <h2
              className={styles.dishe_title}
              style={{
                color: fontColor,
              }}
            >
              {pratoDoDia?.nome}
            </h2>
            <p
              className={styles.dishe_description}
              style={{
                color: fontColor,
              }}
            >
              {pratoDoDia?.descricao}
            </p>
            <Separator title="Avalie o Prato!" />
            <div className={styles.rating_section}>
              <RateBtn emogiValue={1} rate={avaliacao} setAvaliacao={avaliar} />
              <RateBtn emogiValue={2} rate={avaliacao} setAvaliacao={avaliar} />
              <RateBtn emogiValue={3} rate={avaliacao} setAvaliacao={avaliar} />
              <RateBtn emogiValue={4} rate={avaliacao} setAvaliacao={avaliar} />
              <RateBtn emogiValue={5} rate={avaliacao} setAvaliacao={avaliar} />
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Comment
            visible={true}
            height="120"
            width="120"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#0f0f0f"
            backgroundColor="#52cc62"
          />
        </div>
      )}
    </div>
  );
};

export default Plate;
