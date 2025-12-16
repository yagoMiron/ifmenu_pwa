const URL_API = "https://apiifmenu-production.up.railway.app";
import axios from "axios";

type Props = {
  id: string;
  token: string;
};

const getAvaliacao = async ({ id, token }: Props) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get(
    `${URL_API}/api/pratos/${id}/minha-avaliacao`,
    config
  );
  if (response.data.avaliacao) {
    return response.data.avaliacao.avaliacao;
  }
};
export default getAvaliacao;
