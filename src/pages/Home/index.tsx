import styles from "./style.module.css";
import HomeCard from "../../components/HomeCard";
import areaAlimentacao from "../../assets/area-de-alimentacao.png";
import ifmsaq from "../../assets/ifmsaq.jpeg";
import prato from "../../assets/prato.svg";
import calendar from "../../assets/calendar.svg";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <HomeCard
          title="Ajude a Melhorar a Merenda Escolar!"
          icon={prato}
          image={areaAlimentacao}
          description="No IFmenu você pode avaliar a merenda do dia, ver a merenda da semana e nos dizer quais são seus pratos favoritos!"
          to="/prato_do_dia"
          callToAction="😋 Avalie o Prato do Dia!"
        />
        <HomeCard
          title="Quer Saber a Merenda de Amanha?"
          icon={calendar}
          image={ifmsaq}
          description="Aqui você pode ver o cardápio da semana, saiba quando o seu prato favorito será servido de novo!"
          to="/calendario"
          callToAction="🗓️ Ver Calendário!"
        />
      </div>
    </div>
  );
};

export default Home;
