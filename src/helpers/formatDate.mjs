export const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-'); // Divide a string em ano, mês e dia
    return `${day}/${month}/${year}`; // Reorganiza no formato DD/MM/YYYY
  }