const URL_API = "https://apiifmenu-production.up.railway.app";
import axios from "axios";

const getFavoritoById = async (token: string, prato_id: string) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get(
    `${URL_API}/api/auth/favoritos/${prato_id}`,
    config
  );

  return response.data?.favoritado;
};
export default getFavoritoById;
