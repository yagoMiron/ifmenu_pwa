import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import FavoriteCard from "../../components/FavoriteCard";
import styles from "./styles.module.css";
import star from "../../assets/star.svg";
import getFavoritos from "../../services/getFavoritos";
import { TailSpin } from "react-loader-spinner";

const Favorites = () => {
  const { theme, token } = useContext(UserContext);
  const [listaFav, setListaFav] = useState<
    {
      nome: string;
      imagem: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const carregaFavoritos = async () => {
      const favoritos = await getFavoritos(token);
      if (!favoritos) {
        return;
      }
      setIsLoading(false);
      setListaFav(favoritos);
    };
    carregaFavoritos();
  }, [token]);
  return (
    <div className={styles.main}>
      <div
        className={styles.section}
        style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}
      >
        <div className={styles.containerTop}>
          <div className={styles.titleContainer}>
            <img src={star} style={{ height: 12 }} alt="estrela" />
            <img src={star} style={{ height: 24 }} alt="estrela" />
            <h2
              className={styles.title}
              style={{ color: theme === "dark" ? "#ccc" : "#333" }}
            >
              Favoritos
            </h2>
            <img src={star} style={{ height: 24 }} alt="estrela" />
            <img src={star} style={{ height: 12 }} alt="estrela" />
          </div>
        </div>
        <div
          className={styles.scrollContainer}
          style={{ width: "100%", marginBottom: 40 }}
        >
          {isLoading && (
            <div
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TailSpin
                visible={isLoading}
                height="120"
                width="120"
                color="#52cc62"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}

          {!isLoading && listaFav.length > 0 ? (
            <>
              {listaFav.map((favorito, index) => (
                <FavoriteCard
                  name={favorito.nome}
                  image={favorito.imagem}
                  key={index}
                />
              ))}
            </>
          ) : (
            <div
              style={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>Você ainda não tem pratos favoritos</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
