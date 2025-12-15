const URL_API = "https://apiifmenu-production.up.railway.app";

import axios from "axios";
import type { Prato } from "../types/Prato";

const getPratoByDate = async (formatedDate: string) => {
  const response = await axios.get(
    `${URL_API}/api/pratos/data/${formatedDate}`
  );
  const result = response.data.pratos[0];
  const prato: Prato = {
    id: result?._id || "0",
    nome: result?.nome || "-",
    descricao: result?.descricao || "Nenhum prato disponivel nesse dia",
    favoritado: result?.favoritado || false,
    imagem: result?.imagem || "",
  };
  return prato;
};
export default getPratoByDate;
