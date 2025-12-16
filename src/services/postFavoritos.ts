const URL_API = "https://apiifmenu-production.up.railway.app";
import axios from "axios";

type Props = {
  pratoId: string;
  token: string;
};

const postFavoritos = async ({ pratoId, token }: Props) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  await axios.post(`${URL_API}/api/auth/favoritos/${pratoId}`, {}, config);
};
export default postFavoritos;
