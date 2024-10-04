// Função que obtém a primeira className do elemento passado por parametro e retorna a mesma.
/** 
 * @param {HTMLElement} element - Elemento a ser passado.
 * @returns {string} Retorna uma string contendo a classe do elemento HTML passado nos pârametros.
*/
export const getFirstClassName = (element) => {
  return `.${element.classList[0]}`;
};