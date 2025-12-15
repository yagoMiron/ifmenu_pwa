const URL_API = "https://apiifmenu-production.up.railway.app";

import axios from "axios";

const getPrato = async (token: string) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await axios.get(`${URL_API}/api/pratos`, config);
  return response.data.pratos[0];
};
export default getPrato;
