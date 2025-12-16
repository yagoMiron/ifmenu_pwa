const formatDateInString = (data = new Date()) => {
  // Formata a data para o local e fuso horário local
  const localDateString = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Campo_Grande", //fuso horario
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(data);

  // Reorganiza a string para o formato YYYY-MM-DD (ex: "2025-12-31")
  const [month, day, year] = localDateString.split("/");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
export default formatDateInString;
