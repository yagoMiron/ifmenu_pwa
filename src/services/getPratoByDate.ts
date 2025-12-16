const URL_API = "https://apiifmenu-production.up.railway.app";

import axios from "axios";
import type { Prato } from "../types/Prato";

const getPratoByDate = async (formatedDate: string) => {
  const response = await axios.get(
    `${URL_API}/api/pratos/data/${formatedDate}`
  );
  const result = response.data.pratos[0];
  const prato: Prato = result;
  return prato;
};
export default getPratoByDate;
